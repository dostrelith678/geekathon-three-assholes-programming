import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/not-global.module.css';

const FeedPage = () => {
  const router = useRouter();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch data from your backend
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
  }, []); // Empty dependency array to run the effect only once

  const handleChatButtonClick = (userId) => {
    // Redirect to the chat page with the user ID as a parameter
    router.push(`/chat/${userId}`);
  };

  return (
    <div className={styles.App}>
      <div className={styles['top-section']}><img className={styles.logo} src="doppelchat_1.png" alt="logo" /></div>
      <div className={styles.feed}>
        {userList.map((user) => (
          <div className={styles.userCard} key={user.id}>
            <img src={user.pp} alt={`${user.username}'s profile`} />
            <p>{user.username}</p>
            <p>{user.description}</p>
            <button className={styles.button} onClick={() => handleChatButtonClick(user.id)}>Chat with me</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;