$(document).ready(function() {
	
	/* scroll */
	$("a[href^='#']:not([data-fancybox])").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* close popup */
	$("a.close_popup").click(function(){
		$.fancybox.close();
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	});

	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	/*fancybox settings*/
	$('[data-fancybox]').fancybox({
		type : 'inline',
		autoFocus: false,
		touch: false,
		animationDuration: 500
	});

	$(".prod_item .description .button").click(function(){
		var prod_name = $(this).siblings(".text").children(".prod_name").text();
		var prod_img = $(this).parent().siblings(".img").find("img:last-child").attr("src");
		var prod_description = $(this).siblings(".text").children(".prod_description").html();
		var prod_price = $(this).siblings(".text").children(".price").html();
		$(".popup .prod_name span").text(prod_name);
		$(".popup .prod_description").html(prod_description);
		$(".popup .prod_price").html(prod_price);
		$(".popup img").attr("src", prod_img);
		$("input[name=comment]").val(prod_name);
	});

	$('.order').click(function (e) {
		var articul = $(this).parent().find('.prod_name').text(); //получаем название товара
		$("input[name='comment']").val(articul); // вставляем название в input
	});
});


$(window).on("load", function(){

	$('.reviews').owlCarousel({
		items: 1,
		loop:true,
		autoWidth: true,
		mouseDrag: true,
		pullDrag: true,
		center: true,
		autoHeight: true,
		nav: true,
		navText: "",
		dots: true
	});

	$('.result_list').owlCarousel({
		items: 1,
		loop:true,
		autoWidth: true,
		mouseDrag: true,
		pullDrag: true,
		center: true,
		autoHeight: true,
		nav: true,
		navText: "",
		dots: true,
		autoplay: true,
		autoplayTimeout: 2000
	});

});


// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("cartModal");
    var btn = document.querySelector(".basket");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        setTimeout(function() {
            modal.style.width = "100%";
        }, 10); // небольшой таймаут для плавного перехода
    }

    span.onclick = function() {
        modal.style.width = "0";
        setTimeout(function() {
            modal.style.display = "none";
        }, 300); // таймаут равен transition времени в CSS
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.width = "0";
            setTimeout(function() {
                modal.style.display = "none";
            }, 300);
        }
    }
});
