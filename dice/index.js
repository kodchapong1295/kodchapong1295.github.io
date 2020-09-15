function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}
let ran1 = randomNumber();
let ran2 = randomNumber();

if(ran1 > ran2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"
}else if(ran1 < ran2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}

document.querySelectorAll("img")[0].setAttribute("src","/images/dice"+ran1+".png");
document.querySelectorAll("img")[1].setAttribute("src","/images/dice"+ran2+".png");