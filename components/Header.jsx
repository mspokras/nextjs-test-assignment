import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/features">Features</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/about">About</Link>
      <Link href="/contacts">Contacts</Link>
    </header>
  );
};

export default Header;