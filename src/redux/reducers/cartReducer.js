import { ADD_TO_CART } from "../action-types/getShoeData";
import { DELETE_FROM_CART } from "../action-types/getShoeData";

const initialstate = {
  Cart: [],
};

const CartInfo = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state);
      return { ...state, Cart: [...state.Cart, action.payload] };

    case DELETE_FROM_CART:
      return {
        ...state,
        Cart: state.Cart.filter((shoe) => shoe.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export default CartInfo;
