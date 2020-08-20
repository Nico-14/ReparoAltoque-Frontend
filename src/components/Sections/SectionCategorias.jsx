import React from "react";

import { Row, Button, Col } from "reactstrap";

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
                    transition: 0.2s;
                }
                :global(.circle:hover) {
                    transform: scale(1.1);
                    cursor: pointer;
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
                    <Col md="12" className="text-right mt-3">
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
                    <h2 className="display-2 my-5 col-lg-12">
                        Categrías de Servicios a Distancia
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

                    <Col md="12" className="mt-3">
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
