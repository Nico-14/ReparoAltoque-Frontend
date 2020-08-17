import React from "react";

import { Col, Card, CardImg, CardBody, CardText, CardTitle, CardFooter } from "reactstrap";

import StarsVote from '../StarsVote';

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
            key={publicacion.post_id}
          >
            <Card>
              <CardImg
                alt="..."
                src={publicacion.url_img} //No carga la imagen (url_img)
                top
              ></CardImg>
              <CardBody>
                <CardTitle>{publicacion.main__title}</CardTitle>

                <CardText>
                  <small className="text-muted">
                    {publicacion.name}
                  </small>
                </CardText>
                <StarsVote stars={publicacion.current_average_ratings / 2} />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Col>
    </section>
  );
}
