// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw0YqHwuKxtRLdiTiuHI21WfowIPLkAJ0",
    authDomain: "variety-gaming.firebaseapp.com",
    projectId: "variety-gaming",
    storageBucket: "variety-gaming.appspot.com",
    messagingSenderId: "718736960834",
    appId: "1:718736960834:web:a1a966f56f2ac23e08acdb",
    measurementId: "G-H0SKVYB39P"
};



document.addEventListener("DOMContentLoaded", function () {
    try {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        document.getElementById("load").innerHTML = "Firebase connection successful"
    } catch (e) {
        console.error(e);
    }
});