//nav button
const nav = document.querySelector(".fa-bars");
const ul = document.querySelector("header nav ul");
nav.addEventListener("click",function(){
    ul.style.left = "0%"
})
const navback = document.querySelector(".fa-times-circle");
navback.addEventListener("click",function(){
    const ul = document.querySelector("header nav ul");
    ul.style.left = "130%"
})
const windows = document.querySelector("#windows");
windows.addEventListener("click",function(){
    ul.style.left = "0%"
})
ul.addEventListener("click",function(e){
    if(e.target.className == "home2" || "about"  || "skills1" || "projects" || "contact"){
        ul.style.left = "130%"
    }
})
//dark mode
const mrMoon = document.querySelector("#moon");
mrMoon.addEventListener("click",()=>{
    const body = document.querySelector("body")
    body.classList.toggle("dark10000");
})
const nav1 = document.querySelector("#navigation")
nav1.addEventListener("click",function(e){
    if(e.target.className == "far fa-sun fa-2x"){
        moon.classList.remove("far");
        moon.classList.remove("fa-sun");
        moon.classList.remove("fa-2x");
        moon.classList.add("fas");
        moon.classList.add("fa-moon");
        moon.classList.add("fa-2x");
    }else if(e.target.className == "fas fa-moon fa-2x"){
        moon.classList.remove("fas");
        moon.classList.remove("fa-moon");
        moon.classList.remove("fa-2x");
        moon.classList.add("far");
        moon.classList.add("fa-sun");
        moon.classList.add("fa-2x");
    }
})

// window.addEventListener('load', function(){
    var delay1 = 1100; //1 second
    var delay2 = 5000;
    var delay3 = 8000;
     setTimeout(function() {
         p1.textContent = "I am Tinega Collins"
}, delay1);
const p2 = document.querySelector("#p2")
setTimeout(function() {
    p2.textContent = "And this"
}, delay2);
const p3 =document.querySelector("#p3")
setTimeout(function() {
    p3.textContent = "is My World"
},delay3);
// });
window.addEventListener("scroll",()=>{
    let content = document.querySelector(".content2");
    let contentposition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight;
    let img = document.querySelector(".content3");
    if(contentposition < screenposition){
       content.style.right = "0px"
       img.style.left = "0px";
    }else{
        content.style.right = "1200px"
        img.style.left = "1000px"
    }

})
const moonIcon = document.querySelector("#moon2")
moonIcon.addEventListener("click",()=>{
    const body = document.querySelector("body")
    body.classList.toggle("dark10000")
})
const downBar = document.querySelector("#downbar");
window.onscroll = function(e) {
    if(this.oldScroll > this.scrollY){
       downBar.style.opacity = "1"
    }
    else{
        downBar.style.opacity = "0"
    }
    this.oldScroll = this.scrollY;
  }
  ///new
  let content = document.querySelector("#navigation");
  let contentposition = content.getBoundingClientRect().top;
  console.log(contentposition)
  let screenposition = window.innerHeight;
  console.log(screenposition)
window.addEventListener("scroll",()=>{
    let content = document.querySelector(".skills11")
    let contentposition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight;
    const mask = document.querySelector(".masksup")
    var d2 = 1000;
    var d3 = 3000;
    setTimeout(function() {
        if(contentposition<screenposition){
            mask.classList.add("mask2")
            mask.classList.remove("mask5")
        }else{
            mask.classList.add("mask5")
            mask.classList.remove("mask2")
        }
    }, d2);
});