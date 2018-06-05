$('.return').click(function() {
	window.location.href = "index.html"
})
$('.order_list_list a').click(function() {
	window.location.href = "details.html"
})
//全选计算
$('#float_ctrl').on("click", ".box_btn label", function() {
	var price = $(this).parents('.cart_list').find('.shop_price_text');
	var goodsPrice = $(this).parents('.cart_list').find('.goods_price');
	var num = $(this).parents('.cart_list').find('.nums');
	if($('.cart_list').hasClass('on')) {
		$('.cart_list').removeClass('on').addClass('off')
		$('.cart_list .shop_price_text').each(function() {
			price.text(((goodsPrice.text()) * (num.val())).toFixed(2))
		})
	} else {
		$('.cart_list').addClass('on').removeClass('off')
		$('.cart_list').find('.shop_price_text').text(0 + ".00")
	}
	goodsNums()
	checkAll()
})
$('.order_list_list').on("click", ".delete_btn", function() {
	$(this).parents('.cart_list').remove()
	if($('.cart_list.off').length <= 0) {
		$('.total_price').text(0 + ".00")
	}
})
