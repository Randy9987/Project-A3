console.log("JS file connected");

//shopping cart

const cart = {
  items: [],
  count: 0,
  subtotal: 0,

  addItem: function (product) {
    this.items.push(product);
    this.updateCart();
  },

  updateCart: function () {
    this.count = this.items.length;
    this.subtotal = this.items.reduce((total, item) => total + item.price, 0);

    document.querySelector(".cart-count").textContent = this.count;
    document.querySelector(".item-count").textContent = `${this.count} ITEM(S)`;
    document.querySelector(
      ".subtotal-amount"
    ).textContent = `$${this.subtotal.toFixed(2)}`;

    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";

    this.items.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-variants">Color: ${item.color} Size: ${
        item.size
      }</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          </div>
        `;
      cartItemsContainer.appendChild(cartItem);
    });
  },
};

//update add to cart

document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector(".add-to-cart");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const qty = parseFloat(document.getElementById("qty").value);

      const product = {
        name:
          document.querySelector(".product-title")?.textContent || "Unnamed",
        price: qty * 25,
        color:
          document.querySelector(".swatch")?.style.backgroundColor || "N/A",
        size: "150cm",
        image: document.querySelector(".main-product-image")?.src || "",
      };

      cart.addItem(product);

      const notification = document.createElement("div");
      notification.className = "cart-notification";
      notification.textContent = "Item added to cart!";
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    });
  }
});

// Add cart toggle functionality
const cartToggle = document.getElementById("cartToggle");
const cartDropdown = document.querySelector(".cart-dropdown");

if (cartToggle && cartDropdown) {
  cartToggle.addEventListener("click", function (e) {
    e.preventDefault();
    cartDropdown.style.display =
      cartDropdown.style.display === "block" ? "none" : "block";
  });
}

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

const track = document.querySelector(".carousel-container .carousel-track");
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

const unitPrice = 25.0; //  25.00$ per metre

function changeQty(delta) {
  const input = document.getElementById("qty");
  let qty = parseFloat(input.value) + delta;
  qty = Math.max(0.1, Math.round(qty * 10) / 10); // Min 0.1, 1 decimal place
  input.value = qty.toFixed(1);

  // Update total price display
  const totalPrice = qty * unitPrice;
  document.querySelector(".total-price").textContent = `$${totalPrice.toFixed(
    2
  )} AUD total price`;
}

document.querySelectorAll(".accordion-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement; // .accordion-item
    item.classList.toggle("active");
  });
});

// product thumbnail

document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector(".main-product-image");
  const thumbnails = document.querySelectorAll(".product-thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // Replace the src and alt of the main image with the clicked thumbnail's src and alt
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });
  });
});
