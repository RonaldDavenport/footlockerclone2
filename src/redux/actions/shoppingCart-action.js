import {
  ADD_SHOE_DATA,
  ADD_TO_CART,
  GRAB_USERNAME,
} from "../action-types/getShoeData";
import { FILTER_PROUCTS_BY_BRAND } from "../action-types/getShoeData";

export const addToCart = (id, image, brand, name, retailPrice) => {
  return {
    type: ADD_TO_CART,
    payload: id,
    image,
    brand,
    name,
    retailPrice,
  };
};

export const removeFromCart = (id) => {
  return {
    type: FILTER_PROUCTS_BY_BRAND,

    payload: id,
  };
};

export const filterProducts = (products, brand, dispatch) => {
  dispatch({
    type: FILTER_PROUCTS_BY_BRAND,
    payload: {
      brand: brand,
      shoeData:
        brand == ""
          ? products
          : Object.values(products).filter((x) => x.brand.indexOf(brand) >= 0),
    },
  });
};

export const addShoeData = () => async (data) => {
  return {
    type: ADD_SHOE_DATA,

    payload: data,
  };
};

export const grabUsername = (username) => {
  return {
    type: GRAB_USERNAME,
    payload: username,
  };
};
