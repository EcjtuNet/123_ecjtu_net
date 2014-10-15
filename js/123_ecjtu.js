// JavaScript Document
var tab=1;
$(document).ready(function(){
	/*fixed导航条淡入淡出*/
	$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop()>145) {
		$("#fixed-header").fadeIn(100);
		}
		else {
		$("#fixed-header").fadeOut(100);
		}
		});
	});
	//点击搜日新
	$("#search_img a:first").click(function(){
		$(this).removeClass("searchRx").addClass('search_rx');
		$(this).parent().children("a:last").removeClass("searchBd").addClass('search_bd');
		$("div#rx").css("display","block");
		$("div#bd").css("display","none");
		tab=1;
		});
	//点击搜百度
	$("#search_img a:last").click(function(){
		$(this).removeClass("search_bd").addClass('searchBd');
		$(this).parent().children("a:first").removeClass("search_rx").addClass('searchRx');
		$("div#rx").css("display","none");
		$("div#bd").css("display","block");
		tab=0;
		});
	//左侧列表伪类
	$(".mainlist").mouseover(function(){
		$(this).css("background","#d5d5d5");
		$(this).children("li:even").removeClass("out").addClass('over');
		$(this).parent().children("h4").css("color","#3ebc20");
		$(this).parent().children(".col_sider_bottom").css("background","#3ebc20");
		});
	$(".mainlist").mouseout(function(){
		$(this).css("background","#f4f4f4");
		$(this).children("li:even").removeClass("over").addClass('out');
		$(this).parent().children("h4").css("color","#218ead");
		$(this).parent().children(".col_sider_bottom").css("background","#218ead");
		});
	//右侧列表伪类
	$(".siderlist").mouseover(function(){
		$(this).css("background","#d5d5d5");
		$(this).children("li:odd").removeClass("out").addClass('over');
		$(this).parent().children("h4").css("color","#3ebc20");
		$(this).parent().children(".right_sider_bottom").css("background","#3ebc20");
		});
	$(".siderlist").mouseout(function(){
		$(this).css("background","#f4f4f4");
		$(this).children("li:odd").removeClass("over").addClass('out');
		$(this).parent().children("h4").css("color","#218ead");
		$(this).parent().children(".right_sider_bottom").css("background","#218ead");
		});
	});
/*fixed导航条google搜索*/	
function search_google()
{
	value=document.getElementById("text-search").value;
	var link="http://www.google.com.hk/#newwindow=1&q="+value;
		window.open(link);
}
/*搜百度、搜日新*/
function go()
{
	value=document.getElementById("search_text").value;
	if (tab==1)
	{
		var link="http://www.baidu.com/s?si=ecjtu.net&cl=3&ct=2097152&tn=baidulocal&word="+value;
		window.open(link);
	}
	else
	{
		var link="http://www.baidu.com/s?wd="+value;
		window.open(link);
	}
}
