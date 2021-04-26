import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
  ON_SUCCESS_BUY,
} from "./types";
import { USER_SERVER } from "../components/Config.js";
import SizeItem from "../components/utils/SizeItem";

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function addToCart(id, selectedSize, selectedColor, price, images) {
  let body = {
    productId: id,
    size: selectedSize,
    color: selectedColor,
    price: price,
    images: images,
  };
  const request = axios
    .post(`${USER_SERVER}/addToCart`, body)
    .then((response) => response.data);

  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/product/products_by_id_cart?id=${cartItems}&type=array`)
    .then((response) => {
      return userCart;
    });

  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}

export function removeCartItem(productId, productSize, productColor) {
  const request = axios
    .get(
      `/api/users/removeFromCart?id=${productId}&size=${productSize}&color=${productColor}`
    )
    .then((response) => {
      response.data.cart.forEach((item) => {
        response.data.productInfo.forEach((product, index) => {
          if (
            item.id === product._id &&
            item.size === product.size &&
            item.color === product.color
          ) {
            response.data.productInfo[index].quantity = item.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    type: REMOVE_CART_ITEM,
    payload: request,
  };
}

export function onSuccessBuy(data) {
  const request = axios
    .post(`/api/users/successBuy`, data)
    .then((response) => response.data);

  return {
    type: ON_SUCCESS_BUY,
    payload: request,
  };
}
