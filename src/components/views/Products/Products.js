import React from 'react';
import PropTypes from 'prop-types';

import styles from './Products.module.scss';
import { API_URL } from '../../../../src/config';

import ProductView from '../../common/ProductView/ProductViewContainer';

import { Row } from 'react-bootstrap';

class Products extends React.Component {

  componentDidMount() {
    fetch(`${API_URL}/products`)
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiProducts } = this.props;
        apiProducts(results);
      });
  }

  render() {

    const { products } = this.props;

    return (
      <div className={styles.root}>
        <Row className={styles.viewClothes}>
          {products.data && products.data.map(item => (
            <ProductView key={item._id} {...item} />
          ))}
        </Row>
      </div >
    );
  }
}

Products.propTypes = {
  children: PropTypes.node,
  apiProducts: PropTypes.func,
  products: PropTypes.shape({
    data: PropTypes.arrayOf({
      name: PropTypes.string,
      information: PropTypes.string,
      price: PropTypes.number,
      numbers: PropTypes.number,
      category: PropTypes.string,
      image: PropTypes.string,
      sex: PropTypes.string,
    }),
  }),
};

// Products.defaultProps = {
//   products: [],
// };

export default Products;
