// 'use client'; // Remove this line, it's not necessary

import React from 'react';
import styles from '../styles/login.module.css';

export default function LoginPage() {

  return (
      <div className={styles.App}>
        <div className={styles['top-section']}><h1>DOPPELCHAT</h1></div>
        <div className={styles['image-section']}></div>
        <div className={styles['login-section']}>
          <form className={styles.form}>
            <div className={styles.box}>
              <input className={styles.input} type="text" id="email" name="email" placeholder="EMAIL"/>
            </div>

            <div className={styles.box}>
              <input className={styles.input} type="password" id="password" name="password" placeholder="PASSWORD"/>
            </div>

            <div className={styles.box}>
              <button className={styles.button} type="submit">REGISTER</button>
            </div>
          </form>
        </div>
        <div className={styles['forgot-password']}>
          <a href="#">Forgot My Password</a>
        </div>

      </div>
  );
}
