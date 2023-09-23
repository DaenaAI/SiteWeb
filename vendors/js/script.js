const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeMenu = document.querySelector(".close-menu")
const mainMenu = document.querySelector(".main-menu")

hamburgerMenu.addEventListener("click", () => {
    if (mainMenu.classList.contains("main-menu-show")) {
        mainMenu.classList.remove("main-menu-show")
    } else {
        mainMenu.classList.add("main-menu-show")
    }
})

closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("main-menu-show")
})

// document.addEventListener("DOMContentLoaded", () => {
//     setInterval(() => {
//         // console.log(window.innerWidth)
//         if (window.innerWidth > 990) {
//             mainMenu.classList.remove("main-menu-show")
//         }
//     }, 100);
// })