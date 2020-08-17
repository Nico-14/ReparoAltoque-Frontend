import Layout from "../components/Layout";
import { Row, Col, Container, Card, CardBody, CardHeader } from "reactstrap";
import FormLogin from '../components/Sections/FormLogin';
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

export default function ingresar() {
  return (
    <Layout title="Reparo Altoque - Ingresar">
      <div className="main bg-gradient-warning">
        <Container className="pt-8" style={{ minHeight: "100vh" }}>
          <Row className="justify-content-center">
            <Col md="8">
              <Card>
                <CardHeader>
                  <h4 className="title text-primary display-4 mb-0">
                    Ingresar
                  </h4>
                </CardHeader>
                <CardBody>
                  <FormLogin />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}