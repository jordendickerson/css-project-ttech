const navBar = document.getElementById("nav-bar");
const yearSpan = document.getElementById("year");
const dateSpan = document.getElementById("date");

const date = new Date();

yearSpan.textContent = `${date.getFullYear()}`;
dateSpan.textContent = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;

const buyButton = document.getElementById("buy-button");

buyButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("You can't afford this.");
});
