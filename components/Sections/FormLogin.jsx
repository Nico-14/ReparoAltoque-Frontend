import React from "react";
import { useForm } from "react-hook-form";

import {
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Row,
    Col,
    CardBody,
    CardHeader,
    CardFooter,
    Card,
} from "reactstrap";

import { signInWithGoogle } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormLogin() {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <h4 className="title text-primary display-4 mb-0">
                        Ingresar
                    </h4>
                </CardHeader>
                <CardBody>
                    <form>
                        <FormGroup className="row">
                            <label
                                htmlFor="name"
                                className="col-md-4 col-form-label text-md-right"
                            >
                                Email:
                            </label>
                            <Col md="8">
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                />
                                {/* <FormFeedback>{errors?.email?.message}</FormFeedback> */}
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <label
                                htmlFor="name"
                                className="col-md-4 col-form-label text-md-right"
                            >
                                Contraseña:
                            </label>
                            <Col md="8" className="pb-3">
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Contraseña"
                                />
                                {/* <FormFeedback>{errors?.password?.message}</FormFeedback> */}
                            </Col>
                        </FormGroup>
                        <Col md="6" className="col-lg-12 text-center">
                            <Button type="submit" color="success">
                                iniciar sesión
                            </Button>
                        </Col>
                    </form>
                </CardBody>
                <CardFooter className="row mx-3 px-0">
                    <Col md="6">
                        <Button
                            block
                            color="facebook"
                            className="mt-4"
                            size="lg"
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
                            onClick={() => signInWithGoogle()}
                            className="mt-4 text-white"
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
                </CardFooter>
            </Card>
        </React.Fragment>
    );
}
