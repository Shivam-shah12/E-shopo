import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer.jsx";
import { GET_WEBSITE_PRODUCT } from "../../utils/ApiRoutes";


const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  products: [],
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    try {
        const {data}=await axios.get(GET_WEBSITE_PRODUCT);
        if(data.message==="INVALID_TOKEN")
        {
            alert("please Login First , Because Your Token is expired")
            return ;
        }
        const allProducts=await data.allProducts;
        // console.log(allProducts)
        const products = allProducts.map((elem, id) => {
          return {
              id: elem._id, // Use elem._id instead of _id directly
              name: elem.productName,
              price: elem.productPrice,
              description: elem.productDescription.text || elem.productDescription,
              category: elem.category,
              sellerId: elem.sellerId,
              TotalLiked: elem.TotalLiked,
              image: elem.productImage[0]
          };
      });
      
       dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

 

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };