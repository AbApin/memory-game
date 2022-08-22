import React, { useState } from 'react';
import Cart from './Cart';

function Carts({ setAll }) {
  const [items, setItems] = useState([
    { id: 1, img: '../img/1.png', stat: '',activity: '' },
    { id: 1, img: '../img/1.png', stat: '',activity: '' },
    { id: 2, img: '../img/2.png', stat: '',activity: '' },
    { id: 2, img: '../img/2.png', stat: '',activity: '' },
    { id: 3, img: '../img/3.png', stat: '',activity: '' },
    { id: 3, img: '../img/3.png', stat: '',activity: '' },
    { id: 4, img: '../img/4.png', stat: '',activity: '' },
    { id: 4, img: '../img/4.png', stat: '',activity: '' },
    { id: 5, img: '../img/5.png', stat: '',activity: '' },
    { id: 5, img: '../img/5.png', stat: '',activity: '' },
    { id: 6, img: '../img/6.png', stat: '',activity: '' },
    { id: 6, img: '../img/6.png', stat: '',activity: '' },
    { id: 7, img: '../img/7.png', stat: '',activity: '' },
    { id: 7, img: '../img/7.png', stat: '',activity: '' },
    { id: 8, img: '../img/8.png', stat: '',activity: '' },
    { id: 8, img: '../img/8.png', stat: '',activity: '' },
  ]);

  const [prev, setPrev] = React.useState(-1);

  function check(current) {
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
      }, 500);
      setPrev(-1);
    }
  }

  function isCorrect(item) {
    return item.stat.includes(' active correct');
  }

  function handleClick(id) {
    items[id]
    if (prev === -1) {
      items[id].stat = ' active';
      setItems([...items]);
      setPrev(id);
    } else {
      items[id].stat = ' active';
      check(id);
    }
    items.every(isCorrect) ? setAll(true) : setAll(false);
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
