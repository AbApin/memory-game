import React, { useState } from 'react';

function Cart({ item, id, handleClick }) {
  const itemClass = item.stat ? ' active ' + item.stat : '';
  const [isActive, setIsActive] = useState(false);
  const x = 180;
  const y = 0;
  const styles = {
    transform: `translate(${x}deg, ${y}px)`,
  };
  return (
    <div
      className={'cart' + itemClass}
      style={{
        transform: isActive ? 'translateY(180deg)' : 'translateY(0)',
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
