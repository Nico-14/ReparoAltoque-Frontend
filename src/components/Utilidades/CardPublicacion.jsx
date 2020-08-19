import React from 'react';

import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from 'reactstrap';

import StarsVote from '../StarsVote';

export default function CardPublicación({
  urlImg,
  titulo,
  nombre,
  raitings,
  idPost,
}) {
  return (
    <Col md="2" className="d-inline mb-4" style={{ minWidth: '15rem' }}>
      <style jsx>{`
        :global(.custom-border) {
          border-radius: 10px;
        }
      `}</style>
      <Card className="p-3 m-0 h-100 custom-border">
        <CardImg
          alt="..."
          src={urlImg}
          top
          className="mb-4 custom-border"
        ></CardImg>
        <CardBody className="px-0 py-1 d-flex flex-column">
          <CardTitle>
            <h4 className="display-5 m-0">{titulo}</h4>
          </CardTitle>

          <CardText>
            <small className="text-muted text-capitalize">{nombre}</small>
          </CardText>
          <StarsVote stars={raitings / 2} className="mt-auto" />
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
