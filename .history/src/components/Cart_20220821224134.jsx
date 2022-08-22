import React from "react";

const Cart = ({item,handleClick}) => {
  return <div className={item.stat ? "cart"} onClick={() => handleClick(item.id)}>
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
