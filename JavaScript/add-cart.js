document.addEventListener('DOMContentLoaded', function () {
    var cartIcon = document.getElementById('cart-icon');
    var cart = document.querySelector('.cart');
    var closeCart = document.getElementById('close-cart');
    var buyButton = document.querySelector('.btn-buy');

    var total = 0;

    cartIcon.addEventListener('click', function () {
        cart.classList.add('active');
    });

    closeCart.addEventListener('click', function () {
        cart.classList.remove('active');
    });

    buyButton.addEventListener('click', function () {

        console.log('Buy Now button clicked');
    });

    var addToCartIcons = document.querySelectorAll('.add-cart');
    addToCartIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            var productBox = icon.parentElement;
            var title = productBox.querySelector('.product-title').innerText;
            var price = productBox.querySelector('.price').innerText;
            var imageSrc = productBox.querySelector('.product-img').getAttribute('src');

            addProductToCart(title, price, imageSrc);

            updateTotal();
        });
    });

    function addProductToCart(title, price, imageSrc) {
        var cartContent = document.querySelector('.cart-content');
        var cartBox = document.createElement('div');
        cartBox.classList.add('cart-box');

        var numericPrice = parseFloat(price.replace(/[^\d.]/g, ''));

        var cartBoxContent = `
            <img src="${imageSrc}" alt="" class="cart-img">
            <div class="product-title-img-input">
            <div class="cart-product-title">${title}</div>
            <div class="cart-total">$${numericPrice}</div>
            <input type="number" value="1" class="cart-quantity">
            </div>
            <i class='bx bxs-trash-alt cart-remove'></i>
        `;

        cartBox.innerHTML = cartBoxContent;
        cartContent.appendChild(cartBox);

        cartBox.querySelector('.cart-remove').addEventListener('click', function () {
            cartBox.remove();
            updateTotal();
        });

        cartBox.querySelector('.cart-quantity').addEventListener('change', function () {
            updateTotal();
        });
    }

    function updateTotal() {
        var cartContent = document.querySelector('.cart-content');
        var cartBoxes = cartContent.querySelectorAll('.cart-box');
        var total = 0;

        cartBoxes.forEach(function (cartBox) {
            var cartTotalElement = cartBox.querySelector('.cart-total');
            var quantityElement = cartBox.querySelector('.cart-quantity');
            var price = parseFloat(cartTotalElement.innerText.replace('$', ''));
            var quantity = parseInt(quantityElement.value);

            var itemTotal = price * quantity;
            cartTotalElement.innerText = '₾' + itemTotal;

            total += itemTotal;
        });

        total = Math.round(total * 100) / 100;
        document.querySelector('.total-price').innerText = '₾' + total;
    }
});
