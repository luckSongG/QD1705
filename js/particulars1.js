define(["jquery","cookie"],function($){
	var particulars1 = function(){
		
//		$(".par_img").mousemove(function(){
//			$(this).find("img").attr("")
//		})
//		
		$(".par_img1").mousemove(function(){
			$(".par_watches1").find("img").attr("class","");
//			$(".par_img2").find("img").css("display", "block");
			
			$(".par_watches1").find("img").attr("class","par_to");
			$(".par_watches1").find("img").eq($(this).index()).css("display","block");
		}).mouseout(function(){
			$(".par_watches1").find("img").attr("class","");
//			$(".par_img2").find("img").css("display", "none");
			
			$(".par_watches1").find("img").attr("class","par_to");
			$(".par_watches1").find("img").eq($(this).index()).css("display","none");
		})
		
		
		
//		$(".par_block").mousemove(function(){
//			$(this).css({width:800,height:800});
//		}).mouseout(function(){
//			$(this).css({width:499,height:501});
//		})
//		
		
		
//	$(function(){
//		$.ajax({
//			url:"../data/par_son.json",
//			type:"GET",
//			success:function(res){
//				var html = ""
//				for(var i = 0; i < res.length;i++){
//					html += `
//					<img class ="${res[i].img}"/>
//			
//					`
//				}
//				$(".par_watches1").html(html);
//			}
//		})
//	})
//		

			
//		
		
		$(function(){
			$.ajax({
				url:"../data/particulars.json",
				type:"GET",
				success:function(res){
					var html = ""
					for(var i = 0; i < res.length;i++){
						html += `
						<div class="price_cc">
							<img src="${res[i].img}"/>
							<p>${res[i].name}</p>
						</div>
						`
					}
					$(".price_02").html(html)
				}

				})
			
$(".goods_box").on("click", ".sc_btn", function(){

				//进行抛物线运动
				ballMove.ballMove(this);


				//a:取出当前按钮对应的商品的id
				var id = this.id;
				//b:判断是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;

				if(first){ //第一次添加
					//设置cookie  [{id:id,num:1}]
					$.cookie("goods", "[{id:" + id + ",num:1}]", {
						expires: 7
					});
				}else{
					//c:判断之前是否有添加过该商品
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品


					//b:遍历所有的对象，判断id是否有相同的，如果有num++
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num++;

							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
							same = true;
							break;
						}
					}

					//e:是否有相同的商品 新增商品 数量是1
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
				}
				// alert($.cookie("goods"));
				sc_car();
				//为了阻止冒泡
				return false;
			})


			//<3>计算购物车数字
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){ //如果cookie存在
					var arr = eval(sc_str);
					var sum = 0; //用于累加的和
					for(var i in arr){
						sum += arr[i].num;
					}

					$(".sc_num").html(sum);
				}else{
					$(".sc_num").html(0);
				}
			}


			//<4>添加移入移出事件
			/*
				mouseover mouseout
				mouseenter/移入 mouseleave/移出
				【注】每次使用animate之前，最好前面调用一次stop
			*/
			$(".sc_right").mouseenter(function(){
				sc_msg();
				$(this).stop().animate({right: 0});
			});

			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({right: -270});
			});


			//<5>加载购物车中商品
			function sc_msg(){
				$.ajax({
					url: "../data/data1.json",
					type: "get",
					success: function(res){
						//a:找出所有cookie数据

						if(!$.cookie("goods")){
							//要将购物车内的商品清空
							$(".sc_right ul").html("");
							return;
						}

						var arr = eval($.cookie("goods"));
						var html = '';
						for(var i = 0; i < arr.length; i++){
							//用id当做下标取出数据
							html += `<li>
										<div class = "sc_goodsPic">
											<img src="${res[arr[i].id].img}" alt="">
										</div>
										<div class = "sc_goodsTitle">
											<p>手表</p>
										</div>
										<div class = "sc_goodsBtn">购买</div>
										<div class = "sc_goodsNum">
											商品数量:${arr[i].num}
										</div>
									</li>`
						}
						$(".sc_right ul").html(html);
					}
				})
			}

			//编写清空购物车的功能
			$(".goods_clear").click(function(){
				//a:清除cookie的缓存
				$.cookie("goods", null);
				sc_car();
			})


		
		
		})
	return "搞事请"
	}
	return{
		particulars1:particulars1
	}
})