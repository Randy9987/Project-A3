console.log("JS file connected");

document.querySelector(".checkout-btn").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Proceeding to payment...");
});
