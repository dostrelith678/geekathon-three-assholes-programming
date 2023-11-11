import React, { useState } from 'react';
import styles from '../styles/login.module.css';

export default function LoginPage() {
    const [rememberMe, setRememberMe] = useState(false);

    const handleToggle = () => {
        setRememberMe(!rememberMe);
        console.log('Checkbox state:', rememberMe); // Log the state
    };

    return (
        <div className={styles.App}>
            <div className={styles['top-section']}>
                <h1>DOPPELCHAT</h1>
            </div>
            <div className={styles['image-section']}></div>
            <div className={styles['login-section']}>
                <form className={styles.form}>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="EMAIL"
                        />
                    </div>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="PASSWORD"
                        />
                    </div>

                    <div className={styles.box}>
                        <label className={styles.toggle}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={rememberMe}
                                onChange={handleToggle}
                            />
                            <span className={styles.slider}></span>
                        </label>
                        <span className={styles.sliderText}>INFLUENCER</span>
                    </div>

                    <div className={styles.box}>
                        <button className={styles.button} type="submit">
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles['forgot-password']}>
                <a href="#">Forgot My Password</a>
            </div>
        </div>
    );
}
