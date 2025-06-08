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

const heartButtons = document.querySelectorAll(".heart-btn");
heartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    const popup = document.createElement("div");
    popup.className = "wishlist-popup";
    popup.textContent = "Item successfully added to wishlist";

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 5000);
  });
});
