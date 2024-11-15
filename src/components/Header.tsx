// Этот компонент будет отвечать за шапку сайта. В шапке должны быть ссылки на соцсети (телеграм, инстаграм) и ссылки на разные разделы сайта.
// Что должно быть:
// Логотип или название.
// Ссылки на социальные сети.
// Навигация по разделам (например, "Портфолио", "Услуги и цены", "Контакты", "Обо мне").
// Мобильная версия, где меню сворачивается в выпадающий список.

import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header: React.FC = () => {
  useEffect(() => {
    const headerElement = document.querySelector(".header");
    if (headerElement) {
      headerElement.classList.add("header--visible");
    }
  }, []);

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsPortfolioOpen(true);
    }
  }, [isMobileMenuOpen]);

  const togglePortfolioMenu = () => {
    setIsPortfolioOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">dashkens</Link>
      </div>
      <button
        className={`header__burger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
      <nav
        className={`header__nav ${isMobileMenuOpen ? "header__nav--open" : ""}`}
      >
        <ul className="header__nav-list">
          <li>
            <div className="header__dropdown">
              <span
                className="header__link"
                onClick={() => togglePortfolioMenu}
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onMouseLeave={() => setIsPortfolioOpen(false)}
              >
                Портфолио
                <span
                  className={`header__arrow ${
                    isPortfolioOpen ? "header__arrow--open" : ""
                  }`}
                >
                  ↓
                </span>
              </span>
              <ul
                className={`header__dropdown-menu ${
                  isPortfolioOpen ? "header__dropdown-menu--visible" : ""
                }`}
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onMouseLeave={() => setIsPortfolioOpen(false)}
              >
                <li className="header__dropdown-menu-li">
                  <Link to="/portfolio/visual">Визуальные концепции</Link>
                </li>
                <li className="header__dropdown-menu-li">
                  <Link to="/portfolio/mobile">Мобильные съемки</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/about">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
