import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Spinner,
    Input,
    FormGroup,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Button,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useUser } from "../../context/UserContext";
import { signOut } from "../../firebase";

export default function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const user = useUser();

    return (
        <React.Fragment>
            <Navbar
                dark
                expand="lg"
                className="fixed-top px-5 py-2"
                style={{ background: "#1a73e8" }}
            >
                <NavbarBrand href="/" className="row">
                    HOME
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse
                    isOpen={isOpen}
                    navbar
                    className="justify-content-end"
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <NavLink>Home</NavLink>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button
                                    aria-controls="navbar-default"
                                    aria-expanded={false}
                                    aria-label="Toggle navigation"
                                    className="navbar-toggler"
                                    data-target="#navbar-default"
                                    data-toggle="collapse"
                                    id="navbar-default"
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        {/* <NavItem className="my-auto">
                            <FormGroup className="focused mb-0">
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
                        </NavItem> */}
                        <NavItem className="my-auto">
                            <Link href="/trabajadores">
                                <a className="btn-link nav-link">
                                    Trabajadores
                                </a>
                            </Link>
                        </NavItem>
                        <NavItem className="my-auto">
                            <Link href="/categorias">
                                <a className="btn-link nav-link">
                                    Categorías de Servicios
                                </a>
                            </Link>
                        </NavItem>

                        {user && !user.isLoading && (
                            <NavItem className="my-auto">
                                <Link href="/favoritos">
                                    <a className="btn-link nav-link">
                                        <FontAwesomeIcon icon="heart" />
                                        <span className="nav-link-inner--text d-lg-none">
                                            Favoritos
                                        </span>
                                    </a>
                                </Link>
                            </NavItem>
                        )}

                        {user?.isLoading ? (
                            <NavItem className="my-auto">
                                <Spinner color="white" />
                            </NavItem>
                        ) : (
                            <UncontrolledDropdown
                                nav
                                inNavbar
                                className="my-auto"
                            >
                                <DropdownToggle
                                    nav
                                    caret
                                    className={user ? "py-0" : ""}
                                >
                                    {user ? (
                                        <>
                                            <span className="mr-2 font-weight-bold">
                                                {user?.displayName ||
                                                    user?.email}
                                            </span>
                                            <img
                                                src={
                                                    user.photoURL ||
                                                    "https://www.pngitem.com/pimgs/m/108-1083736_transparent-discord-icon-png-discord-profile-png-download.png"
                                                }
                                                width="40"
                                                height="40"
                                                className="rounded-circle"
                                            />
                                        </>
                                    ) : (
                                        "Ingresar / Registrarse"
                                    )}
                                </DropdownToggle>

                                <DropdownMenu right className="text-default">
                                    {!user && (
                                        <>
                                            <Link href="/ingresar">
                                                <DropdownItem>
                                                    <a>Iniciar Sesión</a>
                                                </DropdownItem>
                                            </Link>
                                            <Link href="/registrarse">
                                                <DropdownItem>
                                                    <a>Registrarse</a>
                                                </DropdownItem>
                                            </Link>
                                        </>
                                    )}
                                    {user && (
                                        <DropdownItem onClick={() => signOut()}>
                                            Cerrar sesión
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}
