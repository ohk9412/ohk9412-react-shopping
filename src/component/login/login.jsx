import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { useRef } from 'react';

const Login = ({authService}) => {
    const navigate = useNavigate();
    const goToHome = (userId) => {
        navigate({
            pathname : '/',
            state: {id: userId}
        })
    }
    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToHome(data.user.uid));
    };
    useEffect(() => {
        authService
        .onAuthChange(user => {
            user && goToHome(user.id);
        });
    });

    const emailRef = useRef();
    const passwordRef = useRef();

    return(
        <div className={styles.login}>
            <input 
            ref={emailRef}
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email"
            />
            <input
            ref={passwordRef}
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            
            />
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>
                        Email
                    </button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>
                        Google
                    </button>
                </li>
            </ul>
        </div>
    )
};

export default Login;