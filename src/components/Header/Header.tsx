import React from 'react';
import styles from './Header.module.sass';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <a href="https://www.ratepunk.com/" target="_blank" rel="noopener noreferrer">
          <img src="logo.svg" alt="Ratepunk logo" className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Chrome Extension</a>
          <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Price Comparison</a>
          <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;