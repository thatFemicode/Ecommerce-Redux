import axios from "axios";
import fakestoreapi from "../../apis/fakesotreapi";
// All these below are called action creators
import { ActionTypes } from "../constants/action-types";

// Three action types to set products , selected  products and remove selected products
export const setProducts = (products) => {
  // this action returns an object
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

// Initia fetchproducts before middleware
// export const fetchProducts = async () => {
//   const response = await axios.get("/products");
//   console.log(response);
//   // this action returns an object
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: response,
//   };
// };
// Get products using middleware to return
// a plain javascript object
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const response = await fakestoreapi.get("/products");

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
  // console.log(response);
  // // this action returns an object
  // return {
  //   type: ActionTypes.SET_PRODUCTS,
  //   payload: response,
  // };
};
export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakestoreapi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });
};
