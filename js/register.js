


define(["jquery","cookie"],function($){
	var main = function(){
//		$(document).click(function(){
//			alert("register");
//		})
	$(function(){
		$.ajax({
			url:"../data/register.json",
			type:"GET",
			success:function(res){
//                 alert(res);
				var html = ""
			for(var i = 0; i < res.length;i++){
				//
				html += `<div class="enter_02">
			<img src="${res[i].img1}">
			<div class="enter_10">
				<div class="inp_1">
					<ul>
						<li><a href="#">会员登录</a></li>
						<li><a href="#">扫码登录</a></li>
					</ul>
				</div>
				<div class="inp_2">
					<input type="text" placeholder="手机号码" name="" id="" value="" />
					<input type="text" placeholder="图形验证码" name="" id="" value="" />
					<img src="${res[i].img2}" class = "img_1" alt = "验证码"></img>
					<input type="text" placeholder="短信验证码" name="" id="" value="" />
					<div class="inp_3">
						获取验证码
					</div>
					<input type="button" name="" id="" value="立即登录" />
				</div>
				<div class="inp_4">
					<div><a href="#">免费注册</a></div>
					<div class="inp_5"><a href="#">账号密码&nbsp;&nbsp;|&nbsp;&nbsp;社交登录</a></div>
				</div>
			</div>
		</div>`
					}
				$(".enter_02").html(html);
			}
		})
		
		$(".enter_02").on("click",".img_1",function(){
			$(".img_1").click(function(){
				window.location.reload();
			})
		})
		
		
	})


    return "成功接收到组织传来的消息，我们完成啦"
	}
	return{
		main:main
	}
})
