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
    Alert,
} from "reactstrap";

export default class ElegirRubro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rubrosEspecializados: [],
            rubrosGenerales: [],
            noEncontrado: {},
            cargando: true,
            error: false,
        };
    }
    componentDidMount() {
        this.getLineWorks();
    }

    getLineWorks = async () => {
        await fetch(process.env.NEXT_PUBLIC_API_URL + "/LineWork/index")
            .then((res) => res.json())
            .then((data) => {
                this.separarArray(data.rubros);
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: true,
                    cargando: false,
                });
            });
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

        this.setState({
            rubrosEspecializados,
            rubrosGenerales,
            noEncontrado,
            cargando: false,
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
                                        {this.state.cargando && (
                                            <Col md="12">
                                                <Alert color="info">
                                                    <div
                                                        className="spinner-border"
                                                        role="status"
                                                    >
                                                        <span className="sr-only">
                                                            Loading...
                                                        </span>
                                                    </div>
                                                </Alert>
                                            </Col>
                                        )}
                                        {this.state.error && (
                                            <Col md="12">
                                                <Alert color="danger">
                                                    <p className="mb-0">
                                                        Parece que hubo un error
                                                        tratando de cargar la
                                                        lista...
                                                    </p>
                                                </Alert>
                                            </Col>
                                        )}
                                        {!this.state.cargando &&
                                            !this.state.error && (
                                                <React.Fragment>
                                                    <h5 className="title display-5 text-center my-4 col-lg-12">
                                                        <u>
                                                            Rubros
                                                            Especializados
                                                        </u>
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
                                                    {this.state
                                                        .noEncontrado && (
                                                        <Col
                                                            md="12"
                                                            className="text-right mt-5"
                                                        >
                                                            <div className="custom-control custom-radio mb-3">
                                                                <input
                                                                    type="radio"
                                                                    id={
                                                                        this
                                                                            .state
                                                                            .noEncontrado
                                                                            .id
                                                                    }
                                                                    className="custom-control-input"
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor={
                                                                        this
                                                                            .state
                                                                            .noEncontrado
                                                                            .id
                                                                    }
                                                                >
                                                                    {
                                                                        this
                                                                            .state
                                                                            .noEncontrado
                                                                            .line_of_work
                                                                    }
                                                                </label>
                                                            </div>
                                                        </Col>
                                                    )}
                                                </React.Fragment>
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
