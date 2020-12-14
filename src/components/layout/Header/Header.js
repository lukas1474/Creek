import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../../photo/creekLOGO.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerTop}/>
    <div className={styles.logoContainer}>
      <img src={logo} alt='logo' className={styles.logo} />
    </div>
    <div className={styles.navbar}>
      <Navbar collapseOnSelect expand="lg" bg="#282c34" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">O nas</Nav.Link>
            <NavDropdown title="Sklep" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ubrania</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sprzęt biwakowy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Akcesoria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Kontakt</Nav.Link>
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
