import React from 'react';

const Carts = () => {
  const [items, setItems] = React.useState([
    {id: 1,img: '../img/1.png',stat: ''},
    {id: 1,img: '../img/1.png',stat: ''},
    {id: 2,img: '',stat: ''},
    {id: 2,img: '',stat: ''},
    {id: 3,img: '',stat: ''},
    {id: 3,img: '',stat: ''},
    {id: 4,img: '',stat: ''},
    {id: 4,img: '',stat: ''},
    {id: 5,img: '',stat: ''},
    {id: 5,img: '',stat: ''},
    {id: 6,img: '',stat: ''},
    {id: 6,img: '',stat: ''}
]);

  return <div>
    <img src="../img/1.png" alt="" />
  </div>;
};

export default Carts;
