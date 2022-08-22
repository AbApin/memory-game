import React from 'react';

function Cart({ item, id, handleClick }) {
  const itemClass = item.stat ? item.stat : '';

  return (
    <div className={'cart' + itemClass + {}} onClick={() => handleClick(id)}>
      <img src={item.img} alt="" />
    </div>
  );
}

export default Cart;
