/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../../../../src/config';

import styles from './Products.module.scss';

import { Row } from 'react-bootstrap';
import ProductView from '../../common/ProductView/ProductView';



class Products extends React.Component {

  componentDidMount() {
    fetch(`${API_URL}/products`)
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiProducts } = this.props;
        console.log(apiProducts);
        apiProducts(results);
      });
  }

  render() {

    const { products } = this.props;
    console.log(products);
    return (
      <div className={styles.root}>
        <Row className={styles.viewClothes}>
          {products.data && products.data.map(item => (
            <ProductView key={item} {...item} />
          ))}
        </Row>
      </div >
    );
  }
}

Products.propTypes = {
  children: PropTypes.node,
  apiProducts: PropTypes.func,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      information: PropTypes.string,
      price: PropTypes.number,
      numbers: PropTypes.number,
      category: PropTypes.string,
      image: PropTypes.string,
      sex: PropTypes.string,
    })
  ),
};

export default Products;
