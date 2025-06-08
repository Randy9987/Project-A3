console.log("JS file connected");

const closeBtn = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");

closeBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100%)";
});

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
    const isActive = btn.classList.toggle("active");

    let popup = document.querySelector(".wishlist-popup");

    if (!popup) {
      popup = document.createElement("div");
      popup.className = "wishlist-popup";
      document.body.appendChild(popup);
    }

    popup.textContent = isActive
      ? "Item successfully added to Wishlist"
      : "Item successfully removed from Wishlist";

    if (popup._timeout) {
      clearTimeout(pop._timeout);
    }

    popup._timeout = setTimeout(() => {
      popup.remove();
    }, 2000);
  });
});
