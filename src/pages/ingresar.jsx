import Layout from "../components/Layout";

import { Row, Col, Container } from "reactstrap";
import FormLogin from "../components/Sections/FormLogin";

export default function Ingresar() {
    return (
        <Layout>
            <div className="main bg-gradient-warning">
                <Container className="pt-8" style={{ minHeight: "100vh" }}>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <FormLogin />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
}
