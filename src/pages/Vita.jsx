import React, { useState, useEffect } from "react";
import vita from "../vita.json";
import "../css/vita.css";
console.log(vita);

  function Vita() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      "./vita-images/Lennart-1.jpg",
      "./vita-images/Lennart-2.jpg",
      "./vita-images/Lennart-3.jpg",
      "./vita-images/Lennart-4.jpg"
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(timer);
    }, []);

  return (
    <div className="boxVita">
      <h2>vita</h2>
     <div className="sliders_group">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${currentSlide === index ? 'active' : ''}`}
          >
            <img src={slide} alt="" id="hero-img" />
          </div>
        ))}
      </div>

      <div className="resume">
     <div className="contact-box">
     <h1>lennart erschler</h1>
     <h1>tel: 089 / 123 29 49</h1>
     <h1>e-mail: kunst-lennart@gmx.de</h1>
     </div>
        {vita.data.map((teil) => (
          <ul className="vitaText">
            <h1 className="name">{teil.title}</h1>
            {teil.jahrgang.map((item) => (
              <ul key={item.id + "-" + item.number}>
                <div className="textGap">
                  <span className="fontNumber">{item.number}</span>
                  <span className="fontText">{item.text}</span>
                </div>
              </ul>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Vita;
