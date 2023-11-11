import React, { useEffect, useState } from 'react';
import { db } from '../path-to-your-firebase-config'; // Import your Firebase configuration

const FeedPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await db.ref('aiClones').get();
        const users = [];

        snapshot.forEach((userSnapshot) => {
          const userData = userSnapshot.val();
          users.push(userData);
        });

        setUserList(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>Feed</h1>
      {userList.map((user) => (
        <div key={user.id}>
          <img src={user.pp} alt={`${user.username}'s profile`} />
          <p>{user.username}</p>
          <p>{user.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedPage;