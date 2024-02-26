import React from 'react';
import styles from './Header.module.sass';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="logo.svg" alt="Ratepunk logo" className={styles.logo} />
      <nav className={styles.nav}>
        <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Chrome Extension</a>
        <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Price Comparison</a>
        <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Blog</a>
      </nav>
    </header>
  );
};

export default Header;