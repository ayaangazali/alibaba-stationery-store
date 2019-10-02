// shopping cart - saves to localStorage

function getCart(){
	var cart = localStorage.getItem("cart");
	if(cart == null){
		return [];
	}
	return JSON.parse(cart);
}

function saveCart(cart){
	localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id){
	var cart = getCart();
	// check if already in cart
	var found = false;
	for(var i=0;i<cart.length;i++){
		if(cart[i].id == id){
			cart[i].qty = cart[i].qty + 1;
			found = true;
		}
	}
	if(found == false){
		cart.push({id: id, qty: 1});
	}
	saveCart(cart);
	updateCartCount();
	alert("Added to cart!");
}

function removeFromCart(id){
	var cart = getCart();
	var newcart = [];
	for(var i=0;i<cart.length;i++){
		if(cart[i].id != id){
			newcart.push(cart[i]);
		}
	}
	saveCart(newcart);
	updateCartCount();
}

function clearCart(){
	localStorage.removeItem("cart");
	updateCartCount();
}

// count how many items total
function cartCount(){
	var cart = getCart();
	var count = 0;
	for(var i=0;i<cart.length;i++){
		count = count + cart[i].qty;
	}
	return count;
}

function updateCartCount(){
	$("#cartCount").text(cartCount());
}

// figure out the total price
function cartTotal(){
	var cart = getCart();
	var total = 0;
	for(var i=0;i<cart.length;i++){
		var p = getProduct(cart[i].id);
		if(p != null){
			total = total + (p.price * cart[i].qty);
		}
	}
	return total;
}

// render the cart table on checkout page
function renderCart(){
	var cart = getCart();
	if(cart.length == 0){
		$("#cartTable").html("<p>Your cart is empty.</p>");
		$("#cartTotal").html("");
		return;
	}
	var h = "<table>";
	h += "<tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>";
	for(var i=0;i<cart.length;i++){
		var p = getProduct(cart[i].id);
		var sub = p.price * cart[i].qty;
		h += "<tr>";
		h += "<td>"+p.name+"</td>";
		h += "<td>$"+p.price+"</td>";
		h += "<td>"+cart[i].qty+"</td>";
		h += "<td>$"+sub.toFixed(2)+"</td>";
		h += '<td><a href="javascript:void(0)" onclick="removeItem('+p.id+')">remove</a></td>';
		h += "</tr>";
	}
	h += "</table>";
	$("#cartTable").html(h);
	$("#cartTotal").html('<div class="total">Total: $'+cartTotal().toFixed(2)+'</div>');
}

function removeItem(id){
	removeFromCart(id);
	renderCart();
}

// update count when page loads
$(document).ready(function(){
	updateCartCount();
});
