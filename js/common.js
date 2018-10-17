function common(){
	//搜索框
	$(".abc").click(function(){
		
		$(this).animate({
			width:"200px"
		},500);
		$(this).css({
			border:"1px solid skyblue",
			borderRight:"1px solid white"
		});
		$(".def").css({
			border:"1px solid skyblue",
			borderLeft:"1px solid white"
		});
	});
	
	//下拉菜单
	$(".box1 ul li:first-child").children("a:first-child").css({
		fontWeight:"600",
		lineHeight:"35px"
	});
	$(".box1 ul li:first-child").css({
		"margin-bottom":"25px",
		"margin-top":"14px"
	});
	$(".box1").css({
		background:"#ffffff",
		border:"1px solid #999999"
	});
	
	$(".nav-li").each(function(){
		var left1 = $(this).position().left;
		$(this).find(".box1").css({
			left:left1	
		});
		$(".box1").first().css({
			left:"0px"
		});
		$(this).hover(
			function(){
				$(this).find(".box1").fadeIn().css({
					display:"block"
				});
			},
			function(){
				$(this).find(".box1").fadeOut().css({
					display:"none"
				});
			}
		);
	});
	
	//右边固定盒子
	$(".box11").each(function(){
		$(this).hover(
			function(){
				$(this).css({
					background:"white"
				});
				$(this).children().css({
					color:"black"
				});
			},
			function(){
				
					$(this).css({
						background:"black"
					});
					$(this).children().css({
						color:"white"
					});
			}
		)
	})
	$(".box111").hover(
			function(){
				$(this).css({
					background:"white"
				});
				$(this).children().css({
					color:"black"
				});
			},
			function(){
				
					$(this).css({
						background:"red"
					});
					$(this).children().css({
						color:"white"
					});
			}
	)
//	返回顶部
	$(window).scroll(function(){
		let offSetTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(offSetTop>1000){
			$("#rigthBox .returnBox").css({
				display:"block"
			});
		}else{
			$("#rigthBox .returnBox").css({
				display:"none"
			});
		}
	});
	
//	切换登录方法
	$("#centerBox .clickLogin1").click(function(){
		$("#formId1").css({
			display:"none"
		});
		$("#formId2").css({
			display:"block"
		});
	});
	$("#centerBox .clickLogin2").click(function(){
		$("#formId2").css({
			display:"none"
		});
		$("#formId1").css({
			display:"block"
		});
	});
}

