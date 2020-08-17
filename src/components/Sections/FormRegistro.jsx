import React from "react";
import { useForm } from "react-hook-form";
import { Button, FormGroup, FormFeedback, Input, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

function LlamarALaravel(typeUser) {
  let endpointRegitrarUsuario = "/User/create/" + typeUser; // "professional" si es un prefesional, o "client" si es un cliente
  //la U de User tiene que estar en mayúscula si o si

  fetch(process.env.NEXT_PUBLIC_API_URL + endpointRegitrarUsuario, {
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

export default function FormRegistro({ onSubmit }) {
  const { register, handleSubmit, errors, getValues } = useForm();

  return (
    <React.Fragment>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="row">
          <label
            htmlFor="name"
            className="col-md-4 col-form-label text-md-right"
          >
            Nombre Completo:
          </label>
          <Col md="8">
            <Input
              id="name"
              placeholder="Nombre"
              name="name"
              invalid={"name" in errors}
              valid={!errors.name && getValues("name") && true}
              innerRef={register({
                required: "Escribí tu nombre",
              })}
            />
            <FormFeedback>{errors?.name?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <label
            htmlFor="email"
            className="col-md-4 col-form-label text-md-right"
          >
            Email:
          </label>
          <Col md="8">
            <Input
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              invalid={"email" in errors}
              valid={!errors.email && getValues("email") && true}
              innerRef={register({
                required: "Escribí tu email",
                pattern: {
                  value: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Escribí un email válido",
                },
              })}
            />
            <FormFeedback>{errors?.email?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <label
            htmlFor="password"
            className="col-md-4 col-form-label text-md-right"
          >
            Contraseña y Confirmación:
          </label>
          <Col md="4" className="pb-3">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              invalid={"password" in errors}
              valid={!errors.password && getValues("password") && true}
              innerRef={register({
                required: "Escribí una contraseña",
                validate: (value) =>
                  value.length >= 6 || 'La contraseña tiene que tenér al menos 6 carácteres'
              })}
            />
            <FormFeedback>{errors?.password?.message}</FormFeedback>
          </Col>
          <Col md="4">
            <Input
              name="rePassword"
              type="password"
              placeholder="Repetir contraseña"
              invalid={"rePassword" in errors}
              valid={
                !errors.rePassword && getValues("rePassword") && true
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
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <label
            htmlFor="name"
            className="col-md-4 col-form-label text-md-right"
          >
            En qué categoría estás?
                    </label>
          <Col md="4">
            <div className="custom-control custom-radio my-3">
              <input
                className="custom-control-input"
                id="client"
                name="userType"
                type="radio"
                defaultChecked
                value="client"
                ref={register({ required: true })}
              />
              <label
                className="custom-control-label"
                htmlFor="client"
              >
                Soy Cliente
              </label>
            </div>
          </Col>
          <Col md="4">
            <div className="custom-control custom-radio my-3">
              <input
                className="custom-control-input"
                id="professional"
                name="userType"
                type="radio"
                value="professional"
                ref={register({ required: true })}
              />
              <label
                className="custom-control-label"
                htmlFor="professional"
              >
                Soy Profesional
               </label>
            </div>
          </Col>
        </FormGroup>
        <Row className="justify-content-center">
          <Button type="submit" color="success">
            registráte ahora
          </Button>
        </Row>
      </form>
      <Row className="align-items-center">
        <Col xs="3" md="4">
          <hr className="w-100"></hr>
        </Col>
        <Col>
          <p className="text-center my-auto">
            O también con
          </p>
        </Col>
        <Col xs="3" md="4">
          <hr className="w-100"></hr>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Button block color="facebook" size="lg" onClick={() => onSubmit({ type: 'FB_SIGN_IN' })}>
            <span className="btn-inner--icon mr-2">
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                size="1x"
              />
            </span>
            <span className="btn-inner--text">Facebook</span>
          </Button>
        </Col>
        <Col md="6">
          <Button
            block
            onClick={() => onSubmit({ type: 'GOOGLE_SIGN_IN' })}
            className="text-white mt-4 mt-md-0"
            size="lg"
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
      <Row className="mt-2 justify-content-center">
        <Link href="/ingresar">
          <a>Ya tenés cuenta? Ingresá</a>
        </Link>
      </Row>
    </React.Fragment >
  );
}
