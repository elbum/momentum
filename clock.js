try {
    var k = new Map();
    console.log("ES6 supported!!")
} catch (err) {
    console.log("ES6 not supported :(")
}


const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime(){
    console.log('gettime called')
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours < 10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes }:${seconds < 10 ? `0${seconds}`:seconds}` ;

}
function init(){
    //getTime();
    setInterval(getTime,1000);
    //getTime();

}

init();

