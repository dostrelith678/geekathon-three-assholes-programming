// 'use client'; // Remove this line, it's not necessary

import React from 'react';
import styles from '../styles/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const clonePage = () => {

    const [formData, setFormData] = useState({
        pp:null,
        username: '',
        description: '',
        relationship: '',
        jobtitle: '',
        companyname: '',
        background: '',
        emotionnal: [],
        hobby: [],
        lifestyle: [],
        social: [],
        toddler: [],
        infant: [],
        skill: [],
        favorite: '',
        selfies:null
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
            [name]: files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Ajoutez la logique d'envoi du formulaire ici
    };

  return (
      <div className={styles.App}>
        <h2 className={styles.heading}>Create a Dopple</h2>
        <form className={styles.form}>

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="description">Briefly describe your doppel:</label>
            <input
              type="description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <label htmlFor="relationship">Relationship:</label>
            <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            >
            <option value="relationship">Relationship</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="complicated">Complicated</option>
            </select>

            <label htmlFor="jobtitle">Job title:</label>
            <input
              type="text"
              id="jobtitle"
              name="jobtitle"
              value={formData.jobtitle}
              onChange={handleChange}
            />

            <label htmlFor="companyname">Company name:</label>
            <input
              type="text"
              id="companyname"
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
            />

            <label htmlFor="background">Be as complete as possible about your background. Your romantic, social, professional and family experiences. Etc.</label>
            <input
              type="description"
              id="background"
              name="background"
              value={formData.background}
              onChange={handleChange}
            />

            <label htmlFor="emotionnal">Emotionnal traits:</label>
            <select
            id="emotionnal"
            name="emotionnal"
            multiple
            value={formData.emotionnal}
            onChange={handleChange}
            >
            <option value="ambitious">Ambitious</option>
            <option value="cheerful">Cheerful</option>
            <option value="childish">Childish</option>
            <option value="clumsy">Clumsy</option>
            <option value="creative">Creative</option>
            <option value="erratic">Erratic</option>
            <option value="genius">Genius</option>
            <option value="gloomy">Gloomy</option>
            <option value="goofball">Goofball</option>
            <option value="highmaintenance">High Maintenance</option>
            <option value="hotheaded">Hot Headed</option>
            <option value="paranoid">Paranoid</option>
            <option value="romantic">Romantic</option>
            <option value="selfassured">Self Assured</option>
            <option value="squeamish">Squeamish</option>
            <option value="unflirty">Unflirty</option>
            </select>

            <label htmlFor="emotionnal">Emotionnal traits:</label>
            <select
            id="emotionnal"
            name="emotionnal"
            multiple
            value={formData.emotionnal}
            onChange={handleChange}
            >
            <option value="ambitious">Ambitious</option>
            <option value="cheerful">Cheerful</option>
            <option value="childish">Childish</option>
            <option value="clumsy">Clumsy</option>
            <option value="creative">Creative</option>
            <option value="erratic">Erratic</option>
            <option value="genius">Genius</option>
            <option value="gloomy">Gloomy</option>
            <option value="goofball">Goofball</option>
            <option value="highmaintenance">High Maintenance</option>
            <option value="hotheaded">Hot Headed</option>
            <option value="paranoid">Paranoid</option>
            <option value="romantic">Romantic</option>
            <option value="selfassured">Self Assured</option>
            <option value="squeamish">Squeamish</option>
            <option value="unflirty">Unflirty</option>
            </select>

            <label htmlFor="hobby">Hobby traits:</label>
            <select
            id="hobby"
            name="hobby"
            multiple
            value={formData.hobby}
            onChange={handleChange}
            >
            <option value="artlover">Art Lover</option>
            <option value="bookworm">Book Worm</option>
            <option value="dancemachine">Dance Machine</option>
            <option value="foodie">Foodie</option>
            <option value="geek">Geek</option>
            <option value="loveoutdoors">Love Outdoors</option>
            <option value="maker">Maker</option>
            <option value="musiclover">Music Lover</option>
            <option value="recycledisciple">Recycle Disciple</option>
            </select>

            <label htmlFor="hobby">Hobby traits:</label>
            <select
            id="hobby"
            name="hobby"
            multiple
            value={formData.hobby}
            onChange={handleChange}
            >
            <option value="artlover">Art Lover</option>
            <option value="bookworm">Book Worm</option>
            <option value="dancemachine">Dance Machine</option>
            <option value="foodie">Foodie</option>
            <option value="geek">Geek</option>
            <option value="loveoutdoors">Love Outdoors</option>
            <option value="maker">Maker</option>
            <option value="musiclover">Music Lover</option>
            <option value="recycledisciple">Recycle Disciple</option>
            </select>

            <div className={styles.box}>
                <button className={styles.button} type="button" onClick={handleSubmit}>CREATE</button>
            </div>
        </form>

    </div>
  );
}

export default clonePage;