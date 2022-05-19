function main(){
    let ansNum = Math.floor(Math.random() * 25) + 5;
    let ansTD = document.getElementById("answerColor");
    let selectTD = document.getElementsByTagName("td");

    let thisColor = 0;
    let rndRed = 0;
    let rndGreen = 0;
    let rndBlue = 0;
    let rndColorHex = 0;

    for(let i=5; i < selectTD.length; i ++){


        rndRed = Math.floor(Math.random()*35)+220;
        rndGreen = Math.floor(Math.random()*35)+220;
        rndBlue = Math.floor(Math.random()*35)+220;
        
        let rndColorHex = rgbToHex(rndRed,rndGreen,rndBlue);
        selectTD[i].style.backgroundColor = rndColorHex;
        
        if(i > 4){
            selectTD[i].addEventListener("click", scoreCheck)
        };

        if(i==ansNum){
            ansTD.style.backgroundColor = hexToRGB(rndColorHex);
            document.getElementById("ansColorShow").style.backgroundColor=rndColorHex;
            document.getElementById("ansColorShow").innerText = rndColorHex;
        }
    }

}

function scoreCheck(){
    let thisPoint = document.getElementById("thisPoint");
    let thisScore = document.getElementById("thisScore");
    thisPoint = thisPoint - 0;
    thisScore = thisScore - 0;
    let thisColor = this.style.backgroundColor;
    let ansColor = document.getElementById("answerColor").style.backgroundColor;

    let selected = document.getElementById("selectColorShow");
    selected.innerText = thisColor.toString(16);
}

function colorToHex(color){
    let hex = color.toString(16);
    if(hex.length == 1){
        return "0"+hex;
    }else{
        return hex;
    }
}

function rgbToHex(red, green, blue){
    return "#" + colorToHex(red) + colorToHex(blue) + colorToHex(green);
}

function hexToRGB(hex){
    let red = parseInt(hex[1]+hex[2],16);
    let green = parseInt(hex[3]+hex[4],16);
    let blue = parseInt(hex[5]+hex[6],16);

    return "rgb(" + red + ", " + green + ", " + blue;
}

window.addEventListener("load",main())