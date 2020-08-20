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

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SectionCategorias() {
    return (
        <section className="section" style={{ marginTop: "-8rem" }}>
            <style jsx>{`
                :global(.block) {
                    text-align: center;
                    vertical-align: middle;
                }
                :global(.circle) {
                    background: url("https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg");
                    border-radius: 50%;
                    color: white;
                    width: 250px;
                    height: 250px;
                    font-weight: bold;
                    display: table;
                    margin: 0px auto;
                }
                :global(.circle p) {
                    vertical-align: middle;
                    display: table-cell;
                }
            `}</style>
            <div className="container-fluid">
                <Row className="justify-content-center">
                    <h2 className="display-2 mb-5 col-lg-12 text-right">
                        Categrías de Servicios a Domicilio
                    </h2>
                    <Col md="3" className="block pt-4">
                        <h5>Servicios para el Hogar</h5>
                        <div className="circle">
                            <br />
                            <p>
                                Albañiles
                                <br />
                                <br />
                                Electricistas
                                <br />
                                <br />
                                Pintores
                                <br />
                                <br />
                                Servicio de Aires <br /> Acondicionados
                            </p>
                        </div>
                    </Col>
                    <Col md="3" className="block pt-4">
                        <h5 className="mb-3">Especialistas</h5>
                        <div className="circle">
                            <p>
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
                            </p>
                        </div>
                    </Col>
                    <Col md="3" className="block pt-4">
                        <h5 className="mb-3">Mantenimiento</h5>
                        <div className="circle">
                            <p>
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
                            </p>
                        </div>
                    </Col>
                    <Col md="3" className="block pt-4">
                        <h5 className="mb-3">Obras y Construcción</h5>
                        <div className="circle">
                            <p>
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
                            </p>
                        </div>
                    </Col>
                    <Col md="3" className="block pt-4">
                        <h5 className="mb-3">Diseños y Programas</h5>
                        <div className="circle">
                            <p>
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
                            </p>
                        </div>
                    </Col>
                    <Col md="3" className="block pt-4">
                        <h5 className="mb-3">Cursos y Clases</h5>
                        <div className="circle">
                            <p>
                                Profesores <br />
                                Particulares (Escolar)
                                <br />
                                <br />
                                Profesores Particulares <br /> (Universidad)
                                <br />
                                <br />
                                Profesores Particulares <br /> (Idiomas)
                            </p>
                        </div>
                    </Col>

                    {/* <Col md="12">
                        <Card
                            className="card-blog card-background"
                            data-animation="zooming"
                        >
                            <div
                                className="full-background"
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
                                        Albañiles
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
                    </Col> */}

                    <Col md="12">
                        <Link href="/categorias">
                            <a className="text-primary">
                                <Button color="primary">
                                    Explorar todas las categorías
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className="ml-3"
                                    />
                                </Button>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
