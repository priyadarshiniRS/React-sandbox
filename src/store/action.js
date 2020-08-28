const addToCart = (payload) => ({ type: "ADD_TO_CART", payload });
const assignProduct = (param) => ({ type: "ASSIGN_PRODUCT", param });
const getProducts = (param) => ({ type: "GET_PRODUCTS", param });
export { assignProduct, addToCart, getProducts };
