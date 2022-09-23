//date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

//Nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const linkClose1 = document.getElementById("nav-link1");
const linkClose2 = document.getElementById("nav-link2");
const linkClose3 = document.getElementById("nav-link3");
const linkClose4 = document.getElementById("nav-link4");

// show Nav
navBtn.addEventListener("click",() => {navbar.classList.add("showNav");});

// close nav
navClose.addEventListener("click",() => {navbar.classList.remove("showNav");});
// link close nav
linkClose1.addEventListener("click",() => {navbar.classList.remove("showNav");});
linkClose2.addEventListener("click",() => {navbar.classList.remove("showNav");});
linkClose3.addEventListener("click",() => {navbar.classList.remove("showNav");});
linkClose4.addEventListener("click",() => {navbar.classList.remove("showNav");});