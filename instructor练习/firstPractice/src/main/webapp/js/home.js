$(".loginBtn").click(function(){
	var value=document.getElementById("loginBtn");
	if(value.innerHTML=="请登陆"){
		window.location.href="login.html";
	}
});

$(document).ready(function(){
	var str=window.location.hash;
	
	if(str){
		var strs=str.split("=");
		var passWord=strs[2];
		var loginName=strs[1].split("&")[0];
		
		$(".loginBtn").html(loginName);
		$.ajax({
			type : "post",
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			url : '/firstPractice/userController/selectUserByLoginNameAndPswd.do',
			async : false,
			data : {
				userLoginname:loginName,
				userPassword:passWord
			},
			dataType : 'json',
			success : function(msg) {
				if(msg.result ==true){						
					if(loginName===msg.user.userLoginname && passWord===msg.user.userPasswrd){
						var html="<tr><td>姓名</td><td>账号</td><td>密码</td></tr>";
						html+="<tr><td>"
							+msg.user.userName+"</td><td>"
							+msg.user.userLoginname+"</td><td>"
							+msg.user.userPasswrd+"</td><td>"
							+"</tr>";
						$(".content").html(html);
					}
					else{
						alert("账号密码错误！");
					}
				}else{
					alert(msg.message);
				}
			},error: function(msg){
			    alert("网络超时！");
			}
		});
	}
});