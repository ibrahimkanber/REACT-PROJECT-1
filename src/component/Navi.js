import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

import CartSummary from './CartSummary';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Shopping Menu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <CartSummary removeFromCart={props.removeFromCart} cart={props.cartInfo} />
            <NavItem>
              <NavLink><Link to="/REACT-PROJECT-1">HOME</Link> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/REACT-PROJECT-1/userEntry">User Enrty</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/REACT-PROJECT-1/userEntry2">User Enrty2</Link>
              </NavLink>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;