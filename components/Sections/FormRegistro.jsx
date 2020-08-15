import React from "react";
import { useForm } from "react-hook-form";

import { Button, FormGroup, FormFeedback, Input, Row, Col } from "reactstrap";

import { signInWithGoogle } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LlamarALaravel(typeUser) {
    let rutaBaseApi = "https://reparoaltoque-laravel.herokuapp.com/api/v1";

    let endpointRegitrarUsuario = "/User/create/" + typeUser; // "professional" si es un prefesional, o "client" si es un cliente
    //la U de User tiene que estar en mayúscula si o si

    fetch(rutaBaseApi + endpointRegitrarUsuario, {
        method: "post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "email@gmail.com", //éstos 4 puntos son obligatorios
            name: "gonzalo corvalan",
            firebaseId: "0iwjlksajlecgouh78900",
            lineOfWork: 10, // si es 1 es un cliente, 2 el rubro en el que trabaja no está en la lista, entre 3 y 44 es la lista de rubros actual
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
}

export default function FormRegistro(props) {
    const { register, handleSubmit, errors, getValues } = useForm();
    const onSubmit = (data) => {
        // console.log(errors)
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md="12">
                    {props.typeUser === "client" ? (
                        <h4 className="title text-center display-4 mb-3">
                            Registro Clientes
                        </h4>
                    ) : (
                        <h4 className="title text-center text-white display-4 mb-3">
                            Registro Profesionales
                        </h4>
                    )}
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Input
                            placeholder="Nombre"
                            name="name"
                            invalid={"name" in errors}
                            valid={!errors.name && getValues("name")}
                            innerRef={register({
                                required: "Escribí tu nombre",
                            })}
                        />
                        <FormFeedback>{errors?.name?.message}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            invalid={"email" in errors}
                            valid={!errors.email && getValues("email")}
                            innerRef={register({
                                required: "Escribí tu email",
                                pattern: {
                                    value: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Escribí un email válido",
                                },
                            })}
                        />
                        <FormFeedback>{errors?.email?.message}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            invalid={"password" in errors}
                            valid={!errors.password && getValues("password")}
                            innerRef={register({
                                required: "Escribí una contraseña",
                            })}
                        />
                        <FormFeedback>{errors?.password?.message}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Input
                            name="rePassword"
                            type="password"
                            placeholder="Repetir contraseña"
                            invalid={"rePassword" in errors}
                            valid={
                                !errors.rePassword && getValues("rePassword")
                            }
                            innerRef={register({
                                required: "Repetí la contraseña",
                                validate: (value) =>
                                    value === getValues("password") ||
                                    "Las contraseñas tienen que ser iguales",
                            })}
                        />
                        <FormFeedback>
                            {errors?.rePassword?.message}
                        </FormFeedback>
                    </FormGroup>
                </Col>
                <Col md="12">
                    {props.typeUser === "client" ? (
                        <Button
                            type="submit"
                            color="success"
                            className="col-lg-12"
                        >
                            Reagistrarse como cliente
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            color="success"
                            className="col-lg-12"
                        >
                            Reagistrarse como profesional
                        </Button>
                    )}
                </Col>
                <Col md="12">
                    <button
                        className="btn btn-danger"
                        onClick={() => LlamarALaravel(props.typeUser)}
                    >
                        laravel
                    </button>
                </Col>
                <Col md="12" className="row mt-3 pr-0 pl-3">
                    <Col>
                        <hr className="w-100"></hr>
                    </Col>
                    <Col md="6" className="d-flex justify-content-center">
                        <p className="text-center align-self-center mb-0">
                            O también con
                        </p>
                    </Col>
                    <Col>
                        <hr className="w-100"></hr>
                    </Col>
                </Col>

                <Col>
                    <Button block color="facebook" className="mt-4">
                        <span className="btn-inner--icon mr-2">
                            <FontAwesomeIcon
                                icon={["fab", "facebook"]}
                                size="1x"
                            />
                        </span>
                        <span className="btn-inner--text">Facebook</span>
                    </Button>
                </Col>
                <Col>
                    <Button
                        block
                        onClick={() => signInWithGoogle()}
                        className="mt-4 text-white"
                        style={{
                            background: "#4285f4",
                        }}
                    >
                        <span className="btn-inner--icon mr-2">
                            <FontAwesomeIcon
                                icon={["fab", "google"]}
                                size="1x"
                            />
                        </span>
                        <span className="btn-inner--text">Google</span>
                    </Button>
                </Col>
            </Row>
        </form>
    );
}
