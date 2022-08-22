import React from "react";

const Cart = ({item,handleClick}) => {

    const 

  return <div className={item.stat ? "cart" + "active" : ""} onClick={() => handleClick(item.id)}>
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
