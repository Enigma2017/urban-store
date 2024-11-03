import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


const HeaderMenuBar: React.FC = () => {
  return (
    <div className={styles.header__menuBar}>
        <div className={styles.container__menuBar}>
            <div className={styles.header__logo}>
                <Link to="/">
                    <img src="/assets/images/logo-light.webp" alt="logo" />
                </Link>
            </div>
            <div className={styles.header__menuNavbar}>
                <nav className={styles.header__menuItems}>
                    <ul className={styles.header__menuList}>
                        <li>
                            <Link to="/catalog">
                                Catalog 
                                <button>
                                    <img src="/assets/images/arrow-down.png" alt="arrow" />
                                </button>
                            </Link>
                        </li>
                        <li><Link to="/sale">Sale</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contacts">Contacts | space </Link></li>
                    </ul>
                </nav>
                <nav className={styles.header__menuItems}>
                    <ul className={styles.header__menuIcons}>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  );
};

export default HeaderMenuBar;