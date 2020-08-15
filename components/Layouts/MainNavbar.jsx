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
  const [user, setUser] = useState({ loggedIn: true }) //Temporal

  return (
    <React.Fragment>
      <Navbar
        // color="primary"
        dark
        expand="lg"
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
          <Nav navbar >
            <NavItem className="my-auto">
              <Link href="/trabajadores">
                <a className="btn-link nav-link">
                  Trabajadores
                </a>
              </Link>
            </NavItem>
            <NavItem className="my-auto">
              <Link href="/servicios">
                <a className="btn-link nav-link">Servicios</a>
              </Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="my-auto">
              <DropdownToggle nav caret className="py-0">
                {
                  user?.loggedIn ?
                    <img src="https://www.pngitem.com/pimgs/m/108-1083736_transparent-discord-icon-png-discord-profile-png-download.png" width="40  " height="40" className="rounded-circle" />
                    : 'Ingresar / Registrarse'
                }
              </DropdownToggle>

              <DropdownMenu right className="text-default">
                {
                  user?.loggedIn ?
                    null
                    :
                    <>
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
                    </>
                }
                <DropdownItem onClick={() => setUser({ loggedIn: !user.loggedIn })}>{user?.loggedIn ? 'Cerrar Sesión' : 'Iniciar sesión fake'}</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}
