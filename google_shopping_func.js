//load products.json
var data = require("./products.json")

//     ...ANSWERS START BELOW... 

// 1). getItemsArray(array)

var getItems = function() {
	return data.items;
}

// console.log(getItems());

// 2). getItemsByBrand(array, brand)

var getItemsByBrand = function(array, itemBrand) {
	var newItemsArray = [];
	for(var i = 0; i < array.length; i+=1) {
		if(array[i].product.brand === itemBrand) {
			newItemsArray.push(array[i]);
		}
	}
	return newItemsArray;
}

// console.log(getItemsByBrand(data.items, "Canon"));

// 3.) getItemsByAuthor(array, author) 

var getItemsByAuthor = function(array, author) {
	var newAuthorArray = [];
	for(var i = 0; i < array.length; i+=1) {
		if(array[i].product.author.name.split(" ")[0] === author) {
			newAuthorArray.push(array[i]);
		}
	}
	return newAuthorArray;
}

// console.log(getItemsByAuthor(data.items, "eBay"));

// 4.) getAvailableProducts(array)

var getAvailableProducts = function(array) {
	var newProductsArray = [];
	for(var i = 0; i < array.length; i+=1) {
		if(array[i].product.inventories[0].availability === "inStock") {
			newProductsArray.push(array[i]);
		}
	}
	return newProductsArray;
}

// console.log(getAvailableProducts(data.items));

// 5.) Use your functions

// 5.1)

console.log(getItemsByAuthor(getItemsByBrand(getItems(), "Nikon"), "eBay"));

// 5.2)

console.log(getItemsByBrand(getItems(), "Sony"));

// 5.3)

console.log(getAvailableProducts(getItemsByBrand(getItems(), "Sony")));



// BONUS FUNCTION 


// This function looks for any item that has a price greater than $1000, and returns it in a new array.

var expensiveItems = function(array) {
	var listPriceArray = [];
	for(var i = 0; i < array.length; i+=1) {
		if(array[i].product.inventories[0].price > 1000) {
			listPriceArray.push(array[i]);
		}
	}
	return listPriceArray;
}



console.log(expensiveItems(getItemsByBrand(data.items, "Canon")));















