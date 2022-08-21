const play = document.getElementById("play");

const reset = document.getElementById("reset");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


var nowPlus25mins = addMinutes(new Date(),25);
var interval;


play.addEventListener('click' , () => {
    //alert("play");
    interval = setInterval(startTimer,1000);
    play.

});

reset.addEventListener( 'click' , ()=> {
    clearInterval(interval);   
    nowPlus25mins = addMinutes(new Date(),25);
    minutes.innerHTML =  25;
    seconds.innerHTML =  "00";
});

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function startTimer(){
    var now = new Date().getTime();
    var countDown = nowPlus25mins - now;
    var minutesVal = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    var secondsVal = Math.floor((countDown % (1000 * 60)) / 1000);
    if((minutesVal == 0)  && (secondsVal ==  0)){
        var countDown = nowPlus25mins - now;
        clearInterval(interval);
        alert("Take a break!");
    }
    minutes.innerHTML =  minutesVal;
    if(secondsVal.length < 2){
        secondsVal = 0+secondsVal;
    }
    seconds.innerHTML =  secondsVal;
}