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
} from "reactstrap";

export default function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <Navbar color="primary" dark expand="md" className="fixed-top px-5">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse
                    isOpen={isOpen}
                    navbar
                    className="justify-content-end"
                >
                    <Nav className="justify-content-between" navbar>
                        <NavItem>
                            <NavLink>Trabajadores</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Servicios</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Ingresar / Registrarse
                            </DropdownToggle>

                            <DropdownMenu right>
                                <DropdownItem>Iniciar Sesión</DropdownItem>
                                <DropdownItem>Registrarse</DropdownItem>
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
