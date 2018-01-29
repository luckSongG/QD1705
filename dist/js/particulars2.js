define(["jquery", "cookie"], function($){
	var particulars2 = function(){
		
		$(".price_btn").on("click","#btn_02",function(){
				
				var first =$.cookie("#btn_02")==null? true : false;
				
				if(first){
//					$.cookie("")
				}
		})
		
		
		
		return "OK我的购物车"
	}
	return{
		particulars2:particulars2
	}
})
