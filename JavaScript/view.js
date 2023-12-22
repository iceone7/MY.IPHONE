var products = document.getElementsByClassName("product-box");
var productDetails = document.getElementById("product-details");
var productImage = document.getElementById("product-image");
var productTitle = document.getElementById("product-title");
var productPrice = document.getElementById("price");

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function(event) {
    var clickedProduct = event.currentTarget;

    var imageSrc = clickedProduct.querySelector("img").src;
    var title = clickedProduct.querySelector("h2").textContent;
    var price = clickedProduct.querySelector("span").textContent;

    productImage.src = imageSrc;
    productTitle.textContent = title;
    productPrice.textContent = price;

    productDetails.classList.remove("hidden");
  });
}