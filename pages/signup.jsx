import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

const SignupPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        // Envoyez les données du formulaire à votre backend
        const response = await fetch('http://localhost:3008/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, "userType": checkboxChecked }),
        });

        if (response.ok) {
            // Le serveur a renvoyé une réponse 200 OK
            const data = await response.json();
            console.log(data);
            // Vérifier la valeur "influencer" dans la réponse du serveur
            if (data.influencer) {
                router.push('/create-clone');
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
        console.error('Error during signup:', error);
      }
    };

    const handleToggle = () => {
        setCheckboxChecked(!checkboxChecked);
        console.log('Checkbox state:', checkboxChecked); // Log the state
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles.box}>
                        <label className={styles.toggle}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                id="checkboxChecked"
                                name="checkboxChecked"
                                checked={checkboxChecked}
                                onChange={handleToggle}
                            />
                            <span className={styles.slider}></span>
                        </label>
                        <span className={styles.sliderText}>INFLUENCER</span>
                    </div>

                    <div className={styles.box}>
                        <button className={styles.button} type="button" onClick={handleSubmit}>
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

export default SignupPage;
