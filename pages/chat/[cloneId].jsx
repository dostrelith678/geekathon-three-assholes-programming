// Exemple minimal, vous devrez personnaliser selon vos besoins
import { useState } from 'react';
import { useRouter } from 'next/router';

const SmsChat = () => {
  const router = useRouter();
  const { cloneId } = router.query;

  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoyez la requête au backend pour obtenir la réponse
    const response = await fetch('http://localhost:3008/get-chat-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userMessage, cloneId: cloneId, chatHistory }), // Remplacez 'yourCloneIdHere' par l'ID réel du clone
    });

    if (response.ok) {
      const data = await response.json();
      const generatedResponse = data.generatedResponse;

      // Mettez à jour l'historique du chat avec la réponse générée
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: generatedResponse.content },
      ]);

      // Effacez le champ de message utilisateur
      setUserMessage('');
    } else {
      console.error('Error fetching chat response');
    }
  };

  return (
    <div>
      <div className="chat-history">
        {
          chatHistory.map((message, index) => (
            <div key={index} className={message.role}>
              {message.content.startsWith('https') ? (
                <img src={message.content} alt="Image" />
              ) : (
                message.content
              )}
            </div>
          ))
        }
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SmsChat;