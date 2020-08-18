import React from "react";

import { Col, Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

import StarsVote from "../StarsVote";
import CardPublicación from "../Utilidades/CardPublicacion";

export default function SectionHorizontalScroll({
    titulo,
    arrayPublicaciones,
    bgColor,
}) {
    return (
        <React.Fragment>
            <style jsx>{`
                .example::-webkit-scrollbar {
                    display: none;
                    background-color: #000 !important;
                }
            `}</style>
            <section className={"section mt-6 " + bgColor}>
                <Col md="12">
                    <h3 className="title text-center display-3 mb-5">
                        {titulo}
                    </h3>
                </Col>
                <Col
                    md="12"
                    className="d-flex col-lg-12 example"
                    style={{
                        overflowX: "scroll",
                    }}
                >
                    {arrayPublicaciones &&
                        arrayPublicaciones.map((publicacion) => (
                            <CardPublicación
                                titulo={publicacion.main_title}
                                nombre={publicacion.name}
                                urlImg={publicacion.url_img}
                                raitings={publicacion.current_average_ratings}
                                idPost={publicacion.post_id}
                                key={publicacion.post_id}
                            />
                        ))}
                </Col>
            </section>
        </React.Fragment>
    );
}
