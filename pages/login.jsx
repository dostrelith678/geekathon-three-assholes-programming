// 'use client'; // Remove this line, it's not necessary
import React from 'react';
import styles from '../styles/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3008/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Le serveur a renvoyé une réponse 200 OK
            const data = await response.json();
            console.log(data);
            // Vérifier la valeur "influencer" dans la réponse du serveur
            if (data.user.influencer) {
                router.push('/dashboard');
            } else {
                router.push('/feed');
            }
        } else {
            // Le serveur a renvoyé une erreur
            const errorData = await response.json();
            console.error('Erreur de connexion:', errorData.error);
            // Gérez l'erreur de connexion ici (affichez un message d'erreur, etc.).
        }
    };

    const handleSignUpClick = () => {
        // redirigez l'utilisateur vers la page souhaitée
        router.push('/signup');
    };

    return (
        <div className={styles.App}>
            <div className={styles['top-section']}><h1>DOPPELCHAT</h1></div>
            <div className={styles['image-section']}></div>
            <div className={styles['login-section']}>
                <form className={styles.form}>
                    <div className={styles.box}>
                        <input className={styles.input} type="text" id="email" name="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className={styles.box}>
                        <input className={styles.input} type="password" id="password" name="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className={styles.box}>
                        <button className={styles.button} type="button" onClick={handleSubmit}>LOGIN</button>
                    </div>

                    <div className={styles.box}>
                        <button className={styles.button} type="submit" onClick={handleSignUpClick}>REGISTER</button>
                    </div>
                </form>
            </div>
            <div className={styles['forgot-password']}>
                <a href="#">Forgot My Password</a>
            </div>

        </div>
    );
}

export default LoginPage;