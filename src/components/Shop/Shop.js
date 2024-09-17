import React, { useEffect, useState } from "react";

import fakedata from "./fakedata.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const first10 = fakedata.slice(0, 10);
  //console.log(first10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("Product Added");
    console.log(product);

    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            handleAddProduct={handleAddProduct}
            product={product}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
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
