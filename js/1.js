// shopping-cart.js

// Define a shopping cart array to store items
var shoppingCart = [];

// Function to add an item to the shopping cart
function addToCart(productName, price) {
    var item = {
        name: productName,
        price: price
    };
    shoppingCart.push(item);
    updateCart();
}

// Function to remove an item from the shopping cart
function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCart();
}

// Function to update the cart's HTML display
function updateCart() {
    var cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear the current cart display

    var totalPrice = 0;

    shoppingCart.forEach(function (item, index) {
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        var itemName = document.createElement("span");
        itemName.textContent = item.name;
        cartItem.appendChild(itemName);

        var itemPrice = document.createElement("span");
        itemPrice.textContent = "$" + item.price.toFixed(2);
        cartItem.appendChild(itemPrice);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("btn", "btn-danger");
        removeButton.onclick = function () {
            removeFromCart(index);
        };
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);

        totalPrice += item.price;
    });

    // Display total price
    var totalContainer = document.getElementById("total");
    totalContainer.textContent = "Total: $" + totalPrice.toFixed(2);
}
