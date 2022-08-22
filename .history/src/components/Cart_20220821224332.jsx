import React from "react";

const Cart = ({item,handleClick}) => {

    const itemClass = 

  return <div className={item.stat ? "cart" + "active" : ""} onClick={() => handleClick(item.id)}>
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
