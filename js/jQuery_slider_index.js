+function($){
	//滑动
	function Slide(id){
		this.ol = $('<ol></ol>');
		this.li;
		this.wrapper = $("#"+id);//获取整体
		this.onindex = 0;//自定义index
		this.uls = this.wrapper.children('.box-wrapper');//获取所有div
		this.btn_left = this.uls.children('.btn-left');//获取左边按钮
		this.btn_right = this.uls.children('.btn-right');//获取右边按钮
		this.box = this.uls.find('ul');//获取整个图片的div
		this.ulis = this.box.find('li');
		this.imgs = this.box.find('img');//获取a包含的所有图片
		this.footer = this.wrapper.children('.footer');//获取整个角标部分
		this.found();
		this.olis = this.footer.find('li');
		this.leftright();
		this.timer = null;
		this.start();	
		this.olis.eq(0).css("backgroundColor","#ff6600");
	}
	
	Slide.prototype.leftright = function(){
		var that = this ;
		//圆点点击事件
		for (var i = 0; i < this.olis.length; i++) {
			this.olis[i].index = i;
			this.olis[i].onmouseenter = function(){
				that.show(this.index);
			}
		}
		//左边按钮点击事件
		this.btn_left.click(function(){
			var index = (that.onindex-1+that.ulis.length) % that.ulis.length;
			that.show(index);
		});
		//右边按钮点击事件
		this.btn_right.click(function(){
			var index = (that.onindex+1) % that.ulis.length;
			that.show(index);
		});

		this.wrapper.mouseenter(function(){
			that.end();
		});
		this.wrapper.mouseleave(function(){
			that.start();
		})
	}

	Slide.prototype.show = function(yourindex){

		this.olis.css("backgroundColor","#000");
		this.olis.eq(yourindex).css("backgroundColor","#ff6600");

		this.ulis.stop().fadeOut();
		this.ulis.eq(yourindex).stop().fadeIn();

		//更新下标
		this.onindex = yourindex;
	}

	Slide.prototype.start = function(){
		var that = this;
		this.timer = setInterval(function(){
			that.btn_right.click();
		},2000);
	}
	Slide.prototype.end = function(){
		clearInterval(this.timer);
	}

	Slide.prototype.found =function(){
		var that = this;
		for (var i = 0; i < this.ulis.length; i++){
			if (this.ulis.length > 4) {
				this.li = "<li>"+(i+1)+"</li>"; 
			}else{
				this.li = "<li></li>"; 
			}
			this.ol.append(this.li);
		 };
		this.footer.append(this.ol);

	}

	window.Slide = Slide;
	
}( window.jQuery );
    
   