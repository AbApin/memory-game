import React from 'react';

const Cart = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? ' active' + item.stat : '';

  return (
    <div className={'cart' + itemClass} onClick={() => handleClick(id)}>
      <img src={item.img} alt="" />
    </div>
  );
};

export default Cart;
