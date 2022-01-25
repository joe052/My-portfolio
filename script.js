//nav button
const nav = document.querySelector(".fa-bars");
nav.addEventListener("click",function(){
    const ul = document.querySelector("header nav ul");
    ul.style.left = "0%"
})
const navback = document.querySelector(".fa-times-circle");
navback.addEventListener("click",function(){
    const ul = document.querySelector("header nav ul");
    ul.style.left = "-130%"
})

//dark mode
//new check button


document.querySelector("#checkbtn").addEventListener("click",function(){
    const check = document.querySelector("#checkbtn").checked;
    const moon = document.querySelector("#moon");
    if (check === true){
        function darkMode(){
            const body = document.querySelector("body")
            body.style.background = "#333"
            body.style.color = "white"
            const nav = document.querySelectorAll(".dark")
         nav.forEach(item =>{
             item.style.color = "white"
         })
         moon.classList.remove("fas");
         moon.classList.remove("fa-moon");
         moon.classList.add("far");
         moon.classList.add("fa-sun");
        }
        darkMode()
    }
    else{
        function darkMode(){
            const body = document.querySelector("body")
            body.style.background = "#e8f4f7"
            body.style.color = "#333"
            const nav = document.querySelectorAll(".dark")
         nav.forEach(item =>{
             item.style.color = "#333"
         })
         moon.classList.remove("far");
         moon.classList.remove("fa-sun");
         moon.classList.add("fas");
         moon.classList.add("fa-moon");
        }
        darkMode()
    }
})

const hello = document.querySelector(".landing h1")
const p1 = document.querySelector("#p1")
window.addEventListener("load", function(){
    hello.animate([
        {transform: 'translate(800px)'}
    ],{
        duration: 300,
        easing: 'ease-in',
        iterations: 1,
        delay: 0 ,
        direction: "normal",
        fill: "forwards"
    })
})
window.addEventListener('load', function(){
    var delay1 = 1000; //1 second
    var delay2 = 5000;
    var delay3 = 7500;
     setTimeout(function() {
         p1.textContent = "I am Tinega Collins"
}, delay1);
const p2 = document.querySelector("#p2")
setTimeout(function() {
    p2.textContent = "And this"
}, delay2);
const p3 =document.querySelector("#p3")
setTimeout(function() {
    p3.animate([
        {transform: 'scale(0)'},
        {transform: 'scale(.5)'},
        {transform : 'scale(1)'}
    ],{
        duration: 300,
        easing: 'ease-in',
        iterations: 1,
        delay: 0 ,
        direction: "normal",
        fill: "forwards"
    })
}, delay3);
})
window.addEventListener('scroll',()=>{
    let content = document.querySelector("#aboutMe");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    let allContent = document.querySelectorAll(".content");
    console.log(allContent)
    if (contentPosition< screenPosition){
        // allContent.classList.add('active');
    }
    ////buuuuuuuggggs
});
"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    // body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});