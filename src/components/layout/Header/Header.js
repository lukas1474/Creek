import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';
import logo from '../../../photo/creekLOGO.png';

import { connect } from 'react-redux';
import { getNumber, getAllCarts } from '../../../redux/cartRedux';


import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  console.log(props);

  useEffect(() => {
    getNumber();
  }, []);

  const productInd = props.cartProps.data.reduce((a, b) => a + (b.qty || 0), 0);


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
                  <NavLink className={styles.link} to={'/sklep'}>Sklep</NavLink>
                  <NavLink className={styles.link} to={'/kontakt'}>Kontakt</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col className={`col-3 ${styles.colRight}`}>
            <Link to={'/koszyk/'}>
              <div className={styles.cart}>
                <p className={styles.cartIcon}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                  <span className={styles.span}>{productInd ? productInd : 0}</span>
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </header>
  );
};

Header.propTypes = {
  img: PropTypes.object,
  getAllCarts: PropTypes.object,
  cartProps: PropTypes.array,
};

const mapStateToProps = (state) => ({
  cartProps: getAllCarts(state),
});

export default connect(mapStateToProps, { getNumber })(Header);
