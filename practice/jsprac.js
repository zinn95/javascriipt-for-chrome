/*const zinn = {
    name:"zinn",
    age:99,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Along the god", "늑대소년"],
    favSinger:
      {
        name: ["Iu", "suzi", "blackpind[제니, 로사]"],
        age:["28", "26", "[25,24]"]
      }
      
 };

console.log(zinn.age);

zinn.age = "77";
console.log(zinn.age, zinn.gender, zinn.favMovies, zinn.favSinger.name[0], zinn.favSinger.age[0]);
console.log(zinn.isHandsome);*/
/*console.log( "Iu");
function sayHello(name, age){
  console.log(`Hello ${name} you are ${age} years old`);
}
//sayHello("iu", 28);

function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}
const greetZinn = sayHello("zinn", 28);
console.log(greetZinn);
*/
//const title = document.querySelector("#title");


/*console.log(title);

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";*/


//DOM(document object module)


//console.error("Fuck");

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS)
}
  
 // const currentClass = title.className;
 // console.log(currentClass);
/*  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(!hasClass){
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS)
  }
  console.log(title.className);
}
*/
function init(){
  title.addEventListener("click", handleClick);
}

init();

/*const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
  const currentClass = title.className;
  console.log(currentClass);
  if(currentClass !== CLICKED_CLASS){
    title.className = CLICKED_CLASS;
  } else {
    title.className = ""
  }
  console.log(title.className);
}
function init(){
  title.addEventListener("click", handleClick);
}

init();*/

/*const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#d35400";
function handleClick(){
  const currentColor = title.style.color;
  console.log(title.style.color);
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else{
    title.style.color = BASE_COLOR;
  }
  
}
  
function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}

init();
function handleOffline(){
  console.log("Goodbye");
}
function handleOnline(){
  console.log("Welcome back!")
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/
/*function handleResize(){
  console.log("I have been resized")

};
window.addEventListener("resize",handleResize);
*/

/*if("hi" === "hh"){
  console.log('hi');
} else if(1 === 2){
  console.log("ho");
} else {
  console.log("say hello!");
}

if(20 > 5 && "zinn" === "zinn"){
  console.log('yes')
}else {
  console.log('no')
}

//prompt("ask drinking");

//||
const age = prompt("How old are you");
console.log(age);
if(age >= 18 && age < 21){
  console.log("Good! You can drink. but you sholudn't too much drink");
} else if(age > 21){
  console.log("go ahead")
} else {
  console.log("sorry, You can't drink")
}
*/
