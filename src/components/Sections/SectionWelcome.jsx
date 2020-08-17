import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export default function SectionWelcome() {
    return (
        <section className="section pb-5 bg-gradient-warning">
            <Container>
                <Row className="row-grid align-items-between pt-5">
                    <Col className="order-lg-1" lg="6">
                        <h4 className="display-3 text-center mb-0 text-white">
                            ¿Necesitás un profesional?
                        </h4>
                        <Card className="shadow shadow-lg--hover mt-5">
                            <CardBody>
                                <div className="d-flex px-3">
                                    <div>
                                        <h5 className="title text-success">
                                            Trabajos a Distancia
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Minus,
                                            corporis amet asperiores aspernatur
                                            voluptate dicta pariatur veniam
                                            ullam debitis mollitia, illo sequi
                                            laudantium, unde tenetur qui
                                            inventore eum nobis. Animi.
                                        </p>
                                        <a
                                            className="btn btn-success"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Buscar trabajos a distancia
                                        </a>
                                        <h5 className="title text-warning mt-5">
                                            Trabajos a Domicilio
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Libero
                                            aliquam blanditiis, ipsa, voluptatem
                                            dolorem fuga voluptatum voluptate
                                            voluptatibus neque harum incidunt
                                            optio esse nulla nisi ullam ea sequi
                                            quis eos!
                                        </p>
                                        <a
                                            className="btn btn-warning"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Buscar Trabajos a Domicilio
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="order-lg-1" lg="6">
                        <h4 className="display-3 text-center mb-0 text-white">
                            ¿Sos un profesional?
                        </h4>
                        <Card className="shadow shadow-lg--hover mt-5">
                            <CardBody>
                                <div className="d-flex px-3">
                                    <div className="">
                                        <h5 className="title text-primary">
                                            Registráte ya mísmo
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit. Libero
                                            aliquam blanditiis, ipsa, voluptatem
                                            dolorem fuga voluptatum voluptate
                                            voluptatibus neque harum incidunt
                                            optio esse nulla nisi ullam ea sequi
                                            quis eos!
                                        </p>
                                        <a
                                            className="btn btn-primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            registrarse
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
