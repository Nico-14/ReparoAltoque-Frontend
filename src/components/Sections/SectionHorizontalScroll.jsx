import React from "react";

import { Col, Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

export default function SectionHorizontalScroll({
    titulo,
    arrayPublicaciones,
    bgColor,
}) {
    return (
        <section className={"section mt-6 " + bgColor}>
            <Col md="12">
                <h3 className="title text-center display-3 mb-5">{titulo}</h3>
            </Col>
            <Col
                md="12"
                className="d-flex"
                style={{
                    overflowX: "scroll",
                }}
            >
                {arrayPublicaciones.map((publicacion) => (
                    <Col
                        md="2"
                        className="d-inline"
                        style={{ minWidth: "15rem" }}
                        key={publicacion}
                    >
                        <Card>
                            <CardImg
                                alt="..."
                                src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"
                                top
                            ></CardImg>
                            <CardBody>
                                <CardTitle>Titulo de la Publicación</CardTitle>

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
                ))}
            </Col>
        </section>
    );
}
