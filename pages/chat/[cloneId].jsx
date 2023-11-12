// Exemple minimal, vous devrez personnaliser selon vos besoins
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/not-global.module.css';

const SmsChat = () => {
  const router = useRouter();
  const { cloneId } = router.query;

  const [pp, setPP] = useState(""); // Use useState to manage firstname
  const [firstname, setFirstname] = useState(""); // Use useState to manage firstname
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Référence à l'élément input
  const textareaRef = useRef(null);

  // Utilisez useEffect pour mettre à jour la hauteur de l'input lors du chargement initial et chaque fois que le contenu change
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [userMessage]);

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
      setFirstname(data.cloneFirstName);
      setPP(data.clonePp);
      console.log(pp)
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
    <div className={styles.App}>
      <div className={styles.chatContainer}>
        <div className={styles.chatHistory}>
          {
            chatHistory.map((message, index) => (
              <div key={index} className={styles[message.role]}>
                {message.role === 'assistant' && (
                  <div className={styles.chatAssistantInfo}>
                    <img className={styles.chatPP} src={pp} alt="Image" />
                    <p className={styles.chatFirstname}>{firstname}</p>
                  </div>
                )}
                {message.content.startsWith('https') ? (
                  <img className={styles.chatPhoto} src={message.content} alt="Image" />
                ) : (
                  message.content
                )}
              </div>
            ))
          }
        </div>

        <div className={styles.chatInputContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <textarea
            className={styles.chatInput}
            ref={textareaRef}
            type="textarea"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button className={`${styles.sendButton} ${styles.chatButton}`} type="submit">Send</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SmsChat;