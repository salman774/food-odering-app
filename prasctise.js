function removeitemsfromcart() {
  yourOrder.addEventListener("click", function (e) {
    console.log(e.target.dataset.remove);
  });
}
removeitemsfromcart();
