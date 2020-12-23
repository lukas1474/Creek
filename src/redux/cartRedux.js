// export const initialstatePart = {
//   cartNumber: 0,
// };

// import initialState from './initialState';

export const getAll = ({ cart }) => cart;

console.log(getAll);

const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
export const GET_NUMBER_CART = 'GET_NUMBER_CART';

export const addToCart = () => {
  return(dispatch) => {
    console.log('add to cart');
    dispatch ({
      type: ADD_TO_CART,
    });
  };
};

export const getNumber = () => {
  return(dispatch) => {
    console.log('get number');
    dispatch ({
      type: GET_NUMBER_CART,
    });
  };
};

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        cartNumber: state.cartNumber + 1,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}
