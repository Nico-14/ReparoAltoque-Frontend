import Layout from "../components/Layout";

import { Row, Col, Container, Card, CardBody, CardHeader } from "reactstrap";

import FormRegistro from "../components/Sections/FormRegistro";

export default function Registrarse() {
    return (
        <Layout>
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
                                    <FormRegistro />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
}
