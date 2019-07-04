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

// update count when page loads
$(document).ready(function(){
	updateCartCount();
});
