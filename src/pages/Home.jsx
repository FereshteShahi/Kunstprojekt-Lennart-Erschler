import React, { useState, useEffect } from "react";
import "../css/home.css";
import { motion } from "framer-motion";

function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHovered, setIsHovered] = useState(false);

  const updateDeviceType = () => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 768);
    setImageSrc(screenWidth >= 768 ? "/hero-desktop-tablet.jpg" : "/hero-mobile.jpg");
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div>
      <motion.div
        className="hero-image"
        onClick={handleClick}
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onHoverEnd={() => !isMobile && setIsHovered(false)}
        whileHover={isMobile ? {} : { scale: 1.05 }}
      >
        <img src={imageSrc} alt="Hero" className="hero-img" />
        <motion.div
          className={`hero-blur ${isClicked || isHovered ? "active" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isClicked || isHovered ? 1 : 0 }}
        >
          <p>
            Lennart Erschler zeigt eine Serie von hochschmalen Objekten auf
            Leinwand, eine Arbeit für das Kunstprojekt “Stelen als Wegweiser”
            für das in den nächsten Jahren eine Serie von Stelen / 210 x 40 cm
            künstlerisch geschaffen wurden.
          </p>
        </motion.div>
      </motion.div>

      <div className="socialMedia" >
      <div className="TextSocial" >
        <h2 id="social-media-h2">social media</h2>
        <div className="socialIcons">
          <img
            src="./icons/instagram-icon.svg"
            alt="IconInsta"
            id="IconSocial"
          />
          <img
            src="./icons/youtube-icon.svg"
            alt="IconYoutube"
            id="IconSocial"
          />
        </div>
      </div>

      <div className="instagram-container">
   <div className="card" id="insta">
   <div className="phone-frame">

<blockquote
   className="instagram-media phone-embed"
   data-instgrm-permalink="https://www.instagram.com/reel/DDH2W5moalq/"
   data-instgrm-version="14"
 >
   <div>
     <a
       href="https://www.instagram.com/reel/DDH2W5moalq/"
       target="_blank"
     >
       {" "}
     </a>
   </div>
 </blockquote>
</div>
<script async src="https://www.instagram.com/embed.js"></script>
   </div>

      

    <div className="card">
    <div className="phone-frame">

<blockquote
  className="instagram-media phone-embed"
  data-instgrm-permalink="https://www.instagram.com/reel/DC1madHo1XO/"
  data-instgrm-version="14"
>
  <div>
    <a
      href="https://www.instagram.com/reel/DC1madHo1XO/"
      target="_blank"
    >
      {" "}
    </a>
  </div>
</blockquote>
</div>
<script async src="https://www.instagram.com/embed.js"></script>
    </div>
     
      </div>

      <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/j7_MNcMj1k8"
        title="AUSSTELLUNG - Stelen als Wegweiser"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
      </div>

    </div>


  );

}

export default Home;
