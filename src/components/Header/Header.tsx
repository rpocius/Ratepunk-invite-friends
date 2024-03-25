import { useState } from 'react';
import styles from './Header.module.sass';
import Image from 'next/image';
import Link from "next/link";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.header_container} ${isMenuOpen ? styles.header_container_active : ''}`}>
        <Link href="https://www.ratepunk.com/" target="_blank" rel="noopener noreferrer">
          <Image src="logo.svg" alt="Ratepunk logo" className={styles.logo} width={125} height={32} />
        </Link>
        <button className={styles.menu_button} onClick={toggleMenu} aria-label="Toggle menu">
          <Image src={isMenuOpen ? "/close.svg" : "/menu.svg"} alt={isMenuOpen ? "Close menu" : "Open menu"} width={isMenuOpen ? 18 : 20} height={18} />
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_active : ''}`}>
          <Link href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Chrome Extension</Link>
          <Link href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Price Comparison</Link>
          <Link href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
