var codes=document.getElementById("codes");
var codesCount=4;
var arry="";
getCodes();

function getCodes(){
	var worlds=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	arry="";
	for(var i=0;i<codesCount;i++){
		var j=Math.floor(Math.random()*61);
		arry+=worlds[j];
	}
	codes.value=arry;
}	

$(".loginBtn").click(function(){
	var code=document.getElementById("code").value.toLowerCase();
	var accountNumber=document.getElementById('accountNumber').value;
	var passWorld=document.getElementById('passWorld').value;
	if(!code || !accountNumber || !passWorld){
		alert("请输入完整信息！");
	}else if(code!=arry.toLowerCase()) {
		getCodes();
		alert("验证码错误！");
	}else{
//		var id=1;
		var userLoginname=document.getElementById("accountNumber").value;
		var userPassword=document.getElementById("passWorld").value;
		$.ajax({
			type : "post",
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
//			url : '/firstPractice/userController/selectByPrimaryKey.do',
			url : '/firstPractice/userController/selectUserByLoginNameAndPswd.do',
			async : false,
			data : {
//				id:id
				userLoginname:userLoginname,
				userPassword:userPassword
			},
			dataType : 'json',
			success : function(msg) {
				if(msg.result ==true){						
					if(userLoginname===msg.user.userLoginname && userPassword===msg.user.userPasswrd){
						alert("登陆成功！");
//						window.open("../html/home.html?userLoginname="+msg.user.userLoginname+"&userPasswrd="+msg.user.userPasswrd);
						window.location.href="../html/home.html#userLoginname="+msg.user.userLoginname+"&userPasswrd="+msg.user.userPasswrd;
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

$("#codes").click(function(){
	getCodes();
})

$("#enrollUser").click(function(){
	document.getElementById("loginCt").style.display="none";
	document.getElementById("enrollCt").style.display="block";
	document.getElementById("getPassWordCt").style.display="none";
});

$(".enrollBtn").click(function(){
	var userName=document.getElementById('userName').value;
	var accountNumbers=document.getElementById('accountNumbers').value;
	var passWorlds=document.getElementById('passWorlds').value;
	var rewritePassWorlds=document.getElementById('rewritePassWorlds').value;
	
	if(!userName || !accountNumbers || !passWorlds || !rewritePassWorlds){
		alert("请填写完整信息！");
	}else if(passWorlds!=rewritePassWorlds){
		alert("两次密码输入不同，请重新输入！");
	}else{
		alert("已成功注册新账号！");
		// //判断新建账号在数据库中是否已经存在
		// $.ajax({

		// });

		//回到登陆界面
		document.getElementById("loginCt").style.display="block";
		document.getElementById("enrollCt").style.display="none";
		document.getElementById("getPassWordCt").style.display="none";
	}
});

$(".exitBtn").click(function(){
	document.getElementById("loginCt").style.display="block";
	document.getElementById("enrollCt").style.display="none";
	document.getElementById("getPassWordCt").style.display="none";
});

$("#reGetPassWord").click(function(){
	document.getElementById("loginCt").style.display="none";
	document.getElementById("enrollCt").style.display="none";
	document.getElementById("getPassWordCt").style.display="block";
});

$(".getPassWordBtn").click(function(){
	var userNames=document.getElementById('userNames').value;
	var accountNumberss=document.getElementById('accountNumberss').value;

	if(!userNames || !accountNumberss){
		alert("请填写完整信息！");
	}else{
		alert("你的密码是：123456");

		// //从后台获取密码
		// $.ajax({

		// });

		//回到登陆界面
		document.getElementById("loginCt").style.display="block";
		document.getElementById("enrollCt").style.display="none";
		document.getElementById("getPassWordCt").style.display="none";
	}
});