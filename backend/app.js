require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");
const paypal = require('paypal-rest-sdk');  // Add PayPal library

// Initialize Firebase
// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.MEASUREMENT_ID,
//     databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL,
//     // credential: admin.credential.cert(serviceAccount)
// };

const firebaseConfig = {
    apiKey: "AIzaSyA-oy3O119zC-6wmSuXsYizfmd9H5-6ilw",
    authDomain: "dopplechat-388c3.firebaseapp.com",
    databaseURL: "https://dopplechat-388c3-default-rtdb.firebaseio.com",
    projectId: "dopplechat-388c3",
    storageBucket: "dopplechat-388c3.appspot.com",
    messagingSenderId: "762916518",
    appId: "1:762916518:web:70c5aef385a25efe818e67",
    measurementId: "G-Q8QDL6SL4F"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Initialize PayPal
paypal.configure({
    // Your PayPal configuration
});

// Create Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());

// Routes

// Sign up a new user via Firebase
app.post('/signup', async (req, res) => {
    try {
        const { email, password, userType } = req.body;

        // Validate request data
        if (!email || !password || !userType) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create user in Firebase
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

        // Initiate user in Realtime Database
        await db.ref(`/user/${userCredential.user.uid}`).set({
            username: "",
            email: email,
            emailVerification: false,
            verification: false,
            firstName: "",
            lastName: "",
            influencer: userType == "influencer" ? true : false,
            age: 0,
            idCard: "",
            subscription: false,
            authority: userType == "influencer" ? 1 : 0
        })


        // Send success response
        return res.status(201).json({ message: 'User created successfully', userId: userCredential.user.uid });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Login a user
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate request data
        if (!email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Sign in user with Firebase
        await firebase.auth().signInWithEmailAndPassword(email, password);

        // Get user information if needed
        const user = firebase.auth().currentUser;

        // Return success response
        return res.status(200).json({ message: 'Login successful', user: user });
    } catch (error) {
        console.error('Error during login:', error);

        // Check for specific error codes (if needed)
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Create an AI clone
app.post('/create-clone', (req, res) => {
    // Handle clone creation, Steamship API, and Firebase storage logic
});

// Handle PayPal payment
app.post('/paypal-payment', (req, res) => {
    // Handle PayPal payment and update user in Firebase
});

// Send chat message to AI clone
app.post('/send-chat-message', (req, res) => {
    // Handle sending messages to AI clone and responding to the client
});

// Generate AI selfie
app.post('/generate-selfie', (req, res) => {
    // Handle generating AI selfie using stablediffusion API
});

// Get all clones available
app.get('/get-all-clones', (req, res) => {
    // Fetch data from Firebase and send it back to the client
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
