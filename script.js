const btnham = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger_menu");
const acc = document.getElementById("accueil");
const port = document.getElementById("portfolio");
const abtme = document.getElementById("aboutme");
const compt = document.getElementById("competance");
const contact = document.getElementById("contact");

btnham.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});
acc.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});
port.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});
abtme.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});
compt.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});
contact.addEventListener('click' , () => {
    menu.classList.toggle("changed");
});

