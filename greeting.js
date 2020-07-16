/*
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}
    
function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hellow ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName()
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
*/

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

function saveName(text){
    localStorage.setItem("currentUser", text)
}

function paintGreeting(text){
    form.classList.remove("showing")
    greeting.classList.add("showing")
    greeting.innerText = `Hellow ${text}`;
}

function handleSubmit(event){
    event.preventDefault();
    paintGreeting(input.value)
    //input.value를 paintGreeting의 text로 준다는 말인가?
    saveName(input.value)
}

function askForName(){
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit)
}

function loadName(){
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser === null){
        askForName()
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();

