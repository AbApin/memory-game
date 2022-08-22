import React, { useEffect, useState } from 'react';
import Cart from './Cart';

function Carts() {
  const [items, setItems] = useState(
    [
      { id: 1, img: '../img/1.png', stat: '' },
      { id: 1, img: '../img/1.png', stat: '' },
      { id: 2, img: '../img/2.png', stat: '' },
      { id: 2, img: '../img/2.png', stat: '' },
      { id: 3, img: '../img/3.png', stat: '' },
      { id: 3, img: '../img/3.png', stat: '' },
      { id: 4, img: '../img/4.png', stat: '' },
      { id: 4, img: '../img/4.png', stat: '' },
      { id: 5, img: '../img/5.png', stat: '' },
      { id: 5, img: '../img/5.png', stat: '' },
      { id: 6, img: '../img/6.png', stat: '' },
      { id: 6, img: '../img/6.png', stat: '' },
      { id: 7, img: '../img/7.png', stat: '' },
      { id: 7, img: '../img/7.png', stat: '' },
      { id: 8, img: '../img/8.png', stat: '' },
      { id: 8, img: '../img/8.png', stat: '' },
    ].sort(() => Math.random() - 0.5),
  );

  const [prev, setPrev] = React.useState(-1);

  function check(current) {
    console.log(items[prev].id)
    if (items[current].id === items[prev].id) {
      items[current].stat += ' correct';
      items[prev].stat += ' correct';
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat += ' wrong';
      items[prev].stat += ' wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
      setPrev(-1);
    }
  }
  function handleClick(id) {
    if (items[prev]) {
      items[prev].stat = items[prev].stat.replace(' corrent', '');
    }
    setItems([...items]);
    if (prev === -1) {
      items[id].stat = ' active corrent';
      setItems([...items]);
      setPrev(id);
    } else {
      items[id].stat = ' active corrent';
      setItems([...items]);
      check(id);
    }
  }

  return (
    <div className="carts">
      {items.map((item, index) => (
        <Cart key={crypto.randomUUID()} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default React.memo(Carts);
