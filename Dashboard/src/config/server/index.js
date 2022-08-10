const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

console.log("SERVER_BASE_URL : ", SERVER_BASE_URL);

// product module
export const GET_ALL_PRODUCTS_END_POINT = `${SERVER_BASE_URL}dashboard/product`;
export const CREATE_PRODUCT_END_POINT = `${SERVER_BASE_URL}dashboard/product`;
export const GET_PRODUCT_END_POINT = `${SERVER_BASE_URL}dashboard/product/`;
export const UPDATE_PRODUCT_END_POINT = `${SERVER_BASE_URL}dashboard/product/`;
export const DELETE_PRODUCT_END_POINT = `${SERVER_BASE_URL}dashboard/product/`;
