// 'use client'; // Remove this line, it's not necessary
import React from 'react';
import styles from '../styles/login.module.css';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../context/AuthUserContext';

// import { useMemo } from 'react'; // Assurez-vous que le chemin est correct

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (response.ok) {
                // Le serveur a renvoyé une réponse 200 OK
                const data = await response.json();
    
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
        } catch (error) {
            console.error('Erreur de connexion:', error.message);
            // Gérez l'erreur de connexion ici (affichez un message d'erreur, etc.).
        }
    };

    const handleSignUpClick = () => {
        // redirigez l'utilisateur vers la page souhaitée
        router.push('/signup');
    };

    return (
        <div className={styles.App}>
            <div className={styles.topSection}><h1>DOPPLECHAT</h1></div>
            <div className={styles['image-section']}></div>
            <div className={styles['login-section']}>
                <h2 className={styles.heading}>Login</h2>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor="username">Email:</label>
                    <input className={styles.input} type="text" id="username" name="username" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input className={styles.input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className={styles['button-container']}>
                        <button className={styles.button} type="submit" onClick={handleLogin}>Login</button>
                        <button className={styles.button} type="submit" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;