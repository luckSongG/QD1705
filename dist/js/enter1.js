define(["jquery","cookie"],function($){
	var enroll = function(){
		$(function(){
			$.ajax({
				url:"../data/enter.json",
				type:"GET",
				success:function(res){
					var html = ""
				for(var i = 0;i < res.length;i++){
					html += `<div class="vip_img05">
									<img src="${res[i].img}"/>
								</div>`
					}
				$(".vip_inp").html(html);

				}
			})
		})

	return "接受到了"
	}

	$("#vip_inp1").blur(function(){
		//blur 当离开焦点触发的事件
		// var oValue = $("#vipt_inp1").value.replace(/ /ig, "");
		// var oValue = $("#vipt_inp1");
		// $($("#vipt_inp1")).value = oValue;
		// if(!oValue.length){
		// 	$("#vip_span").css({dispaly:"block"});
		// }
		$("#vip_span").css({
			dispaly:"block"

		});
	})







	return{
		enroll:enroll
	}

})
