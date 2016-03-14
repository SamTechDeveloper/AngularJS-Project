$(function() {
	var $orders = $('#orders');
	$.ajax({
		"type" : "GET",
		"url" : "api/orders.json",
		success: function(orders){
			console.log('success', orders);
			$.each(orders, function(i, order){
				$orders.append('<li>Name: '+ order.name +', Drink: '+ order.drink +'</li>');
			});
		}
	});
});