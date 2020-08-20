import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormGroup, FormFeedback, Input, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SocialSignButtons from '../Utilities/SocialSignButtons';

export default function FormRegistro({ onSubmit, disabled }) {
  const { register, handleSubmit, errors, getValues } = useForm();

  return (
    <React.Fragment>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="row">
          <label htmlFor="name" className="col-md-4 col-form-label text-md-right">
            Nombre Completo:
          </label>
          <Col md="8">
            <Input
              id="name"
              placeholder="Nombre"
              name="name"
              invalid={'name' in errors}
              valid={!errors.name && !!getValues('name')}
              innerRef={register({
                required: 'Escribí tu nombre',
              })}
            />
            <FormFeedback>{errors?.name?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <label htmlFor="email" className="col-md-4 col-form-label text-md-right">
            Email:
          </label>
          <Col md="8">
            <Input
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              invalid={'email' in errors}
              valid={!errors.email && !!getValues('email')}
              innerRef={register({
                required: 'Escribí tu email',
                pattern: {
                  value: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Escribí un email válido',
                },
              })}
            />
            <FormFeedback>{errors?.email?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <label htmlFor="password" className="col-md-4 col-form-label text-md-right">
            Contraseña y Confirmación:
          </label>
          <Col md="4" className="pb-3">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              invalid={'password' in errors}
              valid={!errors.password && !!getValues('password')}
              innerRef={register({
                required: 'Escribí una contraseña',
                validate: (value) =>
                  value.length >= 6 || 'La contraseña tiene que tenér al menos 6 carácteres',
              })}
            />
            <FormFeedback>{errors?.password?.message}</FormFeedback>
          </Col>
          <Col md="4">
            <Input
              name="rePassword"
              type="password"
              placeholder="Repetir contraseña"
              invalid={'rePassword' in errors}
              valid={!errors.rePassword && !!getValues('rePassword')}
              innerRef={register({
                required: 'Repetí la contraseña',
                validate: (value) =>
                  value === getValues('password') || 'Las contraseñas tienen que ser iguales',
              })}
            />
            <FormFeedback>{errors?.rePassword?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <label htmlFor="name" className="col-md-4 col-form-label text-md-right">
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
              <label className="custom-control-label" htmlFor="client">
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
              <label className="custom-control-label" htmlFor="professional">
                Soy Profesional
              </label>
            </div>
          </Col>
        </FormGroup>
        <Row className="justify-content-center">
          <Button type="submit" color="success" disabled={disabled}>
            registráte ahora
          </Button>
        </Row>
      </form>
      <Row className="align-items-center">
        <Col xs="3" md="4">
          <hr className="w-100"></hr>
        </Col>
        <Col>
          <p className="text-center my-auto">O también con</p>
        </Col>
        <Col xs="3" md="4">
          <hr className="w-100"></hr>
        </Col>
      </Row>
      <SocialSignButtons
        type="register"
        onFbClick={(userType) => onSubmit({ type: 'FB_SIGN_IN', userType })}
        onGoogleClick={(userType) => onSubmit({ type: 'GOOGLE_SIGN_IN', userType })}
        disabled={disabled}
      />
      <Row className="mt-3 justify-content-center">
        <Link href="/ingresar">
          <a>Ya tenés cuenta? Ingresá</a>
        </Link>
      </Row>
    </React.Fragment>
  );
}
