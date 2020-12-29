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

export const addToCart = payload => ({
  payload,
  type: ADD_TO_CART,
});

console.log(addToCart);

export const removeFromCart = (items, products) => (dispatch) => {
  const cartItems = items.slice().filter(
    exist => exist._id !== products._id
  );
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {cartItems},
  });
  localStorage.setItem(JSON.stringify(cartItems));
};

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
      // let addQuantity = { ...state.products[action.payload] };
      // console.log(addQuantity);
      // addQuantity.numbers += 1;
      console.log(state);
      return [
        // cartNumber: state.cartNumber + 1,
        // cartItems: action.payload.cartItems,
        ...state,
        {
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        },
      ];
    }
    case REMOVE_FROM_CART: {
      return [
        ...state,
      ];
    }
    case GET_NUMBER_CART:
      return [
        ...state,
      ];
    default:
      return state;
  }
}
