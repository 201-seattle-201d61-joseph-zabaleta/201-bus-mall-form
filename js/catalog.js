/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');

  for (var i = 0; i < Product.allProducts.length; i++) {
    var createOptionEl = document.createElement('option');
    createOptionEl.setAttribute('value', Product.allProducts[i].name);
    createOptionEl.innerHTML= Product.allProducts[i].name;
    selectElement.appendChild(createOptionEl);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var dropDownMenu = document.getElementById('items');
  var quantityMenu = document.getElementById('quantity');

  var product = dropDownMenu.options[dropDownMenu.selectedIndex].value;
  var quantity = quantityMenu.value;
  // cart.items.push(newItem);

  cart.addItem(product, quantity);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCountEl = document.getElementById('itemCount');
  var basketCount = cart.items.length;
  itemCountEl.innerHTML = basketCount;
  localStorage.setItem('basketCount', basketCount);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  document.getElementById('cartContents').innerHTML = null;

  // TODO: Add a new element to the cartContents div with that information
  var displayEl = document.getElementById('cartContents');
  var tableEl = document.createElement('table');
  var rowEl = document.createElement('tr');
  var cellEl = document.createElement('td');

  displayEl.appendChild(tableEl);
  tableEl.appendChild(rowEl);
  rowEl.appendChild(cellEl);

  for (var i = 0; i < cart.items.length; i++) {

    var newProduct = cart.items[i];

    rowEl = document.createElement('tr');
    rowEl.innerHTML = newProduct.quantity;
    tableEl.appendChild(rowEl);

    cellEl = document.createElement('td');
    cellEl.textContent = newProduct.product;
    rowEl.appendChild(cellEl);
  }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
