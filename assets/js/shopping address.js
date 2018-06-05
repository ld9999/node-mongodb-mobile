$(function() {
	$('.navs>div:first-child').click(function() {
		if ($(this).hasClass("back-icon")) {
			window.location.href = "personal.html";
		}
	})
	function judge() {
		$('.navs>div:first-child').addClass("return_back").removeClass("back-icon")
		$('.adds')[0].innerHTML = '保存'
		$("#save").addClass('saves').removeClass('adds')
		$('.address-msg').removeClass('am-hide')
		$('.addr_list').addClass('am-hide')
	}
	function saves() {
		$('.adds,.saves')[0].innerHTML = '新增'
		$('.saves').addClass('adds').removeClass('saves')
		$('.address-msg').addClass('am-hide')
		$('.addr_list').removeClass('am-hide')
	}
	$('.novel').on('click', '.adds', function() {
		judge();
		$("#addressList").hide()
		$("#addressForm").show()
	})
	$('.addrShow').on('click', '.edit_btn', function() {
		judge();
		$("#edit_list").show()
		$("#addressForm").hide()
	})
	$("#edit_list").on("click","#removeadd",function () {
		saves()
		$("#addressForm").show()
		$("#edit_list,#addressList").hide()
	})
	$('.novel').on('click', '.saves', function() {
		var realName = $('.addressUser').val();
		var phone = $('.mobile').val();
		var address = $('.addressPid option:checked').text() + $('.addressCid option:checked').text() + $('.addressDid option:checked').text() + $('.addressStreet').val();
		$('.navs>div:first-child').addClass("back-icon").removeClass("return_back")
		$('.nick_name').text("收件人：" + realName)
		$('.adrl_phone').text(phone)
		$('.add_detail').text(address)
		saves()
	})
	//返回上一页
	$('.return').click(function() {
		$("#addressList").hide()
		$("#addressForm").show()
		saves()
	})
	//设为默认地址按钮
	$('.set_wrap').on("click", ".switch_btn", function() {
		if($('.switch_btn').hasClass('switch_uncheck')) {
			$('.switch_btn').addClass('switch_check').removeClass('switch_uncheck')
			$('.default_note').show()
		} else {
			$('.switch_btn').addClass('switch_uncheck').removeClass('switch_check')
			$('.default_note').hide()
		}
	})
	$(".addressPid").change(function() {
		$('.province').hide()
	})
	$(".addressCid").change(function() {
		$('.city').hide()
	})
	$(".addressDid").change(function() {
		$('.area').hide()
	})
})