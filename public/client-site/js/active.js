(function($){"use strict";var browserWindow=$(window);browserWindow.on("load",function(){$("#preloader").fadeOut("slow",function(){$(this).remove();});});if($.fn.owlCarousel){var heroSlide=$(".hero-slides");heroSlide.owlCarousel({items:3,margin:30,loop:true,nav:false,dots:false,autoplay:true,autoplayTimeout:5000,smartSpeed:1000,autoplayHoverPause:true,responsive:{0:{items:1},768:{items:2},992:{items:3}}});var welcomeSlide=$(".welcome-slides");welcomeSlide.owlCarousel({items:1,margin:0,loop:true,nav:false,dots:false,autoplay:true,autoplayTimeout:8000,smartSpeed:1000,autoplayHoverPause:true});welcomeSlide.on("translate.owl.carousel",function(){var slideLayer=$("[data-animation]");slideLayer.each(function(){var anim_name=$(this).data('animation');$(this).removeClass('animated '+anim_name).css('opacity','0');});});welcomeSlide.on('translated.owl.carousel',function(){var slideLayer=welcomeSlide.find('.owl-item.active').find("[data-animation]");slideLayer.each(function(){var anim_name=$(this).data('animation');$(this).addClass('animated '+anim_name).css('opacity','1');});});$("[data-delay]").each(function(){var anim_del=$(this).data('delay');$(this).css('animation-delay',anim_del);});$("[data-duration]").each(function(){var anim_dur=$(this).data('duration');$(this).css('animation-duration',anim_dur);});}
if($.fn.simpleTicker){$.simpleTicker($("#breakingNewsTicker"),{speed:1000,delay:3000,easing:'swing',effectType:'roll'});}
if($.fn.classyNav){$('#viralnewsNav').classyNav();}
if($.fn.magnificPopup){$('.videoPlayer').magnificPopup({type:'iframe'});}
if($.fn.scrollUp){browserWindow.scrollUp({scrollSpeed:1500,scrollText:'<i class="fa fa-angle-up"></i>'});}
if($.fn.counterUp){$('.counter').counterUp({delay:10,time:2000});}
if($.fn.sticky){$("#stickyMenu").sticky({topSpacing:0});}
if(browserWindow.width()>767){new WOW().init();}
$('a[href="#"]').on('click',function($){$.preventDefault();});var searchbtn=$('#searchbtn');var viral_search_form=$('.viral-search-form');var navbar_toggler=$('.classy-navbar-toggler');searchbtn.on('click',function(){$(this).toggleClass('fa-close');viral_search_form.toggleClass('active');});navbar_toggler.on('click',function(){viral_search_form.removeClass('active');});navbar_toggler.on('click',function(){searchbtn.removeClass('fa-close');});})(jQuery);