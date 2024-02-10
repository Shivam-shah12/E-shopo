import { createSlice } from "@reduxjs/toolkit";

// Load the initial state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

const initialState =loadState() ||   {
  userType: undefined,
  credentials: undefined,
  token: undefined,
  userAddress: [],
  likedProduct:[],
  cartProduct:[],  
};

const allSlice = createSlice({
  name: "allSlice",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      // Save the state to localStorage whenever it changes
      localStorage.setItem("reduxState", JSON.stringify(state));
    },
    setUserTypeAndCredentials(state, action) {
      state.userType = action.payload.accountType;
      state.credentials = action.payload.credentials;
      state.token = undefined;
      localStorage.setItem("reduxState", JSON.stringify(state));
    },
    setCredentials(state, action) {
      state.credentials = action.payload;
      localStorage.setItem("reduxState", JSON.stringify(state));
    },
    setUserAddress(state, action) {
      return {
        ...state,
        userAddress: [...state.userAddress, ...action.payload],
      };
    },
    setLikedProduct(state, action) {
      const currentLikedProduct = Array.isArray(state.likedProduct)
        ? state.likedProduct
        : [];
    
      // Identify existing product IDs
      const existingProductIds = currentLikedProduct.map(product => product.productId);
      
      const data=[action.payload];
      // Filter out products that already exist in the state
      const newProducts = data.filter(
        product => !existingProductIds.includes(product.productId)
      );
    
      return {
        ...state,
        likedProduct: [...currentLikedProduct, ...newProducts],
      };
    },
    setaddCart(state,action){
      const currentCartProduct = Array.isArray(state.cartProduct)
      ? state.cartProduct
      : [];
  
    // Identify existing product IDs
    const existingProductIds = currentCartProduct.map(product => product.productId);
    
    const data=[action.payload];
    // Filter out products that already exist in the state
    const newProducts = data.filter(
      product => !existingProductIds.includes(product.productId)
    );
  
    return {
      ...state,
      cartProduct: [...currentCartProduct, ...newProducts],
    };
    },
    

  }});

export const {
  setToken,
  setUserTypeAndCredentials,
  setCredentials,
  setUserAddress,
  setLikedProduct,
  setaddCart,
} = allSlice.actions;

export default allSlice.reducer;
