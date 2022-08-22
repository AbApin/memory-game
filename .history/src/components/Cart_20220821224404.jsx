import React from "react";

const Cart = ({item,handleClick}) => {

    const itemClass = item.stat ? "active" + item.stat : ""

  return <div className={"cart" + } onClick={() => handleClick(item.id)}>
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
