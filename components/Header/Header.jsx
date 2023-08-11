import Image from "next/image";
import Link from "next/link";

import NavMenu from "./NavMenu/NavMenu";
import cart from "../../public/icons/cart.svg";
import profile from "../../public/icons/profile.svg";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Link href="/">Logo Here</Link></div>
      <div className={styles.navigation}>
        <NavMenu />
        <div className={styles.icons}>
          <Image src={profile} alt="Profile" className={styles.profileIcon} />
          <Image src={cart} alt="Cart" className={styles.cartIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;