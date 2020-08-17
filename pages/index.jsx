import Layout from "../components/Layout";
// import Input from "../components/Input";
// import Button from "../components/Button";

import SectionWelcome from "../components/Sections/SectionWelcome";
import SectionBuscar from "../components/Sections/SectionBuscar";
import SectionIniciar from "../components/Sections/SectionIniciar";

import { Col, Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

export default function Home() {
    return (
        <Layout>
            <div className="main" style={{ minHeight: "100vh" }}>
                <SectionWelcome />
                <SectionBuscar />
                <section className="section bg-secondary">
                    <Col md="12">
                        <h3 className="title text-center display-3 mb-5">
                            Algunos trabajos a distancia Recomendados
                        </h3>
                    </Col>
                    <Col
                        md="12"
                        className="d-flex justify-content-center"
                        style={{
                            overflowX: "scroll",
                        }}
                    >
                        <Col
                            md="4"
                            className="d-inline"
                            // style={{ minWidth: "15rem" }}
                        >
                            <Card>
                                <CardImg
                                    alt="..."
                                    src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                                    top
                                ></CardImg>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>

                                    <CardText>
                                        <small className="text-muted">
                                            Nombre del profesional
                                        </small>
                                        <br />
                                        <br />
                                        <small className="text-muted">
                                            las estrellas de puntuación
                                        </small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            md="4"
                            className="d-inline"
                            // style={{ minWidth: "15rem" }}
                        >
                            <Card>
                                <CardImg
                                    alt="..."
                                    src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                                    top
                                ></CardImg>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>

                                    <CardText>
                                        <small className="text-muted">
                                            Nombre del profesional
                                        </small>
                                        <br />
                                        <br />
                                        <small className="text-muted">
                                            las estrellas de puntuación
                                        </small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            md="4"
                            className="d-inline"
                            // style={{ minWidth: "15rem" }}
                        >
                            <Card>
                                <CardImg
                                    alt="..."
                                    src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                                    top
                                ></CardImg>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>

                                    <CardText>
                                        <small className="text-muted">
                                            Nombre del profesional
                                        </small>
                                        <br />
                                        <br />
                                        <small className="text-muted">
                                            las estrellas de puntuación
                                        </small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                            md="4"
                            className="d-inline"
                            // style={{ minWidth: "15rem" }}
                        >
                            <Card>
                                <CardImg
                                    alt="..."
                                    src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                                    top
                                ></CardImg>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>

                                    <CardText>
                                        <small className="text-muted">
                                            Nombre del profesional
                                        </small>
                                        <br />
                                        <br />
                                        <small className="text-muted">
                                            las estrellas de puntuación
                                        </small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Col>
                </section>
                <SectionIniciar />
            </div>
        </Layout>
    );
}
