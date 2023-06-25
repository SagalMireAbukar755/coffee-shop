const button=document.querySelector(".button") 
const links =document.querySelector(".links")

button.addEventListener("click", ()=>{
    links.classList.toggle("active")
})