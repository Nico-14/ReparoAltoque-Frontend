import React from "react";

import {
    Container,
    Card,
    Row,
    Col,
    FormGroup,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
    Button,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SectionBuscar({ modeloSeccionBuscar }) {
    if (modeloSeccionBuscar == 1) {
        return (
            <React.Fragment>
                <section className="section section-lg pt-4">
                    <Container className="pt-5">
                        <Card className="bg-gradient-info shadow-lg mt-5 border-0">
                            <div className="p-5">
                                <Row className="align-items-center">
                                    <Col lg="8">
                                        <h3 className="text-white">
                                            Encontrá justo lo que necesitás
                                        </h3>
                                    </Col>
                                    <Col className="ml-lg-auto" lg="12">
                                        <FormGroup className="focused">
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText id="basic-addon1">
                                                        <i className="fa fa-search"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="En qué te podemos ayudar?"
                                                    type="text"
                                                ></Input>
                                                <InputGroupAddon addonType="append">
                                                    <Button
                                                        color="success"
                                                        id="button-addon2"
                                                        type="button"
                                                    >
                                                        Buscar
                                                    </Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Container>
                </section>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div className="position-relative" style={{ zIndex: 0 }}>
                    <section className="bg-gradient-warning page-header page-header-small header-filter skew-separator skew-mini">
                        <div
                            className="page-header-image bg-gradient-warning"
                            style={{ zIndex: 1 }}
                        ></div>
                        <Container className="pt-0">
                            <Row>
                                <Col lg="12">
                                    <h1 className="display-3 text-white">
                                        Encontrá justo lo que necesitás
                                    </h1>
                                </Col>
                                <Col className="ml-lg-auto" lg="12">
                                    <FormGroup className="focused">
                                        <InputGroup>
                                            <Input
                                                placeholder="En qué te podemos ayudar?"
                                                type="text"
                                                style={{ border: "none" }}
                                            ></Input>
                                            <InputGroupAddon addonType="append">
                                                <Button
                                                    color="success"
                                                    id="button-addon2"
                                                    type="button"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faSearch}
                                                    />
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
