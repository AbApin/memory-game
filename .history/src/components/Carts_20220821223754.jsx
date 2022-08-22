import React from 'react';
import Cart from './Cart';

const Carts = () => {
  const [items, setItems] = React.useState([
    {id: 1,img: '../img/1.png',stat: 'active'},
    {id: 1,img: '../img/1.png',stat: 'wrong'},
    {id: 2,img: '../img/2.png',stat: 'correct'},
    {id: 2,img: '../img/2.png',stat: ''},
    {id: 3,img: '../img/3.png',stat: ''},
    {id: 3,img: '../img/3.png',stat: ''},
    {id: 4,img: '../img/4.png',stat: ''},
    {id: 4,img: '../img/4.png',stat: ''},
    {id: 5,img: '../img/5.png',stat: ''},
    {id: 5,img: '../img/5.png',stat: ''},
    {id: 6,img: '../img/6.png',stat: ''},
    {id: 6,img: '../img/6.png',stat: ''},
    {id: 7,img: '../img/7.png',stat: ''},
    {id: 7,img: '../img/7.png',stat: ''},
    {id: 8,img: '../img/8.png',stat: ''},
    {id: 8,img: '../img/8.png',stat: ''}
].sort(() => Math.random() - 0.5));

  return <div className='carts'>
    {items.map((item,index) => {
        return <Cart key={crypto.randomUUID()} item={item}/> 
    })}
  </div>;
};

export default Carts;
