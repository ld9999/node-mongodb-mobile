$(function () {
	$('.address-box').click(function () {
		window.location.href = 'shopping address.html';
	})
	$('.subOrder').click(function () {
		window.location.href = 'cashier desk.html';
	})
	$('.return').click(function () {
		window.location.href = 'classification.html';
	})
	$('.goods-list a').click(function () {
		window.location.href = 'details.html';
	})
	$('.buy-cart').click(function () {
		$('.goods-sku,.cons-bg').show()
		$('.action>span').addClass('sure').removeClass('confirm')
	})
	$('.buy-now').click(function () {
		$('.goods-sku,.cons-bg').show()
		$('.action>span').addClass('confirm').removeClass('sure')
	})
	$('.sku-title').on("click",".close",function () {
		$('.goods-sku,.cons-bg').hide()
	})
	$('.size-list>li').click(function () {
		if ($(this).hasClass('c')) {
			$(this).removeClass('c')
			$('.sku-title-addon').show()
		}else {
			$(this).addClass('c').siblings().removeClass('c')
			$('.sku-title-addon').hide()
		}
	})
	var timer = null;
	var flag = true;
	$('.gotop').click(function() {
		clearInterval(timer);
		timer = setInterval(function() {
			var scoll = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-scoll / 10);
			flag = true;
			document.body.scrollTop = document.documentElement.scrollTop = scoll + speed;
			if(scoll == 0) {
				clearInterval(timer);
			};
		}, 30);
	});
	window.onscroll = function() {
		var scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTopHeight >= 600) {
			$('.gotop').css('display', 'block');
		} else {
			$('.gotop').css('display', 'none');
		};
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};		
})
