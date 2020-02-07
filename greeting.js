const form = document.querySelector('.js-form'),
    input = document.querySelector('input'),
    greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentUser'

const SHOWING_CN = 'showing';

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;


}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);


}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit',handleSubmit);
}
function loadName(){
    console.log('loadName() called');
    const currentUser = localStorage.getItem(USER_LS);
    console.log('currentUser',currentUser);
    if(currentUser === null){
        console.log('she is not');
        askForName();

    } else {
        // she is
        console.log('she is');
        paintGreeting(currentUser);


    }
}
function init(){
    loadName();

}

init();
