console.log("Witam ;)");

let przycisk = document.querySelector(".przycisk");
let zdj = document.querySelector(".zdj");
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

przycisk.addEventListener("click", () => {
    zdj.remove(); 
    przycisk.remove();
});

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
})