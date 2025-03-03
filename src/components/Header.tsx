// Этот компонент будет отвечать за шапку сайта. В шапке должны быть ссылки на соцсети (телеграм, инстаграм) и ссылки на разные разделы сайта.
// Что должно быть:
// Логотип или название.
// Ссылки на социальные сети.
// Навигация по разделам (например, "Портфолио", "Услуги и цены", "Контакты", "Обо мне").
// Мобильная версия, где меню сворачивается в выпадающий список.

import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add("header--visible");
    }
  }, []);

  const [isPortfolioOpen, setIsPortfolioOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function lockScroll() {
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  }

  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    document.body.style.width = "";
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsPortfolioOpen(true);
      lockScroll();
    } else {
      setIsPortfolioOpen(false);
      unlockScroll();
    }
  }, [isMobileMenuOpen]);

  const togglePortfolioMenu = () => {
    setIsPortfolioOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header__logo">
        <Link to="/">dashkens</Link>
        <img
          src="https://res.cloudinary.com/deqblcqj7/image/upload/v1740950865/%D0%9B%D0%B8%D1%81%D1%82%D0%B8%D0%BA_ew9nsg.png"
          alt="Логотип"
          width="45"
        />
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
                onClick={isMobileMenuOpen ? () => {} : togglePortfolioMenu}
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
                <li className="header__dropdown-menu-li">
                  <Link to="/my-self">Рилсмейкер</Link>
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
