import React, { useEffect, useState } from "react";

import fakedata from "./fakedata.json";
import "./Shop.css";
import Product from "../Product/Product";
const Shop = () => {
  const first10 = fakedata.slice(0, 10);
  //console.log(first10);
  const [products, setProducts] = useState(first10);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>

      <div className="cart-container">
        <h3>This is cart</h3>
      </div>

      {/* <ul>
        {products.map((product) => (
          <li key={product.key}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.img} alt={product.name} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Shop;
