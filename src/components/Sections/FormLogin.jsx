import Link from 'next/link';
import { Row, Col, Button, FormGroup, Input, FormFeedback } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form';

export default function FormLogin({ onSubmit }) {
  const { register, handleSubmit, errors, getValues } = useForm();
  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
            Contraseña:
          </label>
          <Col md="8">
            <Input
              id="password"
              placeholder="Contraseña"
              name="password"
              type="password"
              invalid={"password" in errors}
              valid={!errors.password && getValues("password") && true}
              innerRef={register({
                required: "Escribí tu contraseña",
              })}
            />
            <FormFeedback>{errors?.password?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <Row className="justify-content-center mt-2">
          <Button type="submit" color="success">
            Ingresar
          </Button>
        </Row>
      </form>
      <Row className="align-items-center mt-2">
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
          <Button block color="facebook" size="lg" className="mt-2" onClick={() => onSubmit({ type: 'FB_SIGN_IN' })}>
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
            className="text-white mt-4 mt-md-2"
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
        <Link href="/registrarse">
          <a>No estás registrado? Registrate</a>
        </Link>
      </Row>
    </>
  )
}