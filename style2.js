var timer=60;
var hitrn=0;
var score=0;
var timerInterval; 
function makeBubble(){
    var clutter=""
for(var i=1;i<=330;i++){
    var rn=Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div>`;
}
document.querySelector('#pbtm').innerHTML=clutter
}
makeBubble()
function runTimer(){
  timerInterval= setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector('#timerValue').textContent=timer
    }
    else{
        endGame()
    }
  },1000)
}
runTimer()

function getNewHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector('#hitVal').textContent=hitrn
}
getNewHit()

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector('#scoreVal').textContent=score
}

function endGame() {
    clearInterval(timerInterval); 
    document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
}


document.querySelector('#pbtm').addEventListener('click',function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum===hitrn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
    else{
        endGame()
    }
})