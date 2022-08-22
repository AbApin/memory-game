import React from 'react';

const Carts = () => {
  const [items, setItems] = React.useState([
    {id: 1,img: '../img/1.png',stat: ''},
    {id: 1,img: '../img/1.png',stat: ''},
    {id: 2,img: '../img/2.png',stat: ''},
    {id: 2,img: '../img/2.png',stat: ''},
    {id: 3,img: '../img/3.png',stat: ''},
    {id: 3,img: '../img/3.png',stat: ''},
    {id: 4,img: '../img/4.png',stat: ''},
    {id: 4,img: '../img/4.png',stat: ''},
    {id: 5,img: '../img/5.png',stat: ''},
    {id: 5,img: '../img/5.png',stat: ''},
    {id: 6,img: '../img/6.png',stat: ''},
    {id: 6,img: '../img/6.png',stat: ''}
]);

  return <div>
    {items.map((item,index) => {
        return <Ca
    })}
  </div>;
};

export default Carts;
