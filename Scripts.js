/* Adaptar el código Script.js con algún patrón de diseño. 
   Se ha adaptado hacia el patrón de diseño Decorator
*/

(function () {

	'use strict';
	var sale = {};
	init();

	var productsCatalog = [

		new Product('111', 'Milk', 1.99),
		new Product('222', 'Beer', 2.99),
		new Product('333', 'Coke', 3.99),

	];

	function Product(sku, name, price) extends productsCatalog {

		this.sku = sku;
		this.name = name;
		this.price = price;
	}

	function Item(product, quantity) extends productsCatalog {

		this.product = product;
		this.quantity = quantity;
	}

	function Sale() extends productsCatalog {

		this.items = [];
		this.totals = 0;

		this.addProduct = function (product) {

			sale.items.push(product);
			this.updateTotals();
		}

		this.updateTotals = function () {

			this.totals = 0;
			for (var i = 0; i < this.items.length; i++) {
				this.totals += this.items[i].price;
				}
			}
	}

	function findProductBySKU(sku) extends Product {

		var product = false;
		for (var i = 0; i < productsCatalog.length; i++) {
			if (productsCatalog[i].sku == sku) {
				product = productsCatalog[i];
			}
		}
		return product;
	}
	
	function init() {

		var view = {};
		_view.captureButton = document.getElementById('capture');
		_view.skuInput = document.getElementById('sku');
		_view.itemsList = document.getElementById('items-list');
		_view.totals = document.getElementById('totals');

		_sale = new Sale();

		view.captureButton.addEventListener('click', function(event)) {
			var product = findProductBySKU(view.skuInput.value);
			if (product) {
				//add product to sale model:
				sale.addProduct(product);
				view.updateItemsListView(sale);

				//uptade totals in view:
				_view.totals.innerText = sale.totals.toFixed(2);

			}

			else {
				alert('Producto no encontrado');
			}
		}
	});

	_view.updateItemsListView = function (sale) {
		 //empty items list in view:
		 _view.itemsList.innerHTML = '';
		 //reverse array;
		 var reversedArr = sale.items;
		 reversedArr.reverse();

		 //update Items from current sale in view:
		 for (var i = 0; i < reversedArr.length; i++) {
		 	var element = document.createElement('h5');
		 	_element.innerHTML = sale.items[i].name;
		 	view.itemsList.appendChild(element);
		 }
	}
}

})();		 
