import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import styles from './header.module.css'

const Header = () => {
    return (
        <>
        <div className={styles.topmenu}>
                <a>로그인</a>
            </div>
        <div className={styles.header}>
            
            <Link to={"/"}>
            <img 
            className={styles.img}
            src={process.env.PUBLIC_URL + '/logo.png'} 
            alt='logo'/>
            </Link>
        </div>
        <Navbar />
        </>
    );
};

export default Header;