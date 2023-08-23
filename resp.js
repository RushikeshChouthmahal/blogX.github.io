

burger = document.querySelector(".burger")
navbar = document.querySelector(".responsive-h-nav")
leftnav = document.querySelector(".leftnav")
rightnav = document.querySelector(".rightnav")
blogx = document.querySelector(".container")

burger.addEventListener("click", ()=>{
    leftnav.classList.toggle("responsive-opt");
    rightnav.classList.toggle("responsive-opt");
    navbar.classList.toggle("responsive-h-nav");
    blogx.classList.toggle("remove");
})