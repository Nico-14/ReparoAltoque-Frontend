import React from "react";

import {
    Col,
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";

import StarsVote from "./StarsVote";

export default function CardPublicación({
    urlImg,
    titulo,
    nombre,
    raitings,
    idPost,
    altura,
}) {
    return (
        <Col md="2" className="d-inline mb-4" style={{ minWidth: "15rem" }}>
            <style jsx>{`
                :global(.custom-border) {
                    border-radius: 10px;
                }
                :global(.ver-publicacion) {
                    background-color: #3483fa;
                    border: none;
                }
            `}</style>
            <Card className={"p-3 m-0 custom-border " + altura}>
                {urlImg && (
                    <CardImg
                        alt="..."
                        src={urlImg}
                        top
                        className="mb-2 custom-border"
                    />
                )}
                <CardBody className="px-0 py-1 d-flex flex-column">
                    <CardTitle>
                        <h6 className="h6 ">{titulo}</h6>
                    </CardTitle>

                    <CardText className="mb-0 mt-auto">
                        <small className="text-muted text-capitalize">
                            {nombre}
                        </small>
                    </CardText>
                    <StarsVote stars={raitings / 2} />
                </CardBody>
                <Button color="primary" className="mt-1 ver-publicacion">
                    Ver Publicación
                </Button>
            </Card>
        </Col>
    );
}
