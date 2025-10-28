import React from 'react';
import '../css/exhibition.css';

function Exhibition(props) {
  return (
    <div className='exhibition-card'>
      <p id='numbers-size'>{props.date}</p>
      <a className='text-size' href={props.link} target="_blank"> <p className='text-size'>{props.location}</p></a>
      <div className='exhibition-image'>
        <img className='events-images' src={props.image} alt="Exhibition Image" />
      </div>
    </div>
  )
}

export default Exhibition