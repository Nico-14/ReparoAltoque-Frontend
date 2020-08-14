import Layout from "../components/Layout";
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, FormFeedback, FormText, Input, Row, Col, Container } from 'reactstrap';
import { signInWithGoogle } from '../firebase';

export default function Registrarse() {
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = data => {
    // console.log(errors)
  };
  return (<>
    <style jsx>{`
    form {
      min-width: 30%;
    }
    @media (max-width: 990px) {
      form {
        min-width: 90%;
      }
    }
    `}</style>
    <Layout>
      <Row className="justify-content-center">
        <h1>Crear cuenta</h1>
      </Row>
      <Row className="justify-content-center mt-4">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <FormGroup>
                <Input placeholder="Nombre" name="name" invalid={'name' in errors} valid={!errors.name && getValues('name')} innerRef={
                  register({ required: 'Escribí tu nombre' })} />
                <FormFeedback>{errors?.name?.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input placeholder="Email" type="email" name="email" invalid={'email' in errors} valid={!errors.email && getValues('email')} innerRef={
                  register({
                    required: 'Escribí tu email',
                    pattern: {
                      value: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Escribí un email válido"
                    }
                  })} />
                <FormFeedback>{errors?.email?.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input name="password" type="password" placeholder="Contraseña" invalid={'password' in errors} valid={!errors.password && getValues('password')} innerRef={
                  register({
                    required: 'Escribí una contraseña',
                  })
                } />
                <FormFeedback>{errors?.password?.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input name="rePassword" type="password" placeholder="Repetir contraseña" invalid={'rePassword' in errors} valid={!errors.rePassword && getValues('rePassword')} innerRef={
                  register({
                    required: 'Repetí la contraseña',
                    validate: (value) => value === getValues('password') || 'Las contraseñas tienen que ser iguales'
                  })
                } />
                <FormFeedback>{errors?.rePassword?.message}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color='success' block>Iniciar sesión</Button>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button block color='default'>Ingresar con Facebook</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button block color='default' onClick={() => signInWithGoogle()}>Ingresar con Google</Button>
            </Col>
          </Row>
        </form>
      </Row>
    </Layout>
  </>)
}