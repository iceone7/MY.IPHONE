document.addEventListener('DOMContentLoaded', function () {
    var cartIcon = document.getElementById('cart-icon');
    var cart = document.querySelector('.cart');
    var closeCart = document.getElementById('close-cart');
    var buyButton = document.querySelector('.btn-buy');

    // Initialize total
    var total = 0;

    // Add click event for opening the cart
    cartIcon.addEventListener('click', function () {
        cart.classList.add('active');
    });

    // Add click event for closing the cart
    closeCart.addEventListener('click', function () {
        cart.classList.remove('active');
    });

    // Add click event for the "Buy Now" button
    buyButton.addEventListener('click', function () {
        // Implement your logic for handling the purchase
        // For now, let's just log a message
        console.log('Buy Now button clicked');
    });

    // Add click events for each "add to cart" icon
    var addToCartIcons = document.querySelectorAll('.add-cart');
    addToCartIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            // Get product details from the clicked product box
            var productBox = icon.parentElement;
            var title = productBox.querySelector('.product-title').innerText;
            var price = productBox.querySelector('.price').innerText;
            var imageSrc = productBox.querySelector('.product-img').getAttribute('src');

            // Call the addProductToCart function
            addProductToCart(title, price, imageSrc);

            // Update the total
            updateTotal();
        });
    });

    function addProductToCart(title, price, imageSrc) {
        var cartContent = document.querySelector('.cart-content');
        var cartBox = document.createElement('div');
        cartBox.classList.add('cart-box');

        // Remove the "$" sign and any non-numeric characters from the price
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

        // Add click event for the remove icon in the cart
        cartBox.querySelector('.cart-remove').addEventListener('click', function () {
            cartBox.remove();
            updateTotal();
        });

        // Add input change event for quantity
        cartBox.querySelector('.cart-quantity').addEventListener('change', function () {
            updateTotal();
        });
    }

    function updateTotal() {
        var cartContent = document.querySelector('.cart-content');
        var cartBoxes = cartContent.querySelectorAll('.cart-box');
        var total = 0;  // Initialize total here

        cartBoxes.forEach(function (cartBox) {
            var cartTotalElement = cartBox.querySelector('.cart-total');
            var quantityElement = cartBox.querySelector('.cart-quantity');
            var price = parseFloat(cartTotalElement.innerText.replace('$', ''));
            var quantity = parseInt(quantityElement.value);

            // Calculate and display the total price for each item
            var itemTotal = price * quantity;
            cartTotalElement.innerText = '$' + itemTotal;

            total += itemTotal;
        });

        total = Math.round(total * 100) / 100;
        document.querySelector('.total-price').innerText = '$' + total;
    }
});
