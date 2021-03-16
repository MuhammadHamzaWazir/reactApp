import { ADD_TO_CART } from "../constants";
const initialState = {
  cardData: [],
};
export default function cartItems(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer", action);
      return {
        ...state,
        cardData: action.data,
      };
      break;

    default:
      return state;
  }
}

// eslint-disable-next-line no-duplicate-case

// , REMOVE_TO_CART

// case REMOVE_TO_CART:
//     return {
//       ...state,
//       cardData: action.data,
//     };
//     break;
