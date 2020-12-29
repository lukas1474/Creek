// export const initialstatePart = {
//   cartNumber: 0,
// };

// import initialState from './initialState';

export const getAllCarts = ({ cart }) => cart;

// console.log(getAll);

const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const GET_NUMBER_CART = createActionName('GET_NUMBER_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

// export const addToCart = (items, products) => (dispatch) => {
//   const cartItems = items.slice();
//   let alreadyExist = false;
//   cartItems.forEach((exist) => {
//     if(exist._id === products._id) {
//       alreadyExist = true;
//       exist.count++;
//     }
//   });
//   if(!alreadyExist){
//     cartItems.push({...products, count : 1});
//   }
//   dispatch({
//     type: ADD_TO_CART,
//     payload: {cartItems},
//   });
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));
// };

// export const addToCart = payload => ({
//   payload,
//   type: ADD_TO_CART,
// });

export const addToCart = (payload) => {
  return {
    payload,
    type: ADD_TO_CART,
  };
};

export const removeFromCart = () => {
  return {
    type: REMOVE_FROM_CART,
  };
};

// export const removeFromCart = (payload) => ({
//   payload,
//   type: REMOVE_FROM_CART,
// });

console.log(addToCart);

// export const removeFromCart = (items, products) => (dispatch) => {
//   const cartItems = items.slice().filter(
//     exist => exist._id !== products._id
//   );
//   dispatch({
//     type: REMOVE_FROM_CART,
//     payload: {cartItems},
//   });
//   localStorage.setItem(JSON.stringify(cartItems));
// };

// export const addToCart = (productName) => {
//   return (dispatch) => {
//     console.log('add to cart');
//     console.log('Product:', productName);
//     dispatch({
//       type: ADD_TO_CART,
//       payload: productName,
//     });
//   };
// };

export const getNumber = () => {
  return (dispatch) => {
    console.log('get number');
    dispatch({
      type: GET_NUMBER_CART,
    });
  };
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingCartItem = state.data.find(
        (item) => item._id === action.payload._id
      );
      if (existingCartItem) {
        return {
          ...state,
          data: state.data.map((product) => {
            if (product._id === action.payload._id) {
              return {
                ...product,
                qty: product.qty + action.payload.qty,
                totalPrice: product.totalPrice + action.payload.totalPrice,
              };
            }
            return { ...product };
          }),
        };
      }
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      state.data.pop();
      return {
        data: [...state.data],
      };
    }
    case GET_NUMBER_CART:
      return [
        ...state,
      ];
    default:
      return state;
  }
}
