//!====================START of firebase connection================!//
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getAuth, getRedirectResult, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
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

try {
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
    var auth = getAuth();
    var analytics = getAnalytics(app);
    var db = getDatabase(app);
} catch (e) {
    console.error(e);
}

//!====================END of firebase connection====================!//

//!====================START of Authentication setup==============!//
try{
    firebase.initializeApp(firebaseConfig);
    document.getElementById("load").innerHTML = "Firebase connection successful";
}catch(e){
    console.log(e);
}


// Initialize the FirebaseUI Widget using Firebase.
try{
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
}catch(e){
    console.log(e);
}
try{
    ui.start('#firebaseui-auth-container', {
        signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        }]
    });
}catch(e){
    console.log(e);
}

try{
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'https://variety-gaming.web.app/index.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'https://variety-gaming.web.app/index.html',
        // Privacy policy url.
        privacyPolicyUrl: 'https://variety-gaming.web.app/index.html'
    };
}catch(e){
    console.log(e);
}

// The start method will wait until the DOM is loaded.
try{
    ui.start('#firebaseui-auth-container', uiConfig);
}catch(e){
    console.log(e);
}

setPersistence(auth, browserSessionPersistence).then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
});
try{
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}catch(e){
    console.log(e);
}
var u;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    u = user;
    const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
});
setTimeout(function(){
    try{
        if(firebase.auth().currentUser.displayName != null){
            document.getElementById("username").innerHTML = "Welcome back " + firebase.auth().currentUser.displayName;
        }
    }catch(e){
        console.log(e);
    }
}, 800);
//!====================END of Authentication setup================!//



//!=====================THE GAME STUFF============================!//
var data;
function updateScore(d){
    data = d;
    document.getElementById("scoreCount").innerHTML = d;
}

function cookieCooldown(){
    document.getElementById("clicker").onclick = function() {cooldownClicked()};
    document.getElementById("clicker").innerHTML = "3";
    setTimeout(function(){
        document.getElementById("clicker").innerHTML = "2";
        setTimeout(function(){
            document.getElementById("clicker").innerHTML = "1";
            setTimeout(function(){
                document.getElementById("clicker").onclick = function(){clicked()};
                document.getElementById("clicker").innerHTML = "cookie";
            }, 1000);
        }, 1000);
    }, 1000);
}

export function addScore(amount){
    var newScore = data + amount;
    set(ref(db, 'player_data/' + u.uid), {
      username: u.displayName,
      score: newScore
    })
    .then(() => {
        cookieCooldown();
    })
    .catch((error) => {
      console.log(error);
    });
}

setTimeout(function(){
    const score = ref(db, 'player_data/' + u.uid + '/score');
    onValue(score, (snapshot) => {
    const data = snapshot.val();
    updateScore(data);
    });
}, 900);






