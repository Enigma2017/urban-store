import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import SearchPanel from './SearchPanel';
import HeartIcon from '../Icon/HeartIcon';
import ProfileIcon from '../Icon/ProfileIcon';
import CartIcon from '../Icon/CartIcon';
import ArrowDownMenuIcon from '../Icon/ArrowDownMenuIcon';


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
                                <button className={styles.header__arrowBtn}><ArrowDownMenuIcon /></button>
                            </Link>
                        </li>
                        <li><Link to="/sale">Sale</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contacts">Contacts | space </Link></li>
                    </ul>
                </nav>
                <nav className={styles.header__menuItems}>
                    <ul className={styles.header__menuIcons}>
                        <li><SearchPanel /></li>
                        <li><Link to="/favourites"><HeartIcon /></Link></li>
                        <li><Link to="/profile"><ProfileIcon /></Link></li>
                        <li><Link to="/cart"><CartIcon /></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  );
};

export default HeaderMenuBar;