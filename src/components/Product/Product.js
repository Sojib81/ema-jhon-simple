import React from "react";

const product = (props) => {
  console.log(props.product.name);
  return (
    <div>
      <h2>{props.product.name}</h2>
    </div>
  );
};

export default product;
