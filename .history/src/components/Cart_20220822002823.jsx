import React, { useState } from 'react';

function Cart({ item, id, handleClick }) {
  const itemClass = item.stat ? ' active ' + item.stat : '';
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={'cart' + itemClass}
      style={{
        backgroundColor: isActive ? 'salmon' : '',
        color: isActive ? 'white' : '',
      }}
      onClick={() => {
        setIsActive(current => !current);
        handleClick(id);
      }}>
      <img src={item.img} alt="" />
    </div>
  );
}

export default Cart;
