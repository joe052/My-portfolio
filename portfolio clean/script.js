//nav button
const nav = document.querySelector(".fa-bars");
nav.addEventListener("click",function(){
    const ul = document.querySelector("header nav ul");
    ul.style.left = "0%"
})
const navback = document.querySelector(".fa-times-circle");
navback.addEventListener("click",function(){
    const ul = document.querySelector("header nav ul");
    ul.style.left = "-100%"
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
            body.style.background = "white"
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
//links 
const links = document.querySelectorAll("a")
links.addEventListener("mouseover",function(){
    links.style.color = "blue"
})