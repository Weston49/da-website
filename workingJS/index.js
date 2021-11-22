import { addScore } from "./firebase.js";

function clicked(){
    addScore(1);
}

function cooldownClicked(){
    //for now does nothing
}

window.cooldownClicked = cooldownClicked;
window.clicked = clicked;