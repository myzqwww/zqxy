$(function(){


	$('.navbox .fenlei').hover(function(){
//	alert(123); 
		$('.erji').show().animate({'height':'400px'},200);
			 
		},function(){
		$('.erji').show().animate({'height':'0px'},200);
	})	
})