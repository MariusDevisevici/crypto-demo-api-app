import Link from "next/link";
import {} from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item_logo}>
              <a href="/">Demo Crypto App</a>
            </li>

            <li>
              <Link href="/">
                <a>Buy Crypto</a>
              </Link>
            </li>
            <li>
              <Link href="/markets">
                <a>Markets</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Trade</a>
              </Link>
            </li>

            <li className={styles.nav__item_new}>
              <Link href="/">
                <a>NFT</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.nav__list}>
            <li>
              <Link href="/">
                <a>Log In</a>
              </Link>
            </li>
            <li className={styles.nav__item_register}>
              <Link href="/">
                <a>Register</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Download</a>
              </Link>
            </li>
            <li>English</li>
            <li className={styles.nav__item_currency}>USD</li>
            <li className={styles.nav__item_moon}>
              <img src="/assets/images/moon-svgrepo-com.svg" alt="moon" />
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.gift}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z"
            fill="gold"
          ></path>
        </svg>
        <p>
          Register now - Enjoy Welcome Rewards up to $100! (for verified users)
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z"
            fill="white"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Header;
