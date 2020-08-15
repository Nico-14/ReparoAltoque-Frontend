import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import {
    Button,
    Form,
    FormGroup,
    Label,
    FormFeedback,
    FormText,
    Input,
    Row,
    Col,
    Container,
} from "reactstrap";
import { signInWithGoogle } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Registrarse() {
    const { register, handleSubmit, errors, getValues } = useForm();
    const onSubmit = (data) => {
        // console.log(errors)
    };
    return (
        <>
            <Layout>
                <Row className="justify-content-center pt-5">
                    <form
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        className="col-lg-6 mt-5"
                    >
                        <Row className="justify-content-center py-5 px-3">
                            <Col md="12">
                                <h1 className="title text-center mb-5">
                                    Registráte en 5 minutos
                                </h1>
                            </Col>
                            <Col md="12">
                                <FormGroup>
                                    <Input
                                        placeholder="Nombre"
                                        name="name"
                                        invalid={"name" in errors}
                                        valid={
                                            !errors.name && getValues("name")
                                        }
                                        innerRef={register({
                                            required: "Escribí tu nombre",
                                        })}
                                    />
                                    <FormFeedback>
                                        {errors?.name?.message}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md="12">
                                <FormGroup>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        invalid={"email" in errors}
                                        valid={
                                            !errors.email && getValues("email")
                                        }
                                        innerRef={register({
                                            required: "Escribí tu email",
                                            pattern: {
                                                value: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message:
                                                    "Escribí un email válido",
                                            },
                                        })}
                                    />
                                    <FormFeedback>
                                        {errors?.email?.message}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        invalid={"password" in errors}
                                        valid={
                                            !errors.password &&
                                            getValues("password")
                                        }
                                        innerRef={register({
                                            required: "Escribí una contraseña",
                                        })}
                                    />
                                    <FormFeedback>
                                        {errors?.password?.message}
                                    </FormFeedback>
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
                                            !errors.rePassword &&
                                            getValues("rePassword")
                                        }
                                        innerRef={register({
                                            required: "Repetí la contraseña",
                                            validate: (value) =>
                                                value ===
                                                    getValues("password") ||
                                                "Las contraseñas tienen que ser iguales",
                                        })}
                                    />
                                    <FormFeedback>
                                        {errors?.rePassword?.message}
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md="12">
                                <FormGroup>
                                    <Input
                                        type="submit"
                                        value="Reagistrarse como cliente"
                                        className="btn btn-success"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="12" className="row mt-3">
                                <Col>
                                    <hr className="w-100"></hr>
                                </Col>
                                <Col className="d-flex justify-content-center">
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
                                    <span className="btn-inner--text">
                                        Facebook
                                    </span>
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    block
                                    onClick={() => signInWithGoogle()}
                                    className="mt-4 text-white"
                                    style={{ background: "#4285f4" }}
                                >
                                    <span className="btn-inner--icon mr-2">
                                        <FontAwesomeIcon
                                            icon={["fab", "google"]}
                                            size="1x"
                                        />
                                    </span>
                                    <span className="btn-inner--text">
                                        Google
                                    </span>
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Row>
            </Layout>
        </>
    );
}
