import React from "react";
import Layout from "../components/Layout";

import {
    Row,
    Col,
    Container,
    Card,
    CardBody,
    CardFooter,
    Button,
    Alert,
    CardTitle,
} from "reactstrap";

import Link from "next/link";

export default class Categorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subCategories: [],
            todosLosRubros: [],
            cargando: true,
            error: false,
        };
    }
    componentDidMount() {
        this.getLineWorks();
    }

    getLineWorks = async () => {
        await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/LineWork/selectBySubcategory"
        )
            .then((res) => res.json())
            .then((data) => {
                this.separarArray(data.subCategories);
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
        // let rubrosGenerales = [];

        // let rubrosEspecializados = [];

        // arrayRubros.forEach((rubro) => {
        //     if (rubro.specialized === "Rubros Especializados") {
        //         rubrosEspecializados.push(rubro);
        //     } else if (rubro.specialized === "Rubros Generales") {
        //         rubrosGenerales.push(rubro);
        //     }
        // });

        // this.setState({
        //     rubrosEspecializados,
        //     rubrosGenerales,
        //     cargando: false,
        // });
        // let arrayReducido = arrayRubros.reduce((subcategorias, rubro) => {
        //     if (rubro.sub_category in subcategorias) {
        //         subcategorias[rubro.sub_category].push(rubro);
        //     } else {
        //         subcategorias[rubro.sub_category] = [rubro];
        //     }
        //     return subcategorias;
        // }, {});

        const subCategorias = arrayRubros.reduce((subcategorias, rubro) => {
            const subcategoryIndex = subcategorias.findIndex(
                (grupo) => grupo[0].sub_category === rubro.sub_category
            );
            if (subcategoryIndex === -1) {
                subcategorias.push([rubro]);
            } else {
                subcategorias[subcategoryIndex].push(rubro);
            }
            return subcategorias;
        }, []);

        subCategorias.shift();

        const todosLosRubros = arrayRubros.reduce((subcategorias, rubro) => {
            const subcategoryIndex = subcategorias.findIndex(
                (grupo) => grupo[0].specialized === rubro.specialized
            );
            if (subcategoryIndex === -1) {
                subcategorias.push([rubro]);
            } else {
                subcategorias[subcategoryIndex].push(rubro);
            }
            return subcategorias;
        }, []);

        this.setState({
            subCategories: subCategorias,
            todosLosRubros: todosLosRubros,
            cargando: false,
        });
    };

    render() {
        return (
            <Layout title="ReparoAltoque - Elegí tu Rubro">
                <div className="main bg-secondary">
                    <Container className="pt-7">
                        <Row className="justify-content-center">
                            <h1 className="title text-center display-3 col-lg-12 mt-3">
                                Todas las Categorías de Servicios
                            </h1>
                            {this.state.error && (
                                <Col md="12">
                                    <Alert color="danger">
                                        <p className="mb-0">
                                            Parece que hubo un error tratando de
                                            cargar las categorias...
                                        </p>
                                    </Alert>
                                </Col>
                            )}
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
                            {!(this.state.cargando && this.state.error) &&
                                this.state.subCategories.map(
                                    (categoria, index) => (
                                        <React.Fragment key={index}>
                                            <Col md="12" className="mt-5">
                                                <Card
                                                    className="full-background"
                                                    data-animation="zooming"
                                                    style={{
                                                        background:
                                                            "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                                    }}
                                                >
                                                    <CardBody>
                                                        <h5 className="text-white text-center mb-0 display-4">
                                                            {
                                                                categoria[0]
                                                                    .sub_category
                                                            }
                                                        </h5>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            {categoria.map((rubro) => (
                                                <Col md="4" key={rubro.id}>
                                                    <Card className="card-plain bg-white">
                                                        <CardBody>
                                                            <Link href="/registrarse">
                                                                <a className="text-primary">
                                                                    {
                                                                        rubro.line_of_work
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </React.Fragment>
                                    )
                                )}

                            <h2 className="title text-center display-3 col-lg-12 my-5">
                                Múltiples medios de Pago
                            </h2>
                            <Col md="4">
                                <Card className="card-plain bg-gradient-info">
                                    <CardBody>
                                        <CardTitle className="mb-0">
                                            <h3 className="display1 mb-0 text-white title">
                                                MercadoPago
                                            </h3>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-plain bg-gradient-info">
                                    <CardBody>
                                        <CardTitle className="mb-0">
                                            <h3 className="display1 mb-0 text-white title">
                                                Tarjetas de Crédito (Stripe)
                                            </h3>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-plain bg-gradient-info">
                                    <CardBody>
                                        <CardTitle className="mb-0">
                                            <h3 className="display1 mb-0 text-white title">
                                                PayPal
                                            </h3>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12">
                                <Card
                                    className="full-background"
                                    data-animation="zooming"
                                    style={{
                                        background:
                                            "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                                    }}
                                >
                                    <CardBody>
                                        <h3 className="display1 mb-0 text-white title">
                                            Convertite en Profesional
                                        </h3>
                                        <p className="text-white">
                                            Registráte en 5 minutos y publicá
                                            tus servicios para que tus clientes
                                            te encuentren
                                        </p>
                                        <CardFooter className="text-right">
                                            <Link href="/registrarse">
                                                <a className="text-primary">
                                                    <Button
                                                        color="primary"
                                                        style={{
                                                            background:
                                                                "#3483fa",
                                                            border: "none",
                                                        }}
                                                    >
                                                        Registráte ahora
                                                    </Button>
                                                </a>
                                            </Link>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <h2 className="title display-6 col-lg-12 mt-5">
                                Todas los Servicios
                            </h2>
                            <Col md="12">
                                <Card className="card-plain bg-white">
                                    <CardBody>
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

                                        {!(
                                            this.state.cargando &&
                                            this.state.error
                                        ) &&
                                            this.state.todosLosRubros.map(
                                                (categoria, index) => (
                                                    <React.Fragment key={index}>
                                                        <h5 className="title display-5 col-lg-12">
                                                            {
                                                                categoria[0]
                                                                    .specialized
                                                            }
                                                        </h5>
                                                        <ul className="row">
                                                            {categoria.map(
                                                                (rubro) => (
                                                                    <li
                                                                        className="col-lg-4"
                                                                        key={
                                                                            rubro.id
                                                                        }
                                                                    >
                                                                        <Link href="/registrarse">
                                                                            <a className="text-primary">
                                                                                {
                                                                                    rubro.line_of_work
                                                                                }
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </React.Fragment>
                                                )
                                            )}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        );
    }
}
