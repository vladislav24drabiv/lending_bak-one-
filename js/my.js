/*опускаюсь до портфоліо*/
$(function(){
	$('.button_circle').on("click",function(){
		$('html,body').animate({
			scrollTop:$('.text-center').offset().top
		},1500);
	});
})
/* показую нужні іконки*/

var all = $('.all');
var web = $('.web');
var grafic = $('.grafic');
var flat = $('.flat');

all.on("click",function(){
	$('.foto_4, .foto_3, .foto_2').animate({opacity:1},1500,function(){
		all.css('color','#fff');
	});
});
web.on('click',function(){
	$('.foto_4, .foto_3').animate({opacity:0},1500,function(){
		web.css('color', 'white')			
	});
	   $('.foto_2').animate({opacity:1},1500);
    });

	grafic.on("click",function(){
		$(".foto_2, .foto_4").animate({opacity:0},1500,function(){
		grafic.css('color', 'white');	
		});
		$('.foto_3').animate({opacity:1},1500);
	});


	flat.on("click",function(){
		$('.foto_2, .foto_3').animate({opacity:0},1500,function(){
			flat.css('color','white');
		});
		$('.foto_4').animate({opacity:1},1500);
	
});



	// up to
	$('.up_to').on('click',function(){
		$('html, body').animate({scrollTop:$('.navbar').offset().top},2000);
	})
	//роблю зверху активну навігацію
$(function(){
	$('.nav_port').on("click",function(){
		$('html,body').animate({
			scrollTop:$('.text-center').offset().top
		},1500);
	});
})
$(function(){ 
 $('.nav_about').on('click',function(){
	$('html,body').animate({
		scrollTop:$('.about_us').offset().top
	},1500);
	})
})
$(function(){
	$('.nav_contact').on('click',function(){
		$('html,body').animate({
			scrollTop:$('.contact').offset().top

		},1500);
	})
})
// поступово показую блоки header
$(".we_build_brand").fadeIn(2000);
$(".h_text").fadeIn(3500);
$(".btn_radius").fadeIn(4500);
$(".button_circle").fadeIn(5500);

//поступово показую блоки portofolio
// $(".one").fadeIn(2000);
// $(".two").fadeIn(1000);
// $(".three").fadeIn(4000);
// $(".four").fadeIn(5000);
// $(".five").fadeIn(6000);
// $(".one").fadeIn(2000);
// $(".one").fadeIn(2000);
// $(".one").fadeIn(2000);
// $(".one").fadeIn(2000);