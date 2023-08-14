"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import NavMenu from "./NavMenu/NavMenu";
import styles from "./Header.module.css";
import burgerMenu from "../../public/icons/burger-menu.svg";
import cross from "../../public/icons/cross.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isMenuOpen && styles.headerOpen}`}>
      <div className={styles.logo}><Link href="/">Logo Here</Link></div>
      <button type="button" className={styles.navbarToggler} onClick={toggleMenu}>
        {isMenuOpen ? 
          <Image src={cross} alt="Cross" className={styles.crossIcon} />
            :
          <Image src={burgerMenu} alt="Burger Menu" className={styles.burgerIcon} />
        }
      </button>
      <NavMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;