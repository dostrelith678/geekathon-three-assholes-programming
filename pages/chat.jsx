'use client';

import styles from '../styles/chat.module.css'; // Assurez-vous que le chemin est correct
import { useChat } from 'ai/react';
import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SteamshipMessage from "../components/steamship-message";
import {
  SteamshipChatLoadingMessage,
  SteamshipChatMessageContainer,
  SteamshipChatMessageContentsContainer,
  SteamshipChatUser,
} from "../components/steamship-chat-elements";
 
export default function Chat() {
  const chatUUID = useMemo(() => uuidv4(), []);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    id: chatUUID,
    body: { id: chatUUID },
    api: '/api/steamship/chat'
  });
 
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <a href="https://flirt-ai.com">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </a>
        <div className={styles.profilePicture}>
          <img src="./valentina.jpg" alt="Photo de profil"/>
          <div className={styles.greenCircle}></div>
        </div>
        <div>
        <h1 className={styles.title}>Valentina</h1>
        <p className={styles.desc}>Text me and you won't need any other woman 😘</p>
        </div>
      </header>
    <div className={styles.containerchat}>
      <div className={styles.chatWrapper}>
      {messages.map((m) => (
          <div
            key={m.id}
            className={
              m.role === 'user'
                ? styles.message
                : styles.valentinamessage
            }
          >
            <div className={styles.messageName}>
              {m.role === 'user' ? 'You' : 'Valentina'}
            </div>
            <SteamshipMessage message={m.content} />
          </div>
        ))}
        <footer>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.textareacontainer}>
              <textarea
                className={styles.textarea}
                placeholder="Type a message"
                value={input}
                onChange={handleInputChange}
                style={{ height: `${input.split('\n').length * 1.5}em` }}
              />
            </div>
            <div className={styles.buttoncontainer}>
              <button className={styles.button} type="submit">
                Send
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z"/></svg>                </button>
            </div>
          </form>
        </footer>
      </div>
    </div>
    </div>
  );
}