function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$(".logo-carousel").owlCarousel({loop:!0,margin:90,autoplay:!0,autoplaySpreed:100,responsive:{0:{items:2},600:{items:4},1e3:{items:6}}}),$(window).scroll(function(){200<$(this).scrollTop()?$(".menu").addClass("sticky"):$(".menu").removeClass("sticky")}),$("a").on("click",function(o){var e;""!==this.hash&&(o.preventDefault(),e=this.hash,$("html,body").animate({scrollTop:$(e).offset().top},1e3,function(){window.location.hash=e}))})});
