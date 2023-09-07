// Initialize the shopping cart array
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
    var cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = ""; // Clear the current cart display

    var totalPrice = 0;

    shoppingCart.forEach(function (item, index) {
        var cartItem = document.createElement("tr");

        var itemNameCell = document.createElement("td");
        itemNameCell.textContent = item.name;
        cartItem.appendChild(itemNameCell);

        var itemPriceCell = document.createElement("td");
        itemPriceCell.textContent = "$" + item.price.toFixed(2);
        cartItem.appendChild(itemPriceCell);

        var removeCell = document.createElement("td");
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "btn btn-danger";
        removeButton.onclick = function () {
            removeFromCart(index);
        };
        removeCell.appendChild(removeButton);
        cartItem.appendChild(removeCell);

        cartContainer.appendChild(cartItem);

        totalPrice += item.price;
    });

    // Display total price
    var totalContainer = document.getElementById("total");
    totalContainer.textContent = "Total: $" + totalPrice.toFixed(2);
}
