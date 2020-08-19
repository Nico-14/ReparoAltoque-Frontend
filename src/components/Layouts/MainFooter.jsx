import React from "react";

import { Container, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainFooter() {
    return (
        <React.Fragment>
            <footer className="footer footer-big bg-gradient-default">
                <Container className="content pb-5">
                    <Row>
                        <h3 className="text-white title text-center col-lg-12">
                            Compartir en redes Sociales
                        </h3>
                        <Container className="social-line col-lg-12 social-line-big-icons px-3">
                            <Row>
                                <Col md="4" className="mt-3 border-md-0">
                                    <a
                                        href="la url para compartir en redes sociales"
                                        className="btn btn-gradient-twitter btn-footer"
                                    >
                                        <FontAwesomeIcon
                                            icon={["fab", "twitter"]}
                                            size="3x"
                                        />
                                        <p className="title text-capitalize">
                                            twitter
                                        </p>
                                        <p className="subtitle">compartir</p>
                                    </a>
                                </Col>
                                <Col md="4" className="mt-3">
                                    <a
                                        href="la url para compartir en redes sociales"
                                        className="btn btn-gradient-facebook btn-footer"
                                    >
                                        <FontAwesomeIcon
                                            icon={["fab", "facebook"]}
                                            size="3x"
                                        />
                                        <p className="title text-capitalize">
                                            facebook
                                        </p>
                                        <p className="subtitle">compartir</p>
                                    </a>
                                </Col>
                                <Col md="4" className="mt-3">
                                    <a
                                        href="la url para compartir en redes sociales"
                                        className="btn btn-gradient-slack btn-footer"
                                    >
                                        <FontAwesomeIcon
                                            icon={["fab", "whatsapp"]}
                                            size="3x"
                                        />
                                        <p className="title text-capitalize">
                                            WhatsApp
                                        </p>
                                        <p className="subtitle">compartir</p>
                                    </a>
                                </Col>
                            </Row>
                        </Container>

                        <hr className="bg-white opacity-3" />

                        <Col md="3" className="column pt-3">
                            <h4 className="mb-4">Nosotros</h4>
                            <ul className="links-vertical">
                                <li>
                                    <a>Cómo Registrarse</a>
                                </li>
                                <li>
                                    <a>Cómo Publicar Servicios</a>
                                </li>
                                <li>
                                    <a>Cómo Buscar Servicios</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="2" className="column pt-3">
                            <h4 className="mb-4">Links</h4>
                            <ul className="links-vertical">
                                <li>
                                    <a>Ayuda</a>
                                </li>
                                <li>
                                    <a>Link</a>
                                </li>
                                <li>
                                    <a>Link</a>
                                </li>
                                <li>
                                    <a>Link</a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="column pt-3" md="7">
                            <h4 className="mb-4">Información</h4>
                            <div className="links-vertial">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Porro consectetur ipsum
                                    voluptas eos tempore atque ad aliquam totam
                                    ullam commodi, quibusdam, dolores quasi.
                                    Maxime quod velit, quaerat facilis esse
                                    sunt.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <hr className="bg-white opacity-3" />
                    <div className="column">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <a className="nav-link">
                                    Terminos & Condiciones
                                </a>
                            </li>
                            <li>
                                <a className="nav-link">
                                    Politica de Privacidad
                                </a>
                            </li>
                            <li>
                                <a className="nav-link">
                                    Autores del Sitio Web
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </footer>
        </React.Fragment>
    );
}
