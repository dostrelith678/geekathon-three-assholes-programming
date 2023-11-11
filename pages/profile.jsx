// 'use client'; // Remove this line, it's not necessary

import React from 'react';
import styles from '../styles/not-global.module.css';
// import { useMemo } from 'react'; // Assurez-vous que le chemin est correct

const Profile = () => {

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    age: '',
    paypalLink: '',
    idCard: null, // Use null as initial value for file input
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Assuming you only allow single file selection
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form data:', formData);
  };

  return (
      <div className={styles.App}>
        <div className={styles['image-section']}></div>
        <div className={styles['login-section']}>
          <h2 className={styles.heading}>Login</h2>
          <form className={styles.form}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />

            <label htmlFor="paypalLink">PayPal Link:</label>
            <input
              type="text"
              id="paypalLink"
              name="paypalLink"
              value={formData.paypalLink}
              onChange={handleChange}
            />

            <label htmlFor="idCard">Upload ID Card:</label>
            <input
              type="file"
              id="idCard"
              name="idCard"
              onChange={handleFileChange}
            />

            <div className={styles['button-container']}>
              <button className={styles.button} type="submit" onClick={handleSubmit}>UPDATE</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Profile;