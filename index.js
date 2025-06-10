console.log("JS file connected");

//Search function

const searchToggle = document.getElementById("search-toggle");
const searchBox = document.getElementById("search-box");
const searchClose = document.getElementById("search-close");

searchToggle.addEventListener("click", (e) => {
  e.preventDefault();
  searchBox.classList.add("active");
});

searchClose.addEventListener("click", () => {
  searchBox.classList.remove("active");
});

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
const openBtn = document.getElementById("open-sidebar");
const closeBtn = document.getElementById("close-sidebar");

// Open sidebar
openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Close sidebar
const closeSidebar = () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// Toggle dropdowns
document.querySelectorAll(".dropdown-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.closest(".dropdown");
    dropdown.classList.toggle("open");
  });
});

const track = document.querySelector(".carousel-track");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

if (track && btnLeft && btnRight) {
  btnLeft.addEventListener("click", () => {
    track.scrollBy({ left: -320, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    track.scrollBy({ left: 320, behavior: "smooth" });
  });
}

document.querySelectorAll(".heart-btn, .icon-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => e.stopPropagation());
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
      clearTimeout(popup._timeout);
    }

    popup._timeout = setTimeout(() => {
      popup.remove();
    }, 2000);
  });
});

const unitPrice = 25; // your $ per metre
function changeQty(delta) {
  const input = document.getElementById("qty");
  let qty = parseFloat(input.value) + delta;
  qty = Math.max(0.1, Math.round(qty * 10) / 10); // floor at 0.1, one decimal
  input.value = qty.toFixed(1);
  document.querySelector(".total-price").textContent = `$${(
    qty * unitPrice
  ).toFixed(2)} AUD total price`;
}

document.querySelectorAll(".accordion-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement; // .accordion-item
    item.classList.toggle("active");
  });
});
