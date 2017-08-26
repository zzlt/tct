// JavaScript Document
$(function(){
	$(".listT a:last").css("background","none");
	$("dl.food").hover(function(){
		$(this).addClass("sele");
	},function(){
		$(this).removeClass("sele");	
	});
});























