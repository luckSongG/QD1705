define(["jquery","cookie"],function($){
	var subject = function(){
		$("#header_02").click(function(){
			$(".header_01").animate({marginTop:-64},1000);
		})
//		$("#header_02").click(function(){
//			$(".title").animate({marginTop:0},2000);
//		})

		$(".box").mousemove(function(){
//			$(this).attr("class",".active");
			$(".index_show").css({
				display:"block"
			}).mouseout(function(){
				$(".index_show").css({
					display:"none"
				})
			})
		})
		
		
		$("#img").hover(function(){
			$(this).animate({
				height:160,
				width:320
			},1000)
			},function(){
				$(this).animate({
				width:298,
				height:150
				},1000)
		});
	
	$("#img1").hover(function(){
			$(this).animate({
				height:160,
				width:320
			},1000)
			},function(){
				$(this).animate({
				width:298,
				height:150
				},1000)
		});

	$("#img2").hover(function(){
			$(this).animate({
				height:160,
				width:320
			},1000)
			},function(){
				$(this).animate({
				width:298,
				height:150
				},1000)
		});
		
			$("#img3").hover(function(){
			$(this).animate({
				height:160,
				width:320
			},1000)
			},function(){
				$(this).animate({
				width:298,
				height:150
				},1000)
		});


		$(".bask_hove").hover(function(){
			$(this).animate({
				width:400,
				height:400
			},1000)
		},function(){
			$(this).animate({
				width:360,
				height:360
			},1000)
			$(this).finish();
		})



	
	$(function(){
		$.ajax({
			url:"../data/index.json",
			type:"GET",
			success:function(res){
				var html = ""
			for(var i = 0; i< res.length;i++){
				html += `
					<div class="box1">
						<img src="${res[i].img1}"/>
						<span><a href="">${res[i].id1}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img2}"/>
						<span><a href="">${res[i].id2}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img3}"/>
						<span><a href="">${res[i].id3}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img4}"/>
						<span><a href="">${res[i].id4}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img5}"/>
						<span><a href="">${res[i].id5}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img6}"/>
						<span><a href="">${res[i].id6}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img7}"/>
						<span><a href="">${res[i].id7}</a></span>
					</div>
					<div class="box1">
						<img src="${res[i].img8}"/>
						<span><a href="">${res[i].id8}</a></span>
					</div>					
				`
				}
			
				
			
			
			
			
			
			
			
				
				$(".index_02").html(html);
			}

		})
	})
	
	
	
	
	
	return "主体载入"
	}
	
	return{
		subject:subject
	}
	
	
})

