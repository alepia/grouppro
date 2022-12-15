if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeFromCart = document.getElementsByClassName("btn-danger");
  console.log(removeFromCart);
  for (var i = 0; i < removeFromCart.length; i++) {
    var button = removeFromCart[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addTocartButtons = document.getElementsByClassName("addbtn");
  for (var i = 0; i < addTocartButtons.length; i++) {
    var button = addTocartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var itemInfo = {
    title: shopItem.getElementsByClassName("item-name")[0].innerText,
    price: shopItem.getElementsByClassName("item-price")[0].innerText,
    imageSrc: shopItem.getElementsByClassName("item-image")[0].src,
  };
  console.log(itemInfo);
  addItemToCart(itemInfo);
}

function addItemToCart(itemInfo) {
  var cartRow = document.createElement("div");
  var cartItems = document.getElementsByClassName("cart-items");
  console.log(cartItems);
  cartItems.appendChild(cartRow);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

$(".product-row").on("click", ".addbtn", async (event) => {
  await axios.post("/api/products/cart",{product_id: event.target.id});
})