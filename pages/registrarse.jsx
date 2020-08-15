import Layout from "../components/Layout";

import { Row, Col, Container, Card, CardBody } from "reactstrap";

import FormRegistro from "../components/Sections/FormRegistro";

export default function Registrarse() {
    return (
        <>
            <Layout>
                <div className="main bg-gradient-default pb-9">
                    <Container className="mt-5 pt-5">
                        <Card className="col-lg-10 mx-auto mt-4">
                            <CardBody className="px-0 py-0">
                                <Row>
                                    <Col md="6" className="px-3 py-3">
                                        <FormRegistro typeUser="client" />
                                    </Col>
                                    <Col
                                        md="6"
                                        className="bg-primary text-white px-3 py-3"
                                        style={{ borderRadius: 5 }}
                                    >
                                        <FormRegistro typeUser="professional" />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </Layout>
        </>
    );
}
