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
