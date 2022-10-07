import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import styles from './header.module.css'
import { useEffect } from 'react';
import { useState } from 'react';

const Header = ({authService}) => {
    const navigate = useNavigate();
    const navigateState = navigate.state;
    const [userId, setUserId] = useState(navigateState && navigateState.id);
    
    const onLogout = useCallback(() => {
        authService.logout();
    },[authService]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            }
        })
    })

    console.log(userId)
    return (
        <>
        <div className={styles.topmenu}>
            {
                userId === undefined ? 
                    <Link to={"/login"}>
                        로그인
                    </Link>
                    : <button 
                    onClick={() => onLogout}>
                    로그아웃
                </button>
                }   
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