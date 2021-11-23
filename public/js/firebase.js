//!====================START of firebase connection================!//
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getAuth, getRedirectResult, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getDatabase, ref, set, onValue, get, child, push, update } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
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
try {
    firebase.initializeApp(firebaseConfig);
    document.getElementById("load").innerHTML = "Firebase connection successful";
} catch (e) {
    console.log(e);
}


// Initialize the FirebaseUI Widget using Firebase.
try {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
} catch (e) {
    console.log(e);
}
try {
    ui.start('#firebaseui-auth-container', {
        signInOptions: [{
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        }]
    });
} catch (e) {
    console.log(e);
}

try {
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
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
} catch (e) {
    console.log(e);
}

// The start method will wait until the DOM is loaded.
try {
    ui.start('#firebaseui-auth-container', uiConfig);
} catch (e) {
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
try {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
} catch (e) {
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
setTimeout(function () {
    try {
        if (firebase.auth().currentUser.displayName != null) {
            document.getElementById("username").innerHTML = "Welcome back " + firebase.auth().currentUser.displayName;
        }
    } catch (e) {
        console.log(e);
    }
}, 800);
//!====================END of Authentication setup================!//



//!=====================THE GAME STUFF============================!//
var cookies = 0;
var canclick = true;
function updateScore(c) {
    cookies = c;
    document.getElementById("scoreCount").innerHTML = "Cookies: " + c;
}

function updateInv(inv) {
    for (var i = 0; i < inv.length; i++) {
        for (var j = 0; j < inv[i].length; j++) {
            document.getElementById(i + "_" + j).innerHTML = inv[i][j];
        }
    }
}

function cookieCooldown() {
    document.getElementById("clicker").onclick = function () { cooldownClicked() };
    document.getElementById("clicker").innerHTML = "3";
    setTimeout(function () {
        document.getElementById("clicker").innerHTML = "2";
        setTimeout(function () {
            document.getElementById("clicker").innerHTML = "1";
            setTimeout(function () {
                document.getElementById("clicker").onclick = function () { clicked() };
                canclick = true;
                document.getElementById("clicker").innerHTML = "cookie";
            }, 1000);
        }, 1000);
    }, 1000);
}

export function addScore(amount) {
    if (canclick == true) {
        canclick = false;
        var newScore = cookies + amount;
        //console.log(newScore);
        update(ref(db, 'player_data/' + u.uid), {
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
}


setTimeout(function () {
    try {
        const score = ref(db, 'player_data/' + u.uid + '/score');
        onValue(score, (snapshot) => {
            cookies = snapshot.val();
            updateScore(cookies);
        });
    } catch (e) {
        console.log(e);
    }
}, 900);

setTimeout(function(){
    makePurchase(0, "_");
}, 1300);

var gInv, gInvKey;
export function makePurchase(cost, itemID) {
    if (cookies >= cost) {
        var newScore = cookies - cost;

        addToInv(itemID)

        setTimeout(() => {
            var inv= gInv;
            var invKey = gInvKey;
            update(ref(db, 'player_data/' + u.uid), {
                score: newScore
            }).then(() => {
                //updated score
            }).catch((error) => {
                console.log(error);
            });
            update(ref(db, 'player_data/' + u.uid + '/inv/' + invKey), {
                inv: inv
            }).then(() => {
                //updated inv 
            }).catch((error) => {
                console.log(error);
            });
            updateInv(inv);
        }, 800);

    } else {
        alert("not enough cookies");
    }
}
async function addToInv(itemID) {
    var inv = [];
    get(ref(db, 'player_data/' + u.uid + '/inv')).then((snapshot) => {
        if (snapshot.exists()) {
            //console.log(snapshot.val());
            inv = snapshot.val();
            var invKey = Object.keys(inv);
            //console.log(invKey);
            inv = Object.values(inv[invKey]["inv"]);
            //console.log(inv);
            var b = false;
            for (var i = 0; i < inv.length; i++) {
                for (var j = 0; j < inv[i].length; j++) {
                    if (inv[i][j] == "_") {
                        inv[i][j] = itemID;
                        b = true;
                        break;
                    }
                }
                if (b) {
                    break;
                }
            }
            if (b == false) {
                alert("inventory full");
            } else {
                //console.log("returning");
                gInv = inv;
                gInvKey = invKey;
            }
        } else {
            push(ref(db, 'player_data/' + u.uid + '/inv'), {
                inv: [["_", "_", "_", "_", "_", "_"], ["_", "_", "_", "_", "_", "_"], ["_", "_", "_", "_", "_", "_"]]
            }).then(() => {
                //console.log("inv created");
                addToInv(itemID);
            }).catch((error) => {
                console.log(error);
            });
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    //return new array with itemId in first open slot of inv
}



