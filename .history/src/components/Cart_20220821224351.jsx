import React from "react";

const Cart = ({item,handleClick}) => {

    const itemClass = item.stat ? "active" + item.s : ""

  return <div className={} onClick={() => handleClick(item.id)}>
    <img src={item.img} alt="" />
  </div>;
};

export default Cart;
