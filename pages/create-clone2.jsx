// 'use client'; // Remove this line, it's not necessary

import React from 'react';
import styles from '../styles/not-global.module.css';
import {useState} from 'react';
import {useRouter} from 'next/router';

const clonePage = () => {

    const [formData, setFormData] = useState({
        pp: null,
        username: '',
        description: '',
        firstname: '',
        lastname: '',
        age: '',
        sex: '',
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
        selfies: []
    });

    const handleChange = (e) => {
        const {name, options} = e.target;

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
            const {value} = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleFileChange = (e) => {
        const {name, files} = e.target;
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
            <div className={styles['top-section2']}>
                <h1>DOPPELCHAT</h1>
            </div>
            <div className={styles['profile-info']}>
                <img
                    className={styles['profile-image']}
                    src="https://i.pinimg.com/736x/58/7b/57/587b57f888b1cdcc0e895cbdcfde1c1e.jpg"
                    alt="Profile"
                />
                <p className={styles['twitter-handle']}>@DucksAreAwesome</p>
            </div>
            <div className={styles['login-section']}>
                <form className={styles.form}>
                    {/*description*/}
                    <div className={styles.box}>
                        <textarea
                            className={styles.textarea}
                            id="description"
                            name="description"
                            placeholder="Briefly describe your doppel"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    {/*relationship*/}
                    <div className={styles.box}>
                        <select className={styles.select}
                                placeholder="Select an option"
                                id="relationship"
                                name="relationship"
                                value={formData.relationship}
                                onChange={handleChange}
                        >
                            <option value="" disabled>Relationship status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="complicated">Complicated</option>
                        </select>
                    </div>
                    {/*job title*/}
                    <div className={styles.box}>
                        <textarea className={styles.textarea}
                            placeholder="Job title"
                            id="jobtitle"
                            name="jobtitle"
                            value={formData.jobtitle}
                            onChange={handleChange}
                        />
                    </div>
                    {/*company*/}
                    <div className={styles.box}>
                        <textarea className={styles.textarea}
                            placeholder="Company"
                            id="companyname"
                            name="companyname"
                            value={formData.companyname}
                            onChange={handleChange}
                        />
                    </div>
                    {/*background*/}
                    <div className={styles.box}>
                        <textarea style={{height: '150px'}}
                               className={styles.textarea}
                               placeholder="Background: Be as complete and detailed as possible about your background, romantic interests, tastes, social, professional, and family experiences, hobbies, aspirations, dream...etc."
                               type="description"
                               id="background"
                               name="background"
                               value={formData.background}
                               onChange={handleChange}
                        />
                    </div>
                    {/*emotional trait*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    {/*hobby traits*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    {/*lifestyle traits*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    {/*social traits*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    {/*toddler traits*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    {/*infant traits*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    {/*skills*/}
                    <div className={styles.box}>
                        <select className={styles.select} style={{height: '150px'}}
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
                    </div>
                    <div className={styles.box}>
                        <button className={styles.button} type="button" onClick={handleSubmit}>CREATE</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default clonePage;