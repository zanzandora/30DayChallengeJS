const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const hand = document.querySelector('.hand');
function setDate() {
    const date = new Date;
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let secondsDegrees= ((seconds / 60) * 360 ) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    let minutesDegrees= ((minutes / 60) * 360 ) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    let hoursDegrees= ((hours % 12) / 12) * 360 + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (secondsDegrees === 90){
        secondHand.classList.add('no-transition')
    }
    
    
}

setInterval(setDate, 1000);