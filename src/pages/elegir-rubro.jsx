import React from "react";
import Layout from "../components/Layout";

import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "reactstrap";

export default class ElegirRubro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rubrosEspecializados: [],
      rubrosGenerales: [],
      noEncontrado: {},
      cargando: true,
      success: false,
      error: false,
    };
  }
  componentDidMount() {
    this.getLineWorks();
  }

  getLineWorks = async () => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + "/LineWork/show")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // this.setState({
          //     rubrosGenerales: data.rubros,
          // });
          this.separarArray(data.rubros);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  separarArray = (arrayRubros) => {
    let rubrosGenerales = [];

    let rubrosEspecializados = [];

    let noEncontrado;

    arrayRubros.forEach((rubro) => {
      if (rubro.specialized === "Rubros Especializados") {
        rubrosEspecializados.push(rubro);
      } else if (rubro.specialized === "Rubros Generales") {
        rubrosGenerales.push(rubro);
      } else {
        noEncontrado = rubro;
      }
    });

    console.log({
      noEncontrado,
      rubrosEspecializados,
      rubrosGenerales,
    });

    this.setState({
      rubrosEspecializados,
      rubrosGenerales,
      noEncontrado,
    });
  };

  render() {
    return (
      <Layout title="ReparoAltoque - Elegí tu Rubro">
        <div className="main bg-gradient-warning">
          <Container className="pt-8" style={{ minHeight: "100vh" }}>
            <Row className="justify-content-center">
              <Col md="10">
                <Card>
                  <CardHeader>
                    <h4 className="title display-4 mb-0">
                      Elegí a que rubro de trabajo
                      pertenecés
                    </h4>
                  </CardHeader>
                  <CardBody className="row">
                    {this.state.rubrosEspecializados && (
                      <React.Fragment>
                        <h5 className="title display-5 text-center my-4 col-lg-12">
                          <u>Rubros Especializados</u>
                        </h5>
                        {this.state.rubrosEspecializados.map(
                          (rubro) => (
                            <Col
                              md="4"
                              key={rubro.id}
                            >
                              <div className="custom-control custom-radio mb-3">
                                <input
                                  type="radio"
                                  id={
                                    rubro.id
                                  }
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={
                                    rubro.id
                                  }
                                >
                                  {
                                    rubro.line_of_work
                                  }
                                </label>
                              </div>
                            </Col>
                          )
                        )}
                      </React.Fragment>
                    )}
                    {this.state.rubrosGenerales && (
                      <React.Fragment>
                        <h5 className="title display-5 text-center my-4 col-lg-12">
                          <u>Rubros Generales</u>
                        </h5>
                        {this.state.rubrosGenerales.map(
                          (rubro) => (
                            <Col
                              md="4"
                              key={rubro.id}
                            >
                              <div className="custom-control custom-radio mb-3">
                                <input
                                  type="radio"
                                  id={
                                    rubro.id
                                  }
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={
                                    rubro.id
                                  }
                                >
                                  {
                                    rubro.line_of_work
                                  }
                                </label>
                              </div>
                            </Col>
                          )
                        )}
                      </React.Fragment>
                    )}

                    {this.state.noEncontrado && (
                      <Col
                        md="12"
                        className="text-right mt-5"
                      >
                        <div className="custom-control custom-radio mb-3">
                          <input
                            type="radio"
                            id={
                              this.state
                                .noEncontrado.id
                            }
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={
                              this.state
                                .noEncontrado.id
                            }
                          >
                            {
                              this.state
                                .noEncontrado
                                .line_of_work
                            }
                          </label>
                        </div>
                      </Col>
                    )}
                  </CardBody>
                  <CardFooter className="text-right">
                    <Button color="success">
                      Continuar
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}
