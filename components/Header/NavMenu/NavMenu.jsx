"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavMenu.module.css";
import cart from "../../../public/icons/cart.svg";
import profile from "../../../public/icons/profile.svg";
import cartWhite from "../../../public/icons/cart-white.svg";
import profileWhite from "../../../public/icons/profile-white.svg";

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
  const [selectedLink, setSelectedLink] = useState('Home');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    toggleMenu();
  }

  return (
    <div className={styles.navContainer}>
      <nav className={isMenuOpen ? styles.openedMenu : styles.navMenu}>  
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/"
              className={selectedLink === 'Home' ? styles.selected : ''}
              onClick={() => handleLinkClick('Home')}
            >Home</Link>
          </li>
          <li className={`${styles.navItem} ${styles.featuresLink}`}>
            <Link href="/features" 
              className={selectedLink === 'Features' ? styles.selected : ''}
              onClick={() => handleLinkClick('Features')}
            >
              Features
              <FontAwesomeIcon icon={faChevronDown} className={styles.chevronDownIcon} />
            </Link>
            <ul className={styles.featuresMenu}>
              <li className={styles.featuresItem}>
                <Link href="/feature1">Feature 1</Link>
              </li>
              <li className={styles.featuresItem}>
                <Link href="/feature2">Feature 2</Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog"
              className={selectedLink === 'Blog' ? styles.selected : ''}
              onClick={() => handleLinkClick('Blog')}
            >Blog</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop"
              className={selectedLink === 'Shop' ? styles.selected : ''}
              onClick={() => handleLinkClick('Shop')}
            >Shop</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about"
              className={selectedLink === 'About' ? styles.selected : ''}
              onClick={() => handleLinkClick('About')}
            >About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contacts"
              className={selectedLink === 'Contact' ? styles.selected : ''}
              onClick={() => handleLinkClick('Contact')}
            >Contact</Link>
          </li>
        </ul>
        {isMenuOpen ? 
          <div className={styles.icons}>
            <Image src={profileWhite} alt="Profile" className={styles.profileIcon} />
            <Image src={cartWhite} alt="Cart" className={styles.cartIcon} />
          </div>
            : 
          <div className={styles.icons}>
            <Image src={profile} alt="Profile" className={styles.profileIcon} />
            <Image src={cart} alt="Cart" className={styles.cartIcon} />
          </div>
        }
      </nav>
    </div>
  );
};

export default NavMenu;