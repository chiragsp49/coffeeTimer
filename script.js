const play = document.getElementById("play");

const reset = document.getElementById("reset");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

var interval;
var nowPlus25mins = addMinutes(new Date(),25);


play.addEventListener('click' , () => {
    nowPlus25mins = addMinutes(new Date(),25);
    interval = setInterval(startTimer,1000);
});

reset.addEventListener( 'click' , ()=> {
    if(interval!=undefined){
        clearInterval(interval);
    }
    var countDown = resetCountDownTime();
    displayTime(countDown);

});

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function startTimer(){
    var countDown = countDownTime();
    var minutesVal = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    var secondsVal = Math.floor((countDown % (1000 * 60)) / 1000);
    displayTime(countDown);
    if((minutesVal == 0)  && (secondsVal ==  0)){
        clearInterval(interval);
        alert("Take a break!");
    }
}

function resetCountDownTime(){
    var now = new Date().getTime();
    nowPlus25mins = addMinutes(new Date(),25);
    var countDown = nowPlus25mins - now;
    return countDown;
}

function countDownTime(){
    var now = new Date().getTime();
    var countDown = nowPlus25mins - now;
    return countDown;
}

function displayTime(countDown){
    var minutesVal = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    var secondsVal = Math.floor((countDown % (1000 * 60)) / 1000);
    var minutesString = minutesVal.toString(); 
    var secondsString = secondsVal.toString(); 
    if(minutesString.length < 2){
        minutesString = 0+minutesString;
    }
    if(secondsString.length < 2){
        secondsString = 0+secondsString;
    }
    minutes.innerHTML =  minutesString;
    seconds.innerHTML =  secondsString;
}