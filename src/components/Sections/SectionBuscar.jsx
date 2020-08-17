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

export default function SectionBuscar() {
    return (
        <section className="section section-lg pt-4">
            <Container className="pt-5">
                <Card className="bg-gradient-info shadow-lg mt-5 border-0">
                    <div className="p-5">
                        <Row className="align-items-center">
                            <Col lg="8">
                                <h3 className="text-white">
                                    Encontrá justo lo que necesitás
                                </h3>
                                <p className="lead text-white mt-3">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas soluta quod adipisci
                                    repudiandae inventore recusandae nihil
                                    voluptate similique delectus? Voluptas neque
                                    consequuntur eveniet ipsum animi aliquid ab
                                    suscipit minima fugiat.
                                </p>
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
    );
}
