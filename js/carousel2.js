define(["jquery","cookie"],function($){
	var carousel2 = function(){
		$(function(){
			$.ajax({
				url:"../data/index1.json",
				type:"GET",
				success:function(res){
					var html = ""
					var html1= ""
				for(var i = 0;i < res.length;i++){
					html += `
					<div class="quality_bg">
						<div class="quality_img">
							<a href = "../html/productlist.html">
							<img src="${res[i].img1}"/>
							</a>
						</div>
						<div class="quality_span">
							<span class="quality_span01">全情投入，执为所爱</span>
						</div>
					</div>
					<div class="quality_bg">
						<div class="quality_img">
						<a href = "../html/productlist.html">
							<img src="${res[i].img2}"/>
							</a>
						</div>
						<div class="quality_span">
							<span class="quality_span01">天生顽固，唯我独行</span>
						</div>
					</div>
					<div class="quality_bg">
						<div class="quality_img">
						<a href = "../html/productlist.html">
							<img src="${res[i].img3}"/>
							</a>
						</div>
						<div class="quality_span">
							<span class="quality_span01">德式机械，精准人生</span>
						</div>
					</div>
					<div class="quality_bg">
						<div class="quality_img">
						<a href = "../html/productlist.html">
							<img src="${res[i].img4}"/>
							</a>
						</div>
						<div class="quality_span">
							<span class="quality_span01">终于品质，不忘初芯</span>
						</div>
					</div>
					
					<div class="quality_logo">
						<div class = "quality_logo1">
						<a href = "../html/productlist.html">
							<img src = "${res[i].img5}">
							</a>
						</div>
						<div class = "quality_logo1">
							<img src = "${res[i].img6}">
						</div>
						<div class = "quality_logo1">
							<img src = "${res[i].img7}">
						</div>
						<div class = "quality_logo1">
							<img src = "${res[i].img8}">
						</div>
						<div class = "quality_logo1">
							<img src = "${res[i].img9}">
						</div>
						<div class = "quality_logo1">
							<img src = "${res[i].img10}">
						</div>
					</div>
					
					`
					html1 += `
					<div class="index_banner">
						<a href = "#">
						<img src="${res[i].img11}"/>
						</a>
					</div>
					
					`
					}
				$(".quality").html(html);
				$(".index_banner").html(html1);

				}
			})
		})

	return "接受到了111"
	}
	
	return{
		carousel2:carousel2
	}
})