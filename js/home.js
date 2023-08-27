const menu = document.querySelector('.menu');

document.addEventListener("scroll", () => {
    var scrollY = window.scrollY;

    if (scrollY > 8) {
        console.log("scrolled");
        menu.classList.add("scrolled");
    } if (scrollY < 4) {
        console.log("not scrolled");
        menu.classList.remove("scrolled");
    }
})

