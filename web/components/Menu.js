import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="primary" dark expand="md">
            <Container>
                <NavbarBrand href="/">Metas</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Listar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cadastrar">Cadastrar</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Menu;