import { useState } from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
import { useForm } from "react-hook-form";
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
    Spinner,
} from "reactstrap";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useRubros = () => {
    const { data, error } = useSWR(
        process.env.NEXT_PUBLIC_API_URL + "/LineWork/index",
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );
    return {
        rubros: {
            especializados: data?.rubros.filter(
                (rubro) => rubro.specialized === "Rubros Especializados"
            ),
            generales: data?.rubros.filter(
                (rubro) => rubro.specialized === "Rubros Generales"
            ),
            noEspecializado: data?.rubros.filter(
                (rubro) => rubro.specialized === "-----"
            )[0],
        },
        isLoading: !data && !error,
        error: error,
    };
};

export default function EelegirRubro() {
    const router = useRouter();
    const user = useUser();
    const { rubros, isLoading, error } = useRubros();
    const { register, handleSubmit } = useForm();
    const [isFetching, setIsFetching] = useState(false);

    const onSubmit = (data) => {
        if (data?.rubro) setIsFetching(true);
        fetch(process.env.NEXT_PUBLIC_API_URL + "/User/setLineWork", {
            method: "post",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idFirebase: user.uid,
                email: user.email,
                lineOfWork: parseInt(data.rubro),
            }),
        })
            .then(async (res) => {
                if (res.ok) return res.json();
                res = await res.json();
                throw new Error(res?.message);
            })
            .then(() => {
                router.push("/");
                setIsFetching(false);
            })
            .catch((err) => {
                console.log(err);
                setIsFetching(false);
            });
    };

    return (
        <Layout title="ReparoAltoque - Elegí tu Rubro">
            <div className="main bg-gradient-warning">
                <Container className="pt-8 pb-4" style={{ minHeight: "100vh" }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="justify-content-center">
                            <Col md="10">
                                <Card>
                                    <CardHeader>
                                        <h4 className="title display-4 mb-0">
                                            Elegí a que rubro de trabajo
                                            pertenecés
                                        </h4>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            {isLoading ||
                                                (isFetching && (
                                                    <Col md="12">
                                                        <Alert
                                                            color="info"
                                                            fade
                                                        >
                                                            <span className="alert-inner--icon">
                                                                <Spinner />
                                                            </span>
                                                            <span className="alert-inner--text">
                                                                <strong>
                                                                    Cargando
                                                                </strong>
                                                            </span>
                                                        </Alert>
                                                    </Col>
                                                ))}
                                            {error && (
                                                <Col md="12">
                                                    <Alert color="danger" fade>
                                                        Hubo un error al cargar
                                                        la lista de rubros...
                                                    </Alert>
                                                </Col>
                                            )}
                                        </Row>
                                        {!isLoading && !error && (
                                            <>
                                                <Row>
                                                    <h5 className="title display-5 text-center my-4 col-lg-12">
                                                        <u>
                                                            Rubros
                                                            Especializados
                                                        </u>
                                                    </h5>
                                                    {rubros.especializados.map(
                                                        (rubro) => (
                                                            <Col
                                                                md="4"
                                                                key={rubro.id}
                                                            >
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <input
                                                                        name="rubro"
                                                                        className="custom-control-input"
                                                                        id={
                                                                            rubro.id
                                                                        }
                                                                        value={
                                                                            rubro.id
                                                                        }
                                                                        type="radio"
                                                                        ref={
                                                                            register
                                                                        }
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
                                                </Row>
                                                <Row>
                                                    <h5 className="title display-5 text-center my-4 col-lg-12">
                                                        <u>Rubros Generales</u>
                                                    </h5>
                                                    {rubros.generales.map(
                                                        (rubro) => (
                                                            <Col
                                                                md="4"
                                                                key={rubro.id}
                                                            >
                                                                <div className="custom-control custom-radio mb-3">
                                                                    <input
                                                                        name="rubro"
                                                                        className="custom-control-input"
                                                                        id={
                                                                            rubro.id
                                                                        }
                                                                        type="radio"
                                                                        value={
                                                                            rubro.id
                                                                        }
                                                                        ref={
                                                                            register
                                                                        }
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
                                                </Row>
                                                {rubros.noEspecializado && (
                                                    <Row>
                                                        <Col className="text-right mt-5">
                                                            <div className="custom-control custom-radio mb-3">
                                                                <input
                                                                    name="rubro"
                                                                    className="custom-control-input"
                                                                    id={
                                                                        rubros
                                                                            .noEspecializado
                                                                            .id
                                                                    }
                                                                    type="radio"
                                                                    value={
                                                                        rubros
                                                                            .noEspecializado
                                                                            .id
                                                                    }
                                                                    ref={
                                                                        register
                                                                    }
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor={
                                                                        rubros
                                                                            .noEspecializado
                                                                            .id
                                                                    }
                                                                >
                                                                    {
                                                                        rubros
                                                                            .noEspecializado
                                                                            .line_of_work
                                                                    }
                                                                </label>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                )}
                                            </>
                                        )}
                                    </CardBody>
                                    <CardFooter className="text-right">
                                        {!error && !isLoading && (
                                            <Button
                                                color="success"
                                                disabled={
                                                    isLoading || isFetching
                                                }
                                            >
                                                Continuar
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </Layout>
    );
}
