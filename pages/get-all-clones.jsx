import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

        console.log("success")

        const data = await response.json();
        const allClonesData = data.allClonesData;
        console.log(allClonesData)
        const userKeys = Object.keys(allClonesData);

        const users = Object.values(allClonesData || {}).map((user, index) => ({
          id: userKeys[index],
          ...user
        }));

        console.log(userKeys)
        setUserList(users);

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run the effect only once
  console.log('User List:', userList);

  const handleChatButtonClick = (userId) => {
    // Redirect to the chat page with the user ID as a parameter
    router.push(`/chat/${userId}`);
  };

  return (
    <div>
      <h1>Feed</h1>
      <div>
        {userList.map((user) => (
          <div key={user.id}>
            <img src={user.pp} alt={`${user.username}'s profile`} />
            <p>{user.username}</p>
            <p>{user.description}</p>
            <button onClick={() => handleChatButtonClick(user.id)}>Chat with me</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;