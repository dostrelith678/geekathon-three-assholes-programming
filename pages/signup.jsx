// 'use client'; // Remove this line, it's not necessary

import React, {useState} from 'react';
import styles from '../styles/login.module.css';
// import { useMemo } from 'react'; // Assurez-vous que le chemin est correct

export default function Signup() {
  // const chatUUID = useMemo(() => uuidv4(), []);
  // const { messages, input, handleInputChange, handleSubmit } = useChat({
  //     id: chatUUID,
  //     body: { id: chatUUID },
  //     api: '/api/steamship/chat'
  // });
  const [isInfluencer, setIsInfluencer] = useState(false);

  return (
      <div className={styles.App}>
        <div className={styles['image-section']}></div>
        <div className={styles['login-section']}>
          <h2 className={styles.heading}>Register</h2>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="username">Username:</label>
            <input className={styles.input} type="text" id="username" name="username" />

            <label className={styles.label} htmlFor="password">Password:</label>
            <input className={styles.input} type="password" id="password" name="password" />
            <div className="checkbox-container">
              <input
                  type="checkbox"
                  id="influencerCheckbox"
                  checked={isInfluencer}
                  onChange={() => setIsInfluencer(!isInfluencer)}
              />
              <label htmlFor="influencerCheckbox" className="checkbox-label">
                Are you an """Influencer"""?
              </label>
            </div>
            <div className={styles['button-container']}>
              <button className={styles.button} type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
  );
}
