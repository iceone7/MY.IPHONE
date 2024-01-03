var products = document.getElementsByClassName("product-box");
var productDetails = document.getElementById("product-details");
var productImage = document.getElementById("product-image");
var productTitle = document.getElementById("product-title");
var productPrice = document.getElementById("price");

var viewedProducts = [];

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function(event) {
    var clickedProduct = event.currentTarget;

    var imageSrc = clickedProduct.querySelector(".product-img").src;
    var title = clickedProduct.querySelector(".product-title").textContent;
    var originalPrice = clickedProduct.querySelector("del").textContent;
    var discountedPrice = clickedProduct.querySelector(".price").textContent;

    var viewedProduct = {
      imageSrc: imageSrc,
      title: title,
      originalPrice: originalPrice,
      discountedPrice: discountedPrice
    };

    viewedProducts.push(viewedProduct);

    productImage.src = imageSrc;
    productTitle.textContent = title;
    productPrice.innerHTML = `<del>${originalPrice}</del> ${discountedPrice}`;

    productDetails.classList.remove("hidden");
  });
}