const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');

setInterval(() => {
    findDate();
});

function findDate(){
    let currentTime = new Date();
    let christmassYear = currentTime.getFullYear();

    if(currentTime.getMonth() == 11 && currentTime.getDate() > 25){
        christmassYear += 1;
    }

    let christmassTime = new Date(christmassYear, 11, 25);
    let dateDiff = Math.floor(christmassTime - currentTime);
    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

    if(currentTime.getMonth() != 11 || (currentTime.getMonth() ==11 && currentTime.getDate() != 25)){
        DAYS = Math.floor(dateDiff/(1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff) % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff) % (1000 * 60 * 60)/(1000 * 60));
        SECONDS = Math.floor((dateDiff) % (1000 * 60)/1000);
    }
    // console.log(DAYS, HOURS, MINUTES, SECONDS);

    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}
function displayDate(d, h, m, s){
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
function setZero(timeValue){
    if(timeValue < 10){
        timeValue = "0" + timeValue;
    }
    return timeValue;
}