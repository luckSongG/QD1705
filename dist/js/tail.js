
	$(function(){
		$("#cash_01").mousemove(function(){
			$(".pic2").css({
				display:"none"	
			});
			$(".pic1").css({
				display:"block"	
			})
		})
//		$("#cash_01").mouseout(function(){
//			$(".pic1").css({
//				display:"block"
//			})
//			$(".pic1").css({
//				display:"block"
//			})
//		})
		
	$("#cash_02").mousemove(function(){
			$("#cash_01").css({
				border:"none",
				color:"#666",	
			});
			$(this).css({
				color:"black"
			})
			$("#cash").html("全球买表 国内保修")
		
			$(".pic1").css({
				display:"none"	
			})
			$(".pic2").css({
				display:"block"	
			})
			
		})
			$("#cash_02").mouseout(function(){
				$("#cash").html("关注领100现金券")
		})
	})
		

