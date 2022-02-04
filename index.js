document.querySelector("button").addEventListener("click", roll);

function roll(){
    var randomNumber1 = Math.floor(6*Math.random()+1);
    var src1  = "images\\" + "dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", src1);

    var randomNumber2 = Math.floor(6*Math.random()+1);
    var src2  = "images\\" + "dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", src2);
 
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins"
        document.querySelector(".player1").innerHTML = "🚩 Player 1"
    }else if(randomNumber1 == randomNumber2){
        document.querySelector("h1").innerHTML = "Draw 📍"
    } 
    else{
        document.querySelector("h1").innerHTML = "Player 2 wins"
        document.querySelector(".player2").innerHTML = "Player 2 🚩"
    }
}
