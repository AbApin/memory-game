import React from "react";

const Cart = ({item}) => {
  return <div className="cart">
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
