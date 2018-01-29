define(["jquery","cookie"],function($){
	var lu = function(){





		$(function(){
			$.ajax({
				url:"../data/shopping.json",
				type:"GET",
				success:function(res){
					var html = ""
				for(var i = 0; i < res.length;i++){
						html += `
							<div class="tudor_gouwu1">
					<div class="tudor_g">
						<img src="${res[i].img}"/>
					</div>	
						<div class="tudor_u">
						<p>￥21,730</p>
						<span>xxxxxxxxxxxxx</span>
						<ul>
							<li>加入收藏</li>
							<li class="sc_btn">加入购物车</li>
						</ul>
						</div>
					
						`
					}
				$("#tudor_gouwu").html(html);
				}
			})
			
			$(".tudor_gouwu1").on("click","sc_btn",function(){
				alert(1);
			})
			
			
		})



	$(function(){
		$.ajax({
			url:"../data/productlist.json",
			type:"GET",
			success:function(res){
//                 alert(res);
				var html = ""
				var html1 = ""
			for(var i = 0; i < res.length;i++){
				//
				html += `<div id ="tudor_img">
						<img class ="tudor_img01" src="${res[i].img3}"/>
					</div>
						<div class="tudor_ul">
						<ul>
							<li><a href="#">首页</a></li>
							<li><a href="#">商品</a></li>
							<li><a href="#">绅士腕表</a></li>
							<li><a href="#">名媛腕表</a></li>
							<li><a href="#">商务休闲</a></li>
							<li><a href="#">运动场合</a></li>
							<li><a href="#">钢带腕表</a></li>
							<li><a href="#">皮带腕表</a></li>
						</ul>
					</div>
						 
					<div id ="tudor_banner">
						<img src="${res[i].img23}"/>
					</div>
						 
						 
					<div class="tudor_li ">
						<div class="tudor_li1">
							<div class="tudor_li01">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img4}"/>
							</a>
							</div>
							<div class="tudor_li02">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img5}"/>
							</a>
							</div>
						</div>
						<div class="tudor_li2">
							<div class="tudor_li03">
								<a href = "../html/particulars.html"">
								<img src="${res[i].img6}"/>
								</a>
							</div>
							<div class="tudor_li04">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img7}"/>
							</a>
							</div>
							<div class="tudor_li05">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img8}"/>
							</a>
							</div>
							<div class="tudor_li06">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img9}"/>
							</a>
							</div>
							<div class="tudor_li07">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img10}"/>
							</a>
							</div>
							<div class="tudor_li08">
							<a href = "../html/particulars.html"">
								<img src="${res[i].img11}"/>
							</a>
							</div>
						</div>
					</div>
					
					<div class="tudor_banner01">
						<a href= "#">
						<img src="${res[i].img12}"/>
						</a>
					</div>
						
						<div class="tudor_banner02">
							<div class="tudor_banner03">
								<img src="${res[i].img13}"/>
							</div>
							<div class="tudor_banner04">
								<img src="${res[i].img14}"/>
							</div>
						</div>
						
										
						`
				}
				$("#tudor_img").html(html);

			}
		})
				
				
		$("#b1").mousemove(function(){
			$(".pull").css({
				display:"block"
			});
		}).mouseout(function(){
			$(".pull").css({
			display:"none"
			})
		})				
				
	})
		
		

    return "成功接收到组织传来的消息，我们完成啦"
	}
	return{
		lu:lu
	}
})
