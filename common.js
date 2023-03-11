$(function(){
  $('#grid').masonry({
    // options
    itemSelector : '.item',
	isFitWidth: true,
    isAnimated: true,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

    $('.view-back a').each(function(index) {
	  			img = $(this).children('img').attr('src');
	  			$(this).css('background-image', 'url('+img+')').find('img').remove();			
	});

	
	$('.boxit').fancybox({openEffect : 'elastic', closeEffect	: 'elastic'});
	$('.boxiframe').fancybox({type:'iframe'});
	$('.tip').tipTip({delay: 0, maxWidth: "350px"});

	
	$('.item').hover(function(){
					$(".cover", this).stop().animate({top:'200px'},{queue:false,duration:300});
					$("img", this).transition({
						perspective: '180px',
						rotate: '5deg',
						scale: 1.1
					});
				}, function() {
					$(".cover", this).stop().animate({top:'301px'},{queue:false,duration:300});
					$("img", this).transition({
						perspective: '180px',
						rotate: '0deg',
						scale: 1
					});
				});	
	$('.double').hover(function(){
					$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
	
				}, function() {
					$(".cover", this).stop().animate({left:'-300px'},{queue:false,duration:300});
	
				});	
				
	$(".mp3").jmp3({
			backcolor: "FFFFFF",
			forecolor: "872303",
			showfilename: "false"
	});
	
	$(".view").click(function(){
		id = $(this).find('a:first').attr('href');
		$.fancybox({
        	href: id
    	});
			
		
	});
});

