import React from "react";

import {
    Container,
    Row,
    Button,
    Col,
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SectionCategorias() {
    return (
        <section className="section bg-secondary mt-6">
            <Container>
                <Row>
                    <h2 className="display-2 mb-5 col-lg-12 text-center">
                        Categrías de Servicios
                    </h2>

                    <Col md="6">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
                                style="background-image: "
                                style={{
                                    background:
                                        "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                }}
                            />
                            <CardBody>
                                <div className="content-bottom">
                                    <CardTitle>
                                        <h5 className="mb-3 text-white">
                                            Servicios para el Hogar
                                        </h5>
                                    </CardTitle>
                                    <h6 className="card-category text-white opacity-8">
                                        Albañil
                                        <br />
                                        <br />
                                        Electricistas
                                        <br />
                                        <br />
                                        Pintores
                                        <br />
                                        <br />
                                        Servicio de Aires Acondicionados
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
                                style="background-image: "
                                style={{
                                    background:
                                        "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                }}
                            />
                            <CardBody>
                                <div className="content-bottom">
                                    <CardTitle>
                                        <h5 className="mb-3 text-white">
                                            Especialistas
                                        </h5>
                                    </CardTitle>
                                    <h6 className="card-category text-white opacity-8">
                                        Abogados
                                        <br />
                                        <br />
                                        Contadores
                                        <br />
                                        <br />
                                        Arquitectos
                                        <br />
                                        <br />
                                        Traductores
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
                                style="background-image: "
                                style={{
                                    background:
                                        "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                }}
                            />
                            <CardBody>
                                <div className="content-bottom">
                                    <CardTitle>
                                        <h5 className="mb-3 text-white">
                                            Mantenimiento
                                        </h5>
                                    </CardTitle>
                                    <h6 className="card-category text-white opacity-8">
                                        Gasistas
                                        <br />
                                        <br />
                                        Ascensores
                                        <br />
                                        <br />
                                        Mantenimiento Tanque de Agua
                                        <br />
                                        <br />
                                        Fumigación
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
                                style="background-image: "
                                style={{
                                    background:
                                        "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                }}
                            />
                            <CardBody>
                                <div className="content-bottom">
                                    <CardTitle>
                                        <h5 className="mb-3 text-white">
                                            Obras y Construcción
                                        </h5>
                                    </CardTitle>
                                    <h6 className="card-category text-white opacity-8">
                                        Durlock
                                        <br />
                                        <br />
                                        Cristaleros
                                        <br />
                                        <br />
                                        Carpinteros
                                        <br />
                                        <br />
                                        Cortinas Metálicas
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
                                style="background-image: "
                                style={{
                                    background:
                                        "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                }}
                            />
                            <CardBody>
                                <div className="content-bottom">
                                    <CardTitle>
                                        <h5 className="mb-3 text-white">
                                            Diseños y Programas
                                        </h5>
                                    </CardTitle>
                                    <h6 className="card-category text-white opacity-8">
                                        Identity Designer
                                        <br />
                                        <br />
                                        Programadores
                                        <br />
                                        <br />
                                        Diseñadores Gráficos
                                        <br />
                                        <br />
                                        Diseñadores UI/UX
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
                                style="background-image: "
                                style={{
                                    background:
                                        "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                }}
                            />
                            <CardBody>
                                <div className="content-bottom">
                                    <CardTitle>
                                        <h5 className="mb-3 text-white">
                                            Cursos y Clases
                                        </h5>
                                    </CardTitle>
                                    <h6 className="card-category text-white opacity-8">
                                        Profesores Particulares (Escolar)
                                        <br />
                                        <br />
                                        Profesores Particulares (Universidad)
                                        <br />
                                        <br />
                                        Profesores Particulares (Idiomas)
                                    </h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="5">
                        <Button color="primary">
                            Explorar todas las categorías
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="ml-3"
                            />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
