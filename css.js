const secondHand = document.querySelector('.second-hand');   /document.querySelector('.second-hand'); is the element/
const minHand = document.querySelector('.min-hand');        /document.querySelector('.min-hand'); is the element/          
const hourHand = document.querySelector('.hour-hand');     /document.querySelector('.hour-hand'); is the element/

function setDate() {                             
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`; /ES6 styles to rotate second hand/

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${ minsDegrees}deg)`;  
    


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.tranform = `rotate(${hourDegrees}deg)`;
}
    setInterval(setDate, 1000); /This how often I want function to run/


setDate();
