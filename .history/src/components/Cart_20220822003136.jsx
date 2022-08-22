import React, { useState } from 'react';

function Cart({ item, id, handleClick }) {
  const itemClass = item.stat ? ' active ' + item.stat : '';
  const [isActive, setIsActive] = useState(false);
  const x = 180;
  const y = 0;
  return (
    <div
      className={'cart' + itemClass}
      style={{
        transform: isActive ? `translate(${x}px` : 'translateY(0)',
      }}
      onClick={() => {
        setIsActive((current) => !current);
        handleClick(id);
      }}>
      <img src={item.img} alt="" />
    </div>
  );
}

export default Cart;
