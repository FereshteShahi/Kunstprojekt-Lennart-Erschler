import React from 'react';
import '../css/aktuelles.css';
import aktuelles from '../aktuelles.json';
import Exhibition from '../components/Exhibition';
import Onlineshop from '../components/Onlineshop';


function Aktuelles() {
  return (
    <div className='main-container'>
      <h2>aktuelles</h2>
      <div className='events-container'>
        <div className='exhibition-container'>
          {aktuelles.events.exhibition.map((event) => (
            <Exhibition
              id={event.id}
              image={event.image}
              date={event.date}
              location={event.location}
              link={event.link}
            />
          ))}
        </div>
        <div className='dividing-line'></div>
        <div className='onlineshop-container'>
          {aktuelles.events.onlineshop.map((event) => (
            <Onlineshop
              id={event.id}
              image={event.image}
              information={event.information}
              link={event.link}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Aktuelles