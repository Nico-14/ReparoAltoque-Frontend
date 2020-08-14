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
} from "reactstrap";

import Link from "next/link";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar
        // color="primary"
        dark
        expand="md"
        className="fixed-top px-5 py-2"
        style={{ background: "#1a73e8" }}
      >
        <NavbarBrand href="/">Home</NavbarBrand>
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
            <NavItem>
              <Link href="/trabajadores">
                <a className="btn-link nav-link">
                  Trabajadores
                                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/servicios">
                <a className="btn-link nav-link">Servicios</a>
              </Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ingresar / Registrarse
                            </DropdownToggle>

              <DropdownMenu right className="text-default">
                <DropdownItem>
                  <Link href="/ingresar">
                    <a>Iniciar Sesión</a>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/registrarse">
                    <a>Registrarse</a>
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Cerrar Sesión</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}
