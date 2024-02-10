import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {configureStore} from "@reduxjs/toolkit"
import { Provider } from "react-redux";
// import reducer,{initialState} from '@/reducer/StateReducers.js'
// import { StateProvider } from "@/context/StateContext.jsx";
// import { FilterContextProvider } from "./components/context/filter_context.jsx";
import rootReducer from './reducer/StateReducers';
import { AppProvider } from "./components/context/product_context.jsx";
import { FilterContextProvider } from "./components/context/filter_context.jsx";
const store = configureStore({
  reducer:rootReducer,
});



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
  <AppProvider>
    <FilterContextProvider>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </FilterContextProvider>
  </AppProvider>
  </Provider>
);
