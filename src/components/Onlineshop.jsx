import React from 'react';
import '../css/onlineshop.css';

function Onlineshop(props) {
  return (
    <div className='onlineshop-card'>
      <a className='text-size' href={props.link} target="_blank"><p>{props.information}</p></a>
      <div className='onlineshop-image'>
        <img className='events-images' src={props.image} alt="Onlineshop Image" />
      </div>
    </div>
  )
}

export default Onlineshop