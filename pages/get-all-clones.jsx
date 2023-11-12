import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/not-global.module.css';

const GetAllClonesPage = () => {
  const router = useRouter();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3008/get-all-clones');
        if (!response.ok) {
          throw new Error('Error fetching AI clones data');
        }

        const data = await response.json();
        const allClonesData = data.allClonesData;

        const userKeys = Object.keys(allClonesData);
        const users = Object.values(allClonesData || {}).map((user, index) => ({
          id: userKeys[index],
          ...user
        }));

        setUserList(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleChatButtonClick = (userId) => {
    router.push(`/chat/${userId}`);
  };

  return (
      <div className={styles.App}>
        <div className={styles['top-section2']}>
          <h1>DOPPELCHAT</h1>
        </div>
        <div className={styles['image-feed-container']}>
          {userList.map((user) => (
              <div key={user.id} className={styles['profile-card']} >
                <img
                    className={styles['profile-image-portrait']}
                    src={user.pp}
                    alt={`${user.username}'s profile`}
                />
                <div className={styles['profile-text']}>
                    <p className={styles['profile-username']}>{user.username}</p>
                    <p className={styles['profile-description']}>{user.description}</p>
                </div>

                <button className={`${styles['chat-button']} ${styles['profile-chat-button']}`} onClick={() => handleChatButtonClick(user.id)}>
                  Chat Now
                </button>
              </div>
          ))}
        </div>
      </div>
  );
};

export default GetAllClonesPage;