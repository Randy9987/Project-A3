console.log("JS file connected");

const track = document.querySelector(".carousel-track");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

btnLeft.addEventListener("click", () => {
  track.scrollBy({ left: -320, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  track.scrollBy({ left: 320, behavior: "smooth" });
});
