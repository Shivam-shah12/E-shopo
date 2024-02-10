import React from 'react'
import FilterSection from "../components/productPage/FilterSection.jsx"
import Sort from "../components/productPage/Sort.jsx"
import ProductList from "../components/productPage/ProductList.jsx"
import '../index.css';
import { useSelector } from 'react-redux';
import { useProductContext } from '../components/context/product_context';

const ProductPage = () => {

  return (
  
    <div className="container bg-white grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="w-full flex flex-col mx-4">
          <div className="w-full my-4">
            <Sort />
          </div>
          <div className="w-full">
            <ProductList />
          </div>
        </section>
      </div>
  )
}

export default ProductPage