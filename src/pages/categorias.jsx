import React from 'react';
import Layout from '../components/Layout';

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
  Spinner,
} from 'reactstrap';

import Link from 'next/link';
import useSWR from 'swr';

const sortArrayByKey = (array, key) => {
  return array.reduce((accArray, value) => {
    const existIndex = accArray.findIndex((obj) => obj.key === (value[key] || 'other'));
    if (existIndex === -1) {
      accArray.push({
        key: value[key] || 'other',
        items: [value],
      });
    } else {
      accArray[existIndex].items.push(value);
    }
    return accArray;
  }, []);
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const useCategories = () => {
  const { data, error } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + '/LineWork/selectBySubcategory',
    fetcher
  );

  return {
    isLoading: !data && !error,
    error: error,
    subCategories: data?.subCategories && sortArrayByKey(data.subCategories, 'sub_category'),
    services: data?.subCategories && sortArrayByKey(data.subCategories, 'specialized'),
  };
};

export default function Categorias() {
  const { subCategories, services, error, isLoading } = useCategories();

  return (
    <Layout title="ReparoAltoque - Elegí tu Rubro">
      <div className="main bg-secondary">
        <Container className="pt-7">
          <Row>
            <Col xs="12">
              <h1 className="title text-center display-3 col-lg-12 mt-3">
                Todas las Categorías de Servicios
              </h1>
              {error && (
                <Alert color="danger">
                  <p className="mb-0">Hubo un error al cargar las categorias...</p>
                </Alert>
              )}
              {isLoading && (
                <Alert color="info" fade>
                  <span className="alert-inner--icon">
                    <Spinner />
                  </span>
                  <span className="alert-inner--text">
                    <strong>Cargando</strong>
                  </span>
                </Alert>
              )}
            </Col>
          </Row>

          {subCategories &&
            subCategories
              .filter((subCategory) => subCategory.key !== 'other')
              .map((subCategory, index) => (
                <Row className="justify-content-center" key={index}>
                  <Col xs="12" className="mt-5">
                    <Card
                      className="full-background"
                      data-animation="zooming"
                      style={{
                        background:
                          "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg')",
                      }}
                    >
                      <CardBody>
                        <h5 className="text-white text-center mb-0 display-4">{subCategory.key}</h5>
                      </CardBody>
                    </Card>
                  </Col>
                  {subCategory.items.map((rubro) => (
                    <Col md="4" key={rubro.id}>
                      <Card className="card-plain bg-white">
                        <CardBody>
                          <Link href="/registrarse">
                            <a className="text-primary">{rubro.line_of_work}</a>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ))}
          <Row>
            <Col xs="12">
              <h2 className="title text-center display-3 col-lg-12 my-5">
                Múltiples medios de Pago
              </h2>
            </Col>

            <Col md="4">
              <Card className="card-plain bg-gradient-info">
                <CardBody>
                  <CardTitle className="mb-0">
                    <h3 className="display1 mb-0 text-white title">MercadoPago</h3>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain bg-gradient-info">
                <CardBody>
                  <CardTitle className="mb-0">
                    <h3 className="display1 mb-0 text-white title">Tarjetas de Crédito (Stripe)</h3>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain bg-gradient-info">
                <CardBody>
                  <CardTitle className="mb-0">
                    <h3 className="display1 mb-0 text-white title">PayPal</h3>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
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
                  <h3 className="display1 mb-0 text-white title">Convertite en Profesional</h3>
                  <p className="text-white">
                    Registráte en 5 minutos y publicá tus servicios para que tus clientes te
                    encuentren
                  </p>
                  <CardFooter className="text-right">
                    <Link href="/registrarse">
                      <a className="text-primary">
                        <Button
                          color="primary"
                          style={{
                            background: '#3483fa',
                            border: 'none',
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
          </Row>
          <Row>
            <Col xs="12">
              <h2 className="title display-6 col-lg-12 mt-5">Todas los Servicios</h2>
            </Col>
            <Col xs="12">
              <Card className="card-plain bg-white">
                <CardBody>
                  {services &&
                    services.map((specialized, index) => (
                      <Row key={index}>
                        <h5 className="title display-5 col-lg-12">{specialized.key}</h5>
                        <Col>
                          <ul className="row">
                            {specialized.items.map((rubro) => (
                              <li className="col-lg-4" key={rubro.id}>
                                <Link href="/registrarse">
                                  <a className="text-primary">{rubro.line_of_work}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Col>
                      </Row>
                    ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
