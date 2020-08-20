import Layout from '../components/Layout';
import { Row, Col, Container, Card, CardBody, CardHeader, Spinner, Alert } from 'reactstrap';
import { createAccount } from '../firebase';
import FormRegistro from '../components/Sections/FormRegistro';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Registrarse() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const router = useRouter();

  const onSubmit = (data) => {
    setSubmitError(null); //Reseteamos el error
    setIsLoading(true); //Activamos el loading Spinner
    let tempUser;
    createAccount(data.type, data.email, data.password, data.name)
      .then((user) => {
        tempUser = user;
        let endpointRegitrarUsuario = '/User/create/' + data.userType; // "professional" si es un prefesional, o "client" si es un cliente
        //la U de User tiene que estar en mayúscula si o si
        return fetch(process.env.NEXT_PUBLIC_API_URL + endpointRegitrarUsuario, {
          method: 'post',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email, //éstos 4 puntos son obligatorios
            name: data.displayName || user.displayName,
            firebaseId: user.uid,
            lineOfWork: 1,
          }),
        });
      })
      .then(async (res) => {
        if (res.ok) return res.json();
        const message = await res.json();
        throw new Error(message?.message);
      })
      .then((res) => {
        if ('userCreated' in res && res?.typeUser === 'professional') {
          router.push('/elegir-rubro');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        if (tempUser)
          tempUser
            .delete()
            .then(() => {
              setSubmitError(err);
              setIsLoading(false);
            })
            .catch(() => {
              setSubmitError(err);
              setIsLoading(false);
            });
        else {
          setSubmitError(err);
          setIsLoading(false);
        }
      });
  };

  return (
    <Layout title="ReparoAltoque - Registrarse">
      <div className="main bg-gradient-warning">
        <Container className="pt-8" style={{ minHeight: '100vh' }}>
          <Row className="justify-content-center">
            <Col md="10">
              <Card>
                <CardHeader>
                  {submitError && (
                    <Row>
                      <Alert
                        color="danger"
                        fade
                        className="w-100"
                        toggle={() => setSubmitError(null)}
                      >
                        {submitError?.message}
                      </Alert>
                    </Row>
                  )}
                  <Row>
                    <Col>
                      <h4 className="title text-primary display-4 mb-0">Registráte en 5 minutos</h4>
                    </Col>
                    {isLoading && (
                      <Col xs="1">
                        <Spinner type="grow" color="success" />
                      </Col>
                    )}
                  </Row>
                </CardHeader>
                <CardBody>
                  <FormRegistro
                    onSubmit={onSubmit}
                    submitError={submitError}
                    disabled={isLoading}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
