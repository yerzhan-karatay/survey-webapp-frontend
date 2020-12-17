import React from 'react';

const Footer = () => {
  const linkedIn = "https://www.linkedin.com/in/yerzhan-karatayev/";

  return (
    <footer className="main-footer">
      <div className="main-footer__company">
        Copyright © 2020-2021 Survey World
      </div>
      <div className="main-footer__author">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">Yerzhan Karatayev</a>
      </div>
    </footer>
  );
};

export default Footer;