import Layout from "../components/Layout";
import { Row, Col, Container, Card, CardBody, CardHeader } from "reactstrap";
import { createAccount } from "../firebase";
import FormRegistro from "../components/Sections/FormRegistro";

export default function Registrarse() {
  const onSubmit = (data) => {
    createAccount(data.type, data.email, data.password, data.name).then(user => {
      let endpointRegitrarUsuario = "/User/create/" + data.userType; // "professional" si es un prefesional, o "client" si es un cliente
      //la U de User tiene que estar en mayúscula si o si
      fetch(process.env.NEXT_PUBLIC_API_URL + endpointRegitrarUsuario, {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email, //éstos 4 puntos son obligatorios
          name: data.displayName || user.displayName,
          firebaseId: user.id,
          lineOfWork: 10, // si es 1 es un cliente, 2 el rubro en el que trabaja no está en la lista, entre 3 y 44 es la lista de rubros actual
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
  };

  return (
    <Layout title="ReparoAltoque - Registrarse">
      <div className="main bg-gradient-warning">
        <Container className="pt-8" style={{ minHeight: "100vh" }}>
          <Row className="justify-content-center">
            <Col md="10">
              <Card>
                <CardHeader>
                  <h4 className="title text-primary display-4 mb-0">
                    Registráte en 5 minutos
                  </h4>
                </CardHeader>
                <CardBody>
                  <FormRegistro onSubmit={onSubmit} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
