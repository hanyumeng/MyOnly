//function $(str){
//	if(str.charAt(0)=="#"){
//		return document.getElementById(str.substring(1));
//	}else if(str.charAt(0)=="."){
//		return document.getElementsByClassName(str.substring(1));
//	}else{
//		return document.getElementsByTagName(str);
//	}
//}

//正则封装
//参数：
//要验证的字符串:str
//要验证的规则：type(email：表示邮箱；phone：表示手机号码)

//check("hello","email");

function check(str,type){
	switch(type){
		case "userName":var reg = /^[a-zA-Z_]\w{5,14}$/; break;
		case "email":var reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.com|\.cn|\.net)$/; break;
		case "phone":var reg = /^1[3-9]\d{9}$/;break;
		case "post":var reg =  /^[1-9]\d{5}$/;break;
		
		default:;
	}
	return reg.test(str);
}


