import React, {useState} from 'react';
import styles from '../styles/not-global.module.css';

export default function CreateClone2() {
    const [formData, setFormData] = useState({
        pp: null,
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
        selfies: null
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                        <input
                            className={styles.input2}
                            type="description"
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
                        <input
                            className={styles.input2}
                            placeholder="Job title"
                            type="text"
                            id="jobtitle"
                            name="jobtitle"
                            value={formData.jobtitle}
                            onChange={handleChange}
                        />
                    </div>
                    {/*company*/}
                    <div className={styles.box}>
                        <input
                            className={styles.input2}
                            placeholder="Company"
                            type="text"
                            id="companyname"
                            name="companyname"
                            value={formData.companyname}
                            onChange={handleChange}
                        />
                    </div>
                    {/*background*/}
                    <div className={styles.box}>
                        <input style={{height: '150px'}}
                               className={styles.input2}
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
                        <select
                            className={styles.select2}
                            id="emotionnal"
                            name="emotionnal"
                            multiple
                            value={formData.emotionnal} // This should be an array
                            onChange={handleChange}
                        >
                            <option value="" disabled>Emotional traits</option>
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

                    <div className={styles.box}>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="PASSWORD"
                        />
                    </div>
                    <div className={styles.box}>
                        <button className={styles.button} type="submit">
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles['forgot-password']}>
                <a href="#">Forgot My Password</a>
            </div>
        </div>
    );
}
