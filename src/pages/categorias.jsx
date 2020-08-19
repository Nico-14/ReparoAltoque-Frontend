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
            rubrosEspecializados: [],
            rubrosGenerales: [],
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

        arrayRubros.forEach((rubro) => {
            if (rubro.specialized === "Rubros Especializados") {
                rubrosEspecializados.push(rubro);
            } else if (rubro.specialized === "Rubros Generales") {
                rubrosGenerales.push(rubro);
            }
        });

        this.setState({
            rubrosEspecializados,
            rubrosGenerales,
            cargando: false,
        });
    };

    render() {
        return (
            <Layout title="ReparoAltoque - Elegí tu Rubro">
                <div className="main bg-secondary">
                    <Container className="pt-7">
                        <Row>
                            <h1 className="title text-center display-3 col-lg-12 mt-3">
                                Todas las Categorías de Servicios
                            </h1>
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
                                            Servicios para el Hogar
                                        </h5>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Albañiles
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Electricistas
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Pintores
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Servicios de Aires
                                                Acondicionados
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
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
                                            Especialistas
                                        </h5>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Abogados
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Contadores
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Arquitectos
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Traductores
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
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
                                            Mantenimiento
                                        </h5>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Gasistas
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Ascensores
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Mantenimiento Tanques de Agua
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Fumigación
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
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
                                            Obras y Construcción
                                        </h5>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Durlock
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Cristaleros
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Carpinteros
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Cortinas Metálicas
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
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
                                            Diseños y programas
                                        </h5>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Identity Designer
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Programadores
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Diseñadores Gráficos
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Diseñadores UI / UX
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
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
                                            Cursos y Clases
                                        </h5>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Profesores Particulares
                                                (Escolar)
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Profesores Particulares
                                                (Universidad)
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-plain bg-white">
                                    <CardBody>
                                        <Link href="/registrarse">
                                            <a className="text-primary">
                                                Profesores Particulares
                                                (Idiomas)
                                            </a>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
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
                                        {!this.state.cargando &&
                                            !this.state.error && (
                                                <React.Fragment>
                                                    <h5 className="title display-5 col-lg-12">
                                                        Rubros Especializados
                                                    </h5>
                                                    <ul className="row">
                                                        {this.state.rubrosEspecializados.map(
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

                                                    <h5 className="title display-5 mt-5 col-lg-12">
                                                        Rubros Generales
                                                    </h5>
                                                    <ul className="row">
                                                        {this.state.rubrosGenerales.map(
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

//todo éste bodoque queda asi por ahora, en realidad lo voy a traer todo desde la api asi que queda hardcodeado hasta q lo agregue a la base de datos
