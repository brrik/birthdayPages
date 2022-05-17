function main(){
    let ansNum = Math.floor(Math.random() * 25) + 1;
    let ansTD = document.getElementById("answerColor");
    let selectTD = document.getElementsByTagName("td");

    let thisColor = 0;
    let rndRed = 0;
    let rndGreen = 0;
    let rndBlue = 0;
    let rndColorHex = 0;

    for(let i=1; i < selectTD.length; i ++){
        rndRed = Math.floor(Math.random()*35)+220;
        rndGreen = Math.floor(Math.random()*35)+220;
        rndBlue = Math.floor(Math.random()*35)+220;
        rndColorHex = "rgb(" + rndRed +"," + rndGreen + "," + rndBlue + ")".toString(16);

        selectTD[i].style.backgroundColor = rndColorHex;

        if(i==ansNum){
            ansTD.style.backgroundColor=rndColorHex;
        }
    };

}

function rgbToHex(){

}

window.addEventListener("load",main());