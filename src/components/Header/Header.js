import React, { useState, useEffect } from 'react';
import './Header.css'; // Đảm bảo rằng bạn đã tạo file CSS này
import { Routes, Route, Link } from 'react-router-dom'





const Header = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scroll) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")}>
        <a href="#hero-section"><img src="./Img/logo.png" className="logo" alt=""/></a>
        <label htmlFor="menu-toggle" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </label>
        <input type="checkbox" id="menu-toggle" aria-label="hi"/>
        <ul className="links">
          <li><Link to="/">Trang chủ</Link></li>
          <li><a href="/provinceMainPage">Tỉnh thành</a></li>
          <li><a href="">Môn học</a></li>
          <li><Link to="/contact">Liên hệ</Link></li>
          <li><a href="">Luyện tập</a></li>
          <li><a href="https://www.coze.com/store/bot/7356249655392534536?panel=1&bid=6c7k06i0k5g07">ChatBot AI</a></li>
        </ul>
        <div className="buttons">
          <a href="/" className="signin">Đăng kí</a>
          <a href="/" className="signup">Đăng nhập</a>
          <img id="VN" className="fa-language" src="./Img/VN.png" alt=''/>
        </div>
      </nav>
    </>
  );
};

export default Header;
