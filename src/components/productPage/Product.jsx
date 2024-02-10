import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../pages/Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption absolute bg-black min-w-15 text-white top-9 py-2 px-4 rounded-full text-xl right-1 hover:text-white ">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;