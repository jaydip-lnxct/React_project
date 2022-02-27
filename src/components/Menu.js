import React from 'react';
import './menu.css'
const Menu=(props)=>{
  const getRandomColor=()=> {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
        }
    let item="Punjabi thali"
    return(
      <ul style={{textAlign:'center',backgroundColor:getRandomColor()}}>
        <h1 style={{color: getRandomColor()}}>Items</h1>
        <li>1.Pizza</li>
        <li>2.Manchurian</li>
        <li>3.Dosa</li>
        <li>4.Gujarati Dish</li>
        <li>5.Pau Bhaji</li>
        <li>6.{item.toUpperCase()}</li>
      </ul>
    )
  }
  
  export default Menu;