let gameOver = 0;

window.onload = function(){
    //alert("test");
    console.log("Loadしたよ");
    let tdList = document.getElementsByTagName("td");
    console.log(tdList.length);
    for(i=6;i<tdList.length;i++){
        tdList[i].addEventListener("click", scoreCheck)
    };
    main();
}

function main(){
    console.log("Mainにきたよ");
    let ansNum = Math.floor(Math.random() * (31-6)) + 6;
    let ansTD = document.getElementById("answerColor");
    let selectTD = document.getElementsByTagName("td");

    let rndRed = 0;
    let rndGreen = 0;
    let rndBlue = 0;

    let rndMain = 35;
    let rndPlus = 255;

    if(gameOver<3){
        //ゲームオーバー2回目まで
        rndMain = 35;
        rndPlus = 220;
    }else if(gameOver<5){
        document.getElementById("alertArea").innerText = "おや？ちょっと難しいみたいだね。少し難易度を下げようか！";
        rndMain = 55;
        rndPlus = 200;
    }else if(gameOver<7){
        document.getElementById("alertArea").innerText = "おや？ちょっと難しいみたいだね。もう少し難易度を下げようか！";
        rndMain = 100;
        rndPlus = 155;
    }else if(gameOver>10){
        document.getElementById("alertArea").innerText = "むずかしすぎたかな？いちばん簡単なモードにしたから頑張ってね！";
        rndMain = 255;
        rndPlus = 0;
    }

    for(let i=6; i < selectTD.length; i ++){

        rndRed = Math.floor(Math.random()*rndMain)+rndPlus;
        rndGreen = Math.floor(Math.random()*rndMain)+rndPlus;
        rndBlue = Math.floor(Math.random()*rndMain)+rndPlus;

        //デバッグ用の超簡単モード
        //rndRed = Math.floor(Math.random()*255);
        //rndGreen = Math.floor(Math.random()*255);
        //rndBlue = Math.floor(Math.random()*255);

        let rndColorHex = rgbToHex(rndRed,rndGreen,rndBlue);
        selectTD[i].style.backgroundColor = rndColorHex;

        if(i==ansNum){
            ansTD.style.backgroundColor = rndColorHex;
            document.getElementById("ansColorShow").style.backgroundColor=rndColorHex;
            document.getElementById("ansColorShow").innerText = hexToRGB(rndColorHex);
        };
    };
};

function scoreCheck(){

    console.log("スコアチェックにきたよ");

    let thisPoint = document.getElementById("thisPoint").innerText;
    let thisScore = document.getElementById("thisScore").innerText;

    thisPoint = thisPoint - 0;
    thisScore = thisScore - 0;

    let thisColor = this.style.backgroundColor;
    let ansColor = document.getElementById("answerColor").style.backgroundColor;

    console.log(thisPoint);
    console.log(thisScore);
    console.log(thisColor);
    console.log(ansColor);


    let selected = document.getElementById("selectColorShow");
    selected.innerText = thisColor;
    document.getElementById("selectedColor").style.backgroundColor = thisColor;
    selected.style.backgroundColor = thisColor;

    if(thisColor==ansColor){
        document.getElementById("alertArea").innerText = "★★★正解！★★★";
        document.getElementById("thisScore").innerText = thisScore + thisPoint;
        document.getElementById("thisPoint").innerText = 100;
        if(thisScore >= 1000){
            alert("ゲームクリア！！おめでとう！！");
            document.getElementById("question").style.display = "none";
            document.getElementById("cleared").style.display = "block";
        }
        console.log("正解からMainを呼ぶよ")
        main();

    }else{
        document.getElementById("alertArea").innerText = "ちがうなぁ・・・";
        document.getElementById("thisPoint").innerText = thisPoint - 10;
        if(thisPoint <= 0){
            alert("ゲームオーバー・・・再挑戦してね！");
            console.log("ゲームオーバーからMainをよぶよ")
            document.getElementById("alertArea").innerText = "見本と同じ色を選んでね！"
            document.getElementById("thisScore").innerText = 0;
            document.getElementById("thisPoint").innerText = 100;
            gameOver = gameOver+1;
            console.log("gameOver:"+gameOver);
            main(); 
        };
    };
}

function colorToHex(color){
    let hex = color.toString(16);
    if(hex.length == 1){
        return "0"+hex;
    }else{
        return hex;
    };
}

function rgbToHex(red, green, blue){
    return "#" + colorToHex(red) + colorToHex(blue) + colorToHex(green);
}

function hexToRGB(hex){
    let red = parseInt(hex[1]+hex[2],16);
    let green = parseInt(hex[3]+hex[4],16);
    let blue = parseInt(hex[5]+hex[6],16);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

