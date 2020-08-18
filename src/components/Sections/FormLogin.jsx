import Link from 'next/link';
import { Row, Col, Button, FormGroup, Input, FormFeedback } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form';

export default function FormLogin({ onSubmit, disabled }) {
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
              valid={!errors.email && !(!getValues("email"))}
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
              valid={!errors.password && !(!getValues("password"))}
              innerRef={register({
                required: "Escribí tu contraseña",
              })}
            />
            <FormFeedback>{errors?.password?.message}</FormFeedback>
          </Col>
        </FormGroup>
        <Row className="justify-content-center">
          <Button type="submit" color="success" disabled={disabled}>
            Ingresar
          </Button>
        </Row>
      </form>
      <Row className="align-items-center">
        <hr className="w-100"></hr>
      </Row>
      <Row>
        <Col md="6">
          <Button
            block
            color="facebook"
            size="lg"
            onClick={() => onSubmit({ type: 'FB_SIGN_IN' })}
            disabled={disabled}
          >
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
            disabled={disabled}
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

      <Row className="mt-3 justify-content-center">
        <Link href="/registrarse">
          <a>No estás registrado? Registrate</a>
        </Link>
      </Row>
    </>
  )
}
