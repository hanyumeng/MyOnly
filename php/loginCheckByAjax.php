<?php
	header("Content-type:text/html;charset=utf-8");
	//接收数据
	$username = $_GET['username'];
//	$userpass = $_GET['userpass'];
	//处理（连接数据库，插入）
		//搭桥
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据连接失败！");
	}else{
		//选择目的地
		mysql_select_db("myhym",$conn);
		//传输数据（执行sql语句）
		$sqlstr="select * from hello where name='$username'";
		$table = mysql_query($sqlstr);
		mysql_close($conn);
		if(mysql_num_rows($table)==0){
			echo "登录失败！";
		}else{
			header("location:../index1.4（page1）.html");
		}
	}
?>