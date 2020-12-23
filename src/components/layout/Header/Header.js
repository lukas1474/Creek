import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNumber, getAll } from '../../../redux/cartRedux';

import styles from './Header.module.scss';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../photo/creekLOGO.png';
import { propTypes } from 'react-bootstrap/esm/Image';



const Header = (props) => {

  console.log(props);

  useEffect(() => {
    getNumber();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Row className={styles.row}>
          <Col className={`col-3 text-left ${styles.colLeft}`}>
            <div className={styles.logoContainer}>
              <Link to={`/`} className={styles.link}>
                <img src={logo} alt='logo' className={styles.logo} />
              </Link>
            </div>
          </Col>
          <Col className={`col-6 text-center ${styles.colCenter}`}>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className={styles.nav}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/ubrania/">Ubrania</Nav.Link>
                  <Nav.Link href="/biwak/">Sprzęt biwakowy</Nav.Link>
                  <Nav.Link href="/akcesoria/">Akcesoria</Nav.Link>
                  <Nav.Link href="/kontakt/">Kontakt</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col className={`col-3 ${styles.colRight}`}>
            <a href='/' className={styles.cart}>
              <div className={styles.cartIcon} onClick={() => this.togglePopup(true)}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                <span>{props.cartProps.cartNumber}</span>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </header>
  );
};

Header.propTypes = {
  img: PropTypes.object,
  getAll: PropTypes.object,
  cartProps: PropTypes.object,
};

const mapStateToProps = (state) => ({
  cartProps: getAll(state),

});
// {console.log(cartNumber)}


export default connect(mapStateToProps, { getNumber })(Header);
