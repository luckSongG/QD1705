define(["jquery","cookie"],function($){
	var carousel3 = function(){
		$(function(){
			$.ajax({
				url:"../data/index2.json",
				type:"GET",
				success:function(res){
					var html = ""
					var html1 = ""
				for(var i = 0;i < res.length;i++){
					html += `
							<div class="mido_1">
								<div class = "mido_2">
									<div class="mido_3">
										<img src="${res[i].img}" alt="" />
									</div>
									<div class="mido_4">
										<h5>${res[i].name}</h5>
										<p>${res[i].pinpai}</p>
									</div>
								</div>
							</div>	
					`			
				}
				$(".mido").html(html);
				}
			})
		})

	return "连接"
	}
	
	return{
		carousel3:carousel3
	}
})


					
