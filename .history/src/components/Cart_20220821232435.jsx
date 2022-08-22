import React from 'react';

function Cart({ item, id, handleClick }) {
//   const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'cart' + ""} onClick={() => handleClick(id)}>
      <img src={item.img} alt="" />
    </div>
  );
}

export default Cart;
