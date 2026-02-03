const carousel = document.getElementById("carousel");
const imgs = carousel.querySelectorAll("img");
let angle = 0;
let run = true;

imgs.forEach((img, i) => {
    img.style.transform = `rotateY(${i * 60}deg) translateZ(250px)`;
});

function rotate() {
    if (run) {
        angle += 0.4;
        carousel.style.transform = `rotateY(${angle}deg)`;
    }
    requestAnimationFrame(rotate);
}

carousel.addEventListener("mouseover", () => run = false);
carousel.addEventListener("mouseout", () => run = true);

rotate();