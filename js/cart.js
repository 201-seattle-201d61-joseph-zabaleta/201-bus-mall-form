/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementsByTagName('tbody').innerHTML = null;
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  var tableBody = document.getElementsByTagName('tbody')[0];
  // var tableBody = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {

    var newProduct = cart.items[i];
    var test = console.log(test);
    console.log(newProduct);
    var rowEl = document.createElement('tr');
    var linkCell = document.createElement('td');
    var quantityCell = document.createElement('td');
    var itemCell = document.createElement('td');
    var buttonEl = document.createElement('button');

    buttonEl.innerHTML = ' X ';
    buttonEl.setAttribute('type', 'submit');
    buttonEl.setAttribute('name', i);
    linkCell.setAttribute('class', 'deleteItem');

    linkCell.appendChild(buttonEl);
    rowEl.appendChild(linkCell);

    quantityCell.textContent = newProduct.quantity;
    rowEl.appendChild(quantityCell);

    itemCell.textContent = newProduct.product;
    rowEl.appendChild(itemCell);

    tableBody.appendChild(rowEl);
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  var deleteItem = event.target.name;
  console.log(deleteItem);

  var currentCart = JSON.parse(localStorage.getItem('cart'));
  console.log(currentCart);

  delete currentCart[deleteItem];

  console.log(currentCart);
}

// This will initialize the page and draw the cart on screen
renderCart();
