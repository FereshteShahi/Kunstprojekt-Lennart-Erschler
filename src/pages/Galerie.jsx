import React from 'react';
import '../css/galerie.css';
import galerie from '../galerie.json';
import { useState } from 'react';

function Galerie() {

  const [selectedImage, setSelectedImage] = useState(null);

  const imageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='galerie main-container'>
      <h2>galerie</h2>
      <div className='masonry-with-columns'>
        {galerie.data.map((image) => (
          <div className='image-card' key={image.id} onClick={() => imageClick(image.image)}>
            <img src={image.image} alt='Stelle Image' />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className='modal' onClick={closeModal}>
          <div className='modalImage' onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Image" />
          </div>

        </div>
      )}
    </div>
  )
}

export default Galerie