var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
document.getElementsByClassName('dice-image')[0].setAttribute("src","dices/dice"+randomNumber1+".png");
document.getElementsByClassName('dice-image')[1].setAttribute("src","dices/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
  document.getElementsByClassName('big-heading')[0].textContent="🚩 Player 1 Wins!";
}
else if (randomNumber2>randomNumber1) {
  document.getElementsByClassName('big-heading')[0].textContent="Player 2 Wins! 🚩";
}
else{
  document.getElementsByClassName('big-heading')[0].textContent="Draw!";
}
