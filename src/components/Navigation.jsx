import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../css/navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`nav main-container ${
        isHomePage ? "home-page" : "not-home-page"
      }`}
    >
      <div className="logo-container">
        <div className="text-bild">
          <h1>lennart erschler</h1>
          {isHomePage && <img className="logo" src="/Logo-LE.png" alt="Logo" />}
        </div>
        <div className="linie"></div>
        <div className="art">
          <h3>contemporary art</h3>
        </div>
      </div>

      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X size={0} className="menu-icon" />
        ) : (
          <Menu size={32} className="menu-icon" />
        )}
      </div>

      {menuOpen && (
        <div className="menu-background">
          <div className="menu-overlay" onClick={closeMenu}>
            <div className="menu-content" onClick={(e) => e.stopPropagation()}>
              <X size={32} className="close-icon" onClick={closeMenu} />
              <a href="/">home</a>
              <a
                className="onlineshop"
                href="https://www.saatchiart.com/en-de/all?hitsPerPage=100&query=lennart%20erschler"
                target="_blank"
                rel="noopener noreferrer"
              >
                onlineshop
              </a>
              <a href="/kunstprojekt">kunstprojekt</a>
              <a href="/vita">vita</a>
              <a href="/galerie">galerie</a>
              <HashLink smooth to="/#insta" onClick={closeMenu}>
                social media
              </HashLink>
              <a href="/aktuelles">aktuelles</a>
            </div>
          </div>
        </div>
      )}

      <div className="menu-content desktop">
        <a href="/">home</a>
        <a
          className="onlineshop"
          href="https://www.saatchiart.com/en-de/all?hitsPerPage=100&query=lennart%20erschler"
          target="_blank"
          rel="noopener noreferrer"
        >
          onlineshop
        </a>
        <a href="/kunstprojekt">kunstprojekt</a>
        <a href="/vita">vita</a>
        <a href="/galerie">galerie</a>
        <HashLink smooth to="/#insta" onClick={closeMenu}>
          social media
        </HashLink>
        <a href="/aktuelles">aktuelles</a>
      </div>
    </div>
  );
}

export default Navigation;
