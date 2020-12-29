export const getAll = ({ products }) => products;

export const getProductById = ({products}, productId) => {
  const filtered = products.data && products.data.filter(product => product.id == productId);
  console.log(products);
  return filtered && filtered.length ? filtered[0] : null;
};

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const API_PRODUCTS = createActionName('API_PRODUCTS');

export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const apiProducts = payload => ({payload: payload, type: API_PRODUCTS });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case API_PRODUCTS: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
}
