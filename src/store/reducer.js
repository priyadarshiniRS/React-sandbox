import { combineReducers } from "redux";
export const initialState = {
  product: {},
  products: [
    {
      id: 101,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgzuTyGWXdD4EUStkBbinWJx-WA2m_neAeB0pml4D9W2VwNatM9orHc1WxEQE&usqp=CAc",
      desc: "Saree",
      price: 1000,
      rating: 4,
      instock: "only few left",
      addedToCart: false,
      category: "clothing"
    },
    {
      id: 102,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaFZWpQsU63i-nztMg4J_3UFbBxXV0Dtp219_TYBv_dKrZP9471Y7s1H3-mF6ueAG5sQ0k-QLC&usqp=CAc",
      desc: "Chudidar",
      price: 500,
      rating: 3,
      instock: "in Stock",
      addedToCart: false,
      category: "clothing"
    },
    {
      id: 103,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr0fjUfRMuxU1qDuJSzKr6Hf0wdH5nDQRRhMrG0IXrhvfAIwcZUlviBFOu2LqnwFtaLXN6yFE&usqp=CAc",
      desc: "Sports Shoes",
      price: 1500,
      rating: 3.5,
      instock: "in Stock",
      addedToCart: false,
      category: "footwear"
    },
    {
      id: 104,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuE66o0nHSMrPD1MQlY0qSpbITqjqaJOmY0l-8q5NqGul8uFzSEs_PBLqT_0dzmX3fYXZjbqA&usqp=CAc",
      desc: "Formal Shoes",
      price: 800,
      rating: 3,
      instock: "in Stock",
      addedToCart: false,
      category: "footwear"
    },
    {
      id: 105,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLidTi-aP6tiou37oziMdyiT2zuVirQzTPU-caKFx0raLdr840nPy9p1jrSInpbdmDHLYn1HV6&usqp=CAc",
      desc: "Earphones wired",
      price: 600,
      rating: 5,
      instock: "in Stock",
      addedToCart: false,
      category: "accessory"
    }
  ],
  cart: {}
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      let filteredProducts = [...initialState.products];
      if (action.param !== "all") {
        filteredProducts = filteredProducts.filter((product) => {
          console.log(product.category);
          return product.category == action.param;
        });
        console.log(filteredProducts, action.param);
      }
      return {
        ...state,
        products: [...filteredProducts]
      };
    case "ASSIGN_PRODUCT":
      console.log(action.param, state);
      return {
        ...state,
        product: state.product ? state.products[action.param] : {}
      };
    case "ADD_TO_CART":
      let products = { ...state.cart };
      const newId = action.payload.id;
      if (products[newId]) {
        products[newId].qty = products[newId].qty + action.payload.qty;
      } else {
        products[newId] = { ...action.payload };
      }

      return {
        ...state,
        cart: { ...products }
      };
    default:
      return state;
  }
};

var rootReducer = combineReducers({ productsReducer });
export default rootReducer;
