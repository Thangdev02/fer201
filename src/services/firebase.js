// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import axios from "axios";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb2zx4vKL87p1AUq92BV1IXJn-Q4GRhQU",
    authDomain: "login-fer.firebaseapp.com",
    projectId: "login-fer",
    storageBucket: "login-fer.appspot.com",
    messagingSenderId: "472139879772",
    appId: "1:472139879772:web:a20220bf34e4ad2c16dd99",
    measurementId: "G-PF3961D42J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const API_URL = "https://670f94ee3e71518616588d3a.mockapi.io/user";

// Function to handle Google Login with automatic account selection
export const signInWithGoogle = () => {
    provider.setCustomParameters({
        prompt: "select_account" // Remove this line for automatic login without prompt
    });

    return signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const user = result.user;
            console.log("Google login successful:", user.displayName);
            console.log(auth.currentUser);
            return user; // Return the user object
        })
        .catch((error) => {
            console.error("Google login error:", error);
        });
};

export const signInWithEmailPassword = async (userName, password) => {
    try {
        const response = await axios.get(API_URL);
        const users = response.data;

        // Find the user in the response data
        const user = users.find(
            (u) => u.userName === userName && u.password === password
        );

        if (user) {
            console.log("Login successful:", user);
            return user; // Return the user object
        } else {
            throw new Error("Invalid username or password.");
        }
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Re-throw error to handle in the calling component
    }
};
