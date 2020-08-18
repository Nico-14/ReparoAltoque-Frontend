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

import StarsVote from "../StarsVote";

export default function CardPublicación({
    urlImg,
    titulo,
    nombre,
    raitings,
    idPost,
}) {
    return (
        <Col md="2" className="d-inline" style={{ minWidth: "17rem" }}>
            <Card className="p-3" style={{ borderRadius: "10px" }}>
                <CardImg
                    alt="..."
                    src={urlImg}
                    top
                    className="mb-4"
                    style={{ borderRadius: "10px" }}
                ></CardImg>
                <CardBody className="px-0 py-1">
                    <CardTitle>
                        <h4 className="display-5">{titulo}</h4>
                    </CardTitle>

                    <CardText>
                        <small className="text-muted text-capitalize">
                            {nombre}
                        </small>
                    </CardText>
                    <StarsVote stars={raitings / 2} />
                </CardBody>
                {/* <CardFooter> */}
                <Button color="primary" className="mt-3">
                    Ver Publicación
                </Button>
                {/* </CardFooter> */}
            </Card>
        </Col>
    );
}
