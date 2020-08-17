import React from "react";

import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

export default function SectionIniciar() {
    return (
        <section className="section section-lg pt-5 bg-gradient-success">
            <Container>
                <Row className="justify-content-center">
                    <h3 className="display-3 text-center col-lg-12 mb-3 text-white">
                        ¿Cómo empiezo?
                    </h3>
                    <h5 className="text-center mb-5 text-white">
                        Es fácil, publicar tus servicios sólo te lleva 3 simples
                        pasos, ¡Y es gratis!
                    </h5>
                    <Col lg="12">
                        <Row className="row-grid">
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody>
                                        <h5 className="text-primary title display-4">
                                            Registráte
                                        </h5>
                                        <p className="description mt-3">
                                            Creá una cuenta rápidamente usando
                                            tu Facebook, tu cuenta de Google o
                                            tu correo electrónico.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody>
                                        <h6 className="text-success title display-4">
                                            Publicá
                                        </h6>
                                        <p className="description mt-3">
                                            Publicá tu servicio de forma rápida,
                                            sencilla y sin ningún costo.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="card-lift--hover shadow border-0">
                                    <CardBody>
                                        <h6 className="text-warning title display-4">
                                            Conseguí Clientes
                                        </h6>
                                        <p className="description mt-3">
                                            Nosotros te vamos a recomendar a los
                                            clientes más cercanos que necesiten
                                            tu servicio. Mientras mejores
                                            calificaciones tengas, mayor será tu
                                            alcance.
                                        </p>
                                        <div></div>
                                        <Button
                                            className="mt-4"
                                            color="warning"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            registrarse
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
