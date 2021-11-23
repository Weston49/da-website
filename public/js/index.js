import { addScore } from "./firebase.js";

function clicked(){
    addScore(1);
}

function cooldownClicked(){
    //for now does nothing
}

window.cooldownClicked = cooldownClicked;
window.clicked = clicked;

function random_hex_color_code(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};


function generateArt(size){
    if(size>90){
        alert("too high a number!")
    }else{
        document.getElementById("tbl").innerHTML = "";
        console.log("arting");
        var art = [];
        for(var i = 0; i < size; i++){
            var row = [];
            for(var j = 0; j < size; j++){
                row.push(random_hex_color_code());
            }
            art.push(row);
        }
        for(var i = 0; i < art.length; i++){
            var tr = document.createElement("TR");
            tr.id = "tr" + i;
            document.getElementById("tbl").appendChild(tr);
            for(var j = 0; j < art[i].length; j++){
                var td = document.createElement("TD");
                td.innerHTML = "";
                td.id = i + "_" + j;
                document.getElementById("tr" + i).appendChild(td);
            }
        }

        for(var i = 0; i < art.length; i++){
            for(var j = 0; j < art[i].length; j++){
                var id = "00";
                id = i + "_" + j;
                var color = "background-color:" + art[i][j] + ";";
                document.getElementById(id).style = color;
            }
        } 
    }
}

window.generateArt = generateArt;

function animateArt(size){
    if(size>90){
        alert("too high a number!")
    }else{
        var i = 1;
        var intervalID = setInterval(function(){
            generateArt(i);
            size--;
            i++;
            if(size == 0){
                clearInterval(intervalID);
            }
        }, 250);
    }
}

window.animateArt = animateArt;
