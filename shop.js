const buyButton = document.querySelector("buy-button");

buyButton.addEventListener("click", () => {
  alert("You can't afford this.");
  return false;
});
