//顶部导航
$(function(){
	var $menu = $(".user-nav-wrapper .menu");
	var $submenu = $(".user-nav-wrapper .menu div .submenu");
	var $close_btn1 = $(".top_ad_wrapper .close-btn");
	var $close_btn2 = $(".user-nav-wrapper .sitemap .nav-list-wrapper .close-btn");
	var $top_ad = $(".top_ad_wrapper .top_ad");
	var timer1;
	$menu.mouseenter(function(){
		clearTimeout(timer1);
		var that = this;
		timer1=setTimeout(function(){
			$(that).addClass('active');	
			$(that).children(".submenu").stop().slideDown(100);
		},250);

	});
	$menu.mouseleave(function(){
		clearTimeout(timer1);
		$(this).removeClass('active');
		$(this).children(".submenu").stop().slideUp(100);
	});
	$close_btn1.click(function(){
		$(this).toggleClass("click").siblings("div").slideToggle(100);
	})
	$close_btn2.click(function(){
		$menu.removeClass('active');	
		$menu.children(".submenu").stop().slideUp(100);
	})
});

//搜索框
$(function(){
	var $q = $('#q');
	var $search_box = $('#search-box');
	var $search_box_span = $search_box.find('.search-box3 span');
	var $search_option = $("#search-option");
	var $close_btn = $("#search-option .title .closefont");
	
	$q.focus(function(){
		if ($q.val() != '') {
			$search_option.css('display','none');
		}else{
			$search_box.addClass('input_bukong');
			$search_option.css('display','block');
		}
	});

	$search_box_span.click(function(){
		$q.focus();
		$search_box.addClass('input_bukong');
		$search_option.css('display','block');
	});

	$q.blur(function(){
		if ($q.val() != '') {
			$search_box.addClass('input_bukong');
			$search_option.css('display','none');
		}else{
			$search_box.removeClass('input_bukong');
			$search_option.css('display','none');
		}
	});

	$q.bind('input',function(){
		if ($q.val() != '') {
			$search_box.addClass('input_bukong');
			$search_option.css('display','none');
		}else{
			$search_option.css('display','block');
		}
	});
	$close_btn.click(function(){
		$search_option.hide();
	});

});

//分类导航
$(function(){
	var $market_nav = $('#market-nav');
	var $market_nav_ul = $market_nav.find('ul');
	var $market_nav_lis = $market_nav.find('li');
	var $search_option = $("#search-option");
	var $detail = $('#detail');
	var market_nav_ul_top = $market_nav_ul.offset().top + 3;
	var timer2 = null;
	var wh_top;
	var isShow = 0;

	$(window).scroll(function(){
		if($(window).scrollTop() > market_nav_ul_top ){
			wh_top = $(window).scrollTop() - market_nav_ul_top;
		}else{
			wh_top = 0;
		}
	});
	$market_nav_ul.on('mouseenter', 'li' ,function(e){
	// $market_nav_ul.mouseenter(function(e) {
		console.log(e);
		clearTimeout(timer2);

		var that = this;
		if(0 == isShow){
			timer2 = setTimeout(function() {
				if($detail.css({"display":"block"})){
					$search_option.css({"display":"none"});
				}
				$detail.css({"display":"block"}).stop().animate({width:'show',top:34+wh_top},50);
				$(e.target).addClass('active').siblings().removeClass('active');
				isShow = 1;
				//clearTimeout(timer2);
			}, 200);
		}else{
			$detail.css({"display":"block"}).stop().animate({width:'show',top:34+wh_top},50);
			$(e.target).addClass('active').siblings().removeClass('active');
		}
	});
// $market_nav_ul.on('mouseleave', 'li' ,function(e){
	$market_nav.mouseleave(function(){
		clearTimeout(timer2);
		timer2 = setTimeout(function(){
			$detail.stop().animate({width:'hide',height:432,top:34+wh_top},100);
			$market_nav_lis.removeClass('active');
			clearTimeout(timer2);
		}, 200);
		isShow = 0;
	});

/*
	$market_nav_lis.mouseenter(function(e) {
		//console.log(e);
		clearTimeout(timer2);

		var that = this;
		if(0 == isShow){
			timer2 = setTimeout(function() {
				if($detail.css({"display":"block"})){
					$search_option.css({"display":"none"});
				}
				$detail.css({"display":"block"}).stop().animate({width:'show',top:34+wh_top},50);
				$(that).addClass('active').siblings().removeClass('active');
				isShow = 1;
				//clearTimeout(timer2);
			}, 200);
		}else{
			$detail.css({"display":"block"}).stop().animate({width:'show',top:34+wh_top},50);
			$(that).addClass('active').siblings().removeClass('active');
		}
	});

	$market_nav.mouseleave(function(){
		clearTimeout(timer2);
		timer2 = setTimeout(function(){
			$detail.stop().animate({width:'hide',height:432,top:34+wh_top},100);
			$market_nav_lis.removeClass('active');
			clearTimeout(timer2);
		}, 200);
		isShow = 0;
	});
	*/
});


//轮播图
$(function(){
	var s = new Slide('slider-wrapper');
	var $slider_wrapper = $('#slider-wrapper');
	var $box = $('#slider-wrapper .box-wrapper .box');
	var $lis = $box.find('li');
	var $btn = $('#slider-wrapper .btn-left,#slider-wrapper .btn-right');
	var colors = ['#ffd800', '#aa8978', '#74daff', '#efe5dc','#81d8e9','#f2016a'];
	$lis.each(function(index, el) {
		$(el).css('background-color', colors[index]);
	});
	$slider_wrapper.mouseenter(function(){
		$btn.css({'display':'block'});
	});
	$slider_wrapper.mouseleave(function(){
		$btn.css({'display':'none'});
	});
});

//右侧选项栏
$(function(){
	$applist = $('#app-list');
	$li = $applist.find('li');
	$li.mouseenter(function(){
		$(this).find('div').show();
	}).mouseleave(function(){
		$(this).find('div').hide();
	});
});

//楼层
$(function(){
	var b = new Slide('slider-wrap');
	var $slider_wrap = $('#slider-wrap');
	var $btn_lr = $('#slider-wrap .btn-left,#slider-wrap .btn-right');
	var $option_tab = $('#option-tab');
	var $option_tab_li = $option_tab.find('li');
	var $floor_main = $('#floor-main');
	var $maincontent = $floor_main.find('.maincontent');
	var $imghover = $maincontent.find('img');

	var $last_img = $('#last-img');

	var timer3 = null;

	$slider_wrap.mouseenter(function(){
		$btn_lr.css({'display':'block'});
	});
	$slider_wrap.mouseleave(function(){
		$btn_lr.css({'display':'none'});
	});

	$option_tab_li.mouseenter(function(e){
		var index = $(this).index();
		var that = this;
		clearTimeout(timer3);
		timer3 = setTimeout(function(){
			$(that).addClass('hover-font up-arr').siblings().removeClass('hover-font up-arr');
			$maincontent.eq(index).show().siblings('.maincontent').hide();
		},200);
	});
	$imghover.hover(function(){
		$(this).toggleClass('img-hover');
	})
});

