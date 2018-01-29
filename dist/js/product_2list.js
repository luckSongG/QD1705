define(["jquery"],function($){
	var product_2list = function(){
			var aBtns = $("#play").find("ol").find("li");
		//获取 paly的 下的ol 和 li 标签
		var oUl = $("#play").find("ul");
		// 找到paly下的ul
		var aLi = oUl.find("li");
		//找到ul下的li
		var iMg = aLi.find("img")
		
		var iNow = 0;//显示图片的下标
		var timer = null; // 清除定时器
		
		aBtns.click(function(){
			iNow = $(this).index(); //让他获取 aBtns 的下标
			tab();
		})
		
		function tab(){
			aBtns.attr("class","");
			aBtns.eq(iNow).attr("class","active");
			
			oUl.animate({
				left: -1500 * iNow
			},500,function(){
				if(iNow == aBtns.size()){
					oUl.css({"left":"0"});
					iNow = 0;
				}
			})
		}


	function timerInner(){
			iNow++;
			tab();
			if(iNow == aBtns.size()){//获取 inow 的长度
				aBtns.eq(0).attr("class","active");
			}
		}
		//启动定时器
		timer =setInterval(timerInner,5000);




		return "不服！"
	}
	return{
		product_2list:product_2list
	}
})
