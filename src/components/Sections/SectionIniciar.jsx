import React from "react";

import { Container, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserFriends,
    faPeopleArrows,
    faChevronRight,
    faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function SectionIniciar() {
    return (
        <section className="section section-lg pt-5 bg-secondary">
            <Container>
                <Row className="justify-content-center">
                    <h3 className="display-3 text-center col-lg-12 mb-3">
                        ¿Cómo empiezo?
                    </h3>
                    <h5 className="text-center mb-5">
                        Es fácil, publicar tus servicios sólo te lleva 3 simples
                        pasos, ¡Y es gratis!
                    </h5>
                    <Row className="row-grid px-3">
                        <Col lg="4" className="mb-4 mb-lg-0">
                            <div className="info">
                                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                                    <FontAwesomeIcon icon={faUserFriends} />
                                </div>
                                <h6 className="info-title text-uppercase text-primary">
                                    Registráte
                                </h6>
                                <p className="description opacity-8">
                                    Creá una cuenta rápidamente usando tu
                                    Facebook, tu cuenta de Google o tu correo
                                    electrónico.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" className="mb-4 mb-lg-0">
                            <div className="info">
                                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </div>
                                <h6 className="info-title text-uppercase text-warning">
                                    Publicá
                                </h6>
                                <p className="description opacity-8">
                                    Publicá tu servicio de forma rápida,
                                    sencilla y sin ningún costo.
                                </p>
                            </div>
                        </Col>
                        <Col lg="4" className="mb-4 mb-lg-0">
                            <div className="info">
                                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                                    <FontAwesomeIcon icon={faPeopleArrows} />
                                </div>
                                <h6 className="info-title text-uppercase text-success">
                                    Conseguí Clientes
                                </h6>
                                <p className="description opacity-8">
                                    Nosotros te vamos a recomendar a los
                                    clientes más cercanos que necesiten tu
                                    servicio.
                                </p>
                                <Link href="/registrarse">
                                    <a className="text-success">
                                        Registráte Ahora
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className="ml-1"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    );
}
