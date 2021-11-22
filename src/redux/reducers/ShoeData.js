import { ADD_SHOE_DATA } from "../action-types/getShoeData";
import { FILTER_PROUCTS_BY_BRAND } from "../action-types/getShoeData";
const intialState = {
  shoeData: [],
  filteredItems: [],
  brand: "",
};
const ShoeData = (state = intialState, action) => {
  switch (action.type) {
    case ADD_SHOE_DATA:
      return { shoeData: action.payload, filteredItems: action.payload };
    case FILTER_PROUCTS_BY_BRAND:
      return {
        ...state,
        filteredItems: action.payload.shoeData,
        brand: action.payload.brand,
      };

    default:
      return state;
  }
};
export default ShoeData;
