import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../photo/creekLOGO.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to={`/`} className={styles.link}>
          <img src={logo} alt='logo' className={styles.logo} />
        </Link>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/oNas/">O nas</Nav.Link>
            <NavDropdown title="Sklep" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/ubrania/">Ubrania</NavDropdown.Item>
              <NavDropdown.Item href="/sprzęt/">Sprzęt biwakowy</NavDropdown.Item>
              <NavDropdown.Item href="/akcesoria/">Akcesoria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/kontakt/">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);

Header.propTypes = {
  img: PropTypes.object,
};

export default Header;
