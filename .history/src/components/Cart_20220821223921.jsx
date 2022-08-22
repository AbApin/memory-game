import React from "react";

const Cart = ({item,handleClick}) => {
  return <div className="cart" onClick={() => handleClick(item.id)}>
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
