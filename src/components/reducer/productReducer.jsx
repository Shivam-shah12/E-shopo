const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
  
    // if (action.type === "API_ERROR") {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //   };
    // }
  
    switch (action.type) {
     
  
      case "SET_API_DATA":
        // console.log(action.payload)
        return {
          ...state,
          products: action.payload,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

      default:
        return state;
    }
  };
  
  export default ProductReducer;