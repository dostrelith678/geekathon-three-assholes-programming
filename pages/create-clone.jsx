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
        firstname:'',
        lastname:'',
        age:'',
        sex:'',
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
        selfies:[]
      });
    
    const handleChange = (e) => {
      const { name, options } = e.target;

      // Si l'élément est un select avec l'attribut "multiple"
      if (options) {
        const selectedValues = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value);
    
        // Mettre à jour l'état avec le tableau de valeurs
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: selectedValues,
        }));
      } else {
        // Si l'élément est un champ de texte normal
        const { value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
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

            <label htmlFor="pp">Upload a Profile Picture:</label>
            <input
              type="file"
              id="pp"
              name="pp"
              onChange={handleFileChange}
            />

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

            <label htmlFor="fistname">First Name:</label>
            <input
              type="text"
              id="fistname"
              name="fistname"
              value={formData.fistname}
              onChange={handleChange}
            />

            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
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

            <label htmlFor="sex">Sex:</label>
            <select
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            >
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>

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

            <label htmlFor="lifestyle">Lifestyle traits:</label>
            <select
            id="lifestyle"
            name="lifestyle"
            multiple
            value={formData.lifestyle}
            onChange={handleChange}
            >
            <option value="active">Active</option>
            <option value="adventurous">Adventurous</option>
            <option value="childislands">Child of Islands</option>
            <option value="childocean">Child of Ocean</option>
            <option value="freegan">Freegan</option>
            <option value="glutton">Glutton</option>
            <option value="greenfriend">Green Friend</option>
            <option value="kleptomaniac">Kleptomaniac</option>
            <option value="lactoseintolerant">Lactose intolerant</option>
            <option value="lazy">Lazy</option>
            <option value="materialistic">Materialistic</option>
            <option value="neat">Neat</option>
            <option value="overachiever">Overachiever</option>
            <option value="perfectionist">Perfectionist</option>
            <option value="rancher">Rancher</option>
            <option value="slob">Slob</option>
            <option value="vegetarian">Vegetarian</option>
            </select>

            <label htmlFor="social">Social traits:</label>
            <select
            id="social"
            name="social"
            multiple
            value={formData.social}
            onChange={handleChange}
            >
            <option value="animalenthusiast">Animal Enthusiast</option>
            <option value="bro">Bro</option>
            <option value="catlover">Cat Lover</option>
            <option value="doglover">Dog Lover</option>
            <option value="evil">Evil</option>
            <option value="familyoriented">Family Oriented</option>
            <option value="good">Good</option>
            <option value="hateschildren">Hates Children</option>
            <option value="horselover">Horse Lover</option>
            <option value="insider">Insider</option>
            <option value="jealous">Jealous</option>
            <option value="loner">Loner</option>
            <option value="loyal">Loyal</option>
            <option value="mean">Mean</option>
            <option value="noncommittal">Non Committal</option>
            <option value="outgoing">Outgoing</option>
            <option value="partyanimal">Party Animal</option>
            <option value="proper">Proper</option>
            <option value="selfabsorbed">Self-Absorbed</option>
            <option value="snob">Snob</option>
            <option value="sociallyawkward">Socially Awkward</option>
            </select>

            <label htmlFor="toddler">Toddler traits:</label>
            <select
            id="toddler"
            name="toddler"
            multiple
            value={formData.toddler}
            onChange={handleChange}
            >
            <option value="angelic">Angelic</option>
            <option value="charmer">Charmer</option>
            <option value="clingy">Clingy</option>
            <option value="fussy">Fussy</option>
            <option value="independent">Independent</option>
            <option value="inquisitive">Inquisitive</option>
            <option value="silly">Silly</option>
            <option value="wild">Wild</option>
            </select>


            <label htmlFor="infant">Infant traits:</label>
            <select
            id="infant"
            name="infant"
            multiple
            value={formData.infant}
            onChange={handleChange}
            >
            <option value="cautious">Cautious</option>
            <option value="sensitive">Sensitive</option>
            <option value="calm">Calm</option>
            <option value="intense">Intense</option>
            <option value="wiggly">Wiggly</option>
            <option value="sunny">Sunny</option>
            </select>

            <label htmlFor="selfies">Upload up to 7 selfies:</label>
            <input
              type="file"
              id="selfies"
              name="selfies"
              onChange={handleFileChange}
              multiple
            />

            <div className={styles.box}>
                <button className={styles.button} type="button" onClick={handleSubmit}>CREATE</button>
            </div>
        </form>

    </div>
  );
}

export default clonePage;