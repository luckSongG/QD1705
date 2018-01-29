define(["jquery","cookie"],function($){
	var carousel1 = function(){
		$(function(){
			$.ajax({
				url:"../data/index.json",
				type:"GET",
				success:function(res){
					var html = ""
				for(var i = 0;i < res.length;i++){
					html += `
							<div class="seller_1img">
						<div class="seller_2img">
							<img src="${res[i].img9}"/>
						</div>
						<div class ="seller_3img">
							<h4>法国赫柏林</h4>
							<span>瑞士芯，法国魂</span>
						</div>
					</div>
					<div class="seller_1img">
						<div class="seller_2img">
							<img src="${res[i].img10}"/>
						</div>
						<div class ="seller_3img">
							<h4>瑞士爱宝时</h4>
							<span>瑞士艺术制表大师</span>
						</div>
					</div>
					<div class="seller_1img">
						<div class="seller_2img">
							<img src="${res[i].img11}"/>
						</div>
						<div class ="seller_3img">
							<h4>美度</h4>
							<span>灵感印证永恒</span>
						</div>
					</div>		
					<div class="seller_1img">
						<div class="seller_2img">
							<img src="${res[i].img12}"/>
						</div>
						<div class ="seller_3img">
							<h4>瑞士迪沃斯</h4>
							<span>迪沃斯总裁新年送豪礼，9.9换购千元石英表</span>
						</div>
					</div>
					<div class="seller_1img">
						<div class="seller_2img">
							<img src="${res[i].img13}"/>
						</div>
						<div class ="seller_3img">
							<h4>潮流大牌聚集地</h4>
							<span>古驰MINI随心选</span>
						</div>
					</div>
					<div class="seller_1img">
						<div class="seller_2img">
							<img src="${res[i].img14}"/>
						</div>
						<div class ="seller_3img">
							<h4>瑞士迪沃斯</h4>
							<span>迪沃斯总裁新年送豪礼，9.9换购千元石英表</span>
						</div>
					</div>
					
					
					`
					}
				$(".seller_img").html(html);

				}
			})
		})

	return "接受到了"
	}
	
	return{
		carousel1:carousel1
	}
})