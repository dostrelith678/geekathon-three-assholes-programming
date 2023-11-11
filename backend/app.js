require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const admin = require("firebase-admin");
const cors = require('cors');
const serviceAccount = require("./serviceAccountKey.json");
const paypal = require('paypal-rest-sdk');  // Add PayPal library
const { OpenAI } = require('openai')

// Initialize ChatGPT
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL,
    credential: admin.credential.cert(serviceAccount)
};


firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Initialize PayPal
paypal.configure({
    // Your PayPal configuration
});

// Create Express app
const app = express();
const port = process.env.PORT || 3008;

// Middleware
app.use(bodyParser.json());
app.use(cors());


const getCloneSystemPrompt = async (cloneId) => {
    const snapshot = await db.ref(`aiClones/${cloneId}`).once("value")
    const cloneData = snapshot.val();

    return "Make Clone prompt"
}

// Routes

// Sign up a new user via Firebase
app.post('/signup', async (req, res) => {
    try {
        const { email, password, userType } = req.body;

        // Validate request data
        if (!email || !password) {
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
            influencer: userType,
            age: 0,
            idCard: "",
            subscription: false,
            authority: userType == true ? 1 : 0
        })

        // Send success response
        return res.status(201).json({ message: 'User created successfully', userId: userCredential.user.uid, influencer: userType});
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

        const userSnapshot = await db.ref(`/user/${user.uid}`).once('value');
        const userData = userSnapshot.val();

        // Return success response
        return res.status(200).json({ message: 'Login successful', user: user, data: userData });
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
app.post('/create-clone', async (req, res) => {
    try {
        const { pp, username, description, firstname, lastname, age, sex, relationship,
            jobtitle, companyname, background, emotionnal, hobby, lifestyle, social,
            toddler, infant, skill, favorite, selfies } = req.body;


        // Validate request data (you can customize this based on your requirements)
        if (!username || !sex) {
            return res.status(400).json({ error: 'Invalid request body' });
        }
        // Generate a unique clone ID for the AI clone
        const cloneId = db.ref('aiClones').push().key;

        // Store AI clone data in the Realtime Database
        const databaseRef = db.ref(`aiClones/${cloneId}`);
        await databaseRef.set({
            pp,
            username,
            description,
            firstname,
            lastname,
            age,
            sex,
            relationship,
            jobtitle,
            companyname,
            background,
            emotionnal,
            hobby,
            lifestyle,
            social,
            toddler,
            infant,
            skill,
            favorite,
            selfies
        });

        // Return success response
        return res.status(201).json({ message: 'AI clone created successfully', cloneId });
    } catch (error) {
        console.error('Error creating AI clone:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


// Send chat message to AI clone and get response
app.post('/get-chat-response', async (req, res) => {
    try {
        const { userMessage, cloneId } = req.body;

        // Validate request data
        if (!chatMessage || !userId) {
            return res.status(400).json({ error: 'Invalid request body' });
        }

        // Enrich the chatMessage with a pre-prepared prompt from the clone data (replace with your logic)
        const clonePrompt = await getCloneSystemPrompt(cloneId);

        // Make request to ChatGPT 4.0
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: clonePrompt },
                { role: 'user', content: userMessage }
            ],
            model: 'gpt-4', //model: 'gpt-4-0613'
        });


        // Extract the generated response from ChatGPT
        const generatedResponse = chatGptResponse.data.choices[0]?.text;

        // Return the generated response to the client
        return res.status(200).json({ generatedResponse });
    } catch (error) {
        console.error('Error getting chat response:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Train selfie model
app.post('/selfie-training', (req, res) => {
    // crop images to 512x512
    // realistic-vision-v51 <- model_id
})

// Generate AI selfie
app.post('/generate-selfie', (req, res) => {
    // Handle generating AI selfie using stablediffusion API
});

// Get all clones available
app.get('/get-all-clones', async (req, res) => {
    // Fetch data from Firebase and send it back to the client
    try {
        const snapshot = await db.ref('aiClones').once("value");
        const allClonesData = snapshot.val();

        return res.status(200).json({ allClonesData });
    } catch {
        console.error('Error fetching AI clones data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Handle PayPal payment
app.post('/paypal-payment', (req, res) => {
    // Handle PayPal payment and update user in Firebase
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
