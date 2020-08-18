import Layout from "../components/Layout";
import { useState } from 'react';
import { Row, Col, Container, Card, CardBody, CardHeader, Spinner, Alert } from "reactstrap";
import FormLogin from '../components/Sections/FormLogin';
import { signIn } from "../firebase";

export default function ingresar() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = (data) => {
    setSubmitError(null); //Reseteamos el error
    setIsLoading(true); //Activamos el loading Spinner
    signIn(data.type, data.email, data.password)
      .then((user) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setSubmitError(err)
        setIsLoading(false);
      })
  }

  return (
    <Layout title="Reparo Altoque - Ingresar">
      <div className="main bg-gradient-warning">
        <Container className="pt-8" style={{ minHeight: "100vh" }}>
          <Row className="justify-content-center">
            <Col md="8">
              <Card>
                <CardHeader>
                  {submitError && (
                    <Row>
                      <Alert color="danger" fade className="w-100" toggle={() => setSubmitError(null)}>
                        {submitError?.message}
                      </Alert>
                    </Row>
                  )}
                  <Row>
                    <Col>
                      <h4 className="title text-primary display-4 mb-0">
                        Ingresar
                      </h4>
                    </Col>
                    {isLoading && (
                      <Col xs="1">
                        <Spinner type="grow" color="success" />
                      </Col>
                    )}
                  </Row>
                </CardHeader>
                <CardBody>
                  <FormLogin onSubmit={handleSubmit} disabled={isLoading} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}