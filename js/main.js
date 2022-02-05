var projectSelect = false;
var listItem = [".main-work li:nth-of-type(1)", ".main-work li:nth-of-type(2)", ".main-work li:nth-of-type(3)", ".main-work li:nth-of-type(4)", ".main-work li:nth-of-type(5)"];
var listAni = [".port-li-1", ".port-li-2", ".port-li-3", ".port-li-4", ".port-li-5"];
var listImg = [".port-img-menu-container li:nth-of-type(1) img", ".port-img-menu-container li:nth-of-type(2) img", ".port-img-menu-container li:nth-of-type(3) img", ".port-img-menu-container li:nth-of-type(4) img", ".port-img-menu-container li:nth-of-type(5) img"];


    const swiper = new Swiper('.swiper', { //Homepage Swiper
	direction: "vertical",
        pagination: {el: ".swiper-pagination",clickable: true,},
        keyboard: {enabled: true,},
        mousewheel: true,
        autoplay: {delay: 5000,},

        on: {
      slideChange: function(){
        var currentSlide = this.realIndex + 1;
	        if (currentSlide == 2) {
			$(".button_container span").css('background','#764937'); 
			$("nav svg path").css('fill','#764937');
			$(".swiper-pagination-bullet").css('background-color','#fff'); 
			$(".swiper-pagination-bullet-active").css('background-color','#764937'); 
			}
			else if (currentSlide == 3)
			{
			$(".button_container span").css('background','#7acfde'); 
			$("nav svg path").css('fill','#7acfde');
			$(".swiper-pagination-bullet").css('background-color','#000'); 
			$(".swiper-pagination-bullet-active").css('background-color','#7acfde'); 

			}
			else if (currentSlide == 4)
			{
			$(".button_container span").css('background','#974e1a'); 
			$("nav svg path").css('fill','#974e1a');
			$(".swiper-pagination-bullet").css('background-color','#fff'); 
			$(".swiper-pagination-bullet-active").css('background-color','#974e1a'); 

			}
			else if (currentSlide == 5)
			{
			$(".button_container span").css('background','#f06b27'); 
			$("nav svg path").css('fill','#f06b27');
			$(".swiper-pagination-bullet").css('background-color','#000'); 
			$(".swiper-pagination-bullet-active").css('background-color','#f06b27'); 

			}
			else if (currentSlide == 6)
			{
			$(".button_container span").css('background','#906627'); 
			$("nav svg path").css('fill','#906627');
			$(".swiper-pagination-bullet").css('background-color','#fff'); 
			$(".swiper-pagination-bullet-active").css('background-color','#906627'); 

			}
			else
			{
			$(".button_container span").css('background','#a56527'); 
			$("nav svg path").css('fill','#a56527');
			$(".swiper-pagination-bullet").css('background-color','#000'); 
			$(".swiper-pagination-bullet-active").css('background-color','#a56527'); 

			}
			
			var color = $(".button_container span").css('background');
			$('#toggle').click(listItem, function(i, val) { //On Click Of Hamburger Menu
				
				   	if($("#toggle").hasClass('active')) //if the menu is open stop autoplay on slider
					{
						
						$(".button_container span").css('background','#a56527'); 
					}
					else // if its not active start autoplay
					{
						
						if (currentSlide ==2) //find out current slide color for hamburger menu
						{
						color = '#6d6b69'; 
						}
						else if (currentSlide ==3)
						{
						color = '#7acfde'; 
						}
						else if (currentSlide ==4)
						{
						color = 'white'; 
						}
						else if (currentSlide ==5)
						{
						color = '#f06b27'; 
						}
						else if (currentSlide ==6)
						{
						color = '#906627'; 
						}
						else
						{
						color = '#a56527';
						}
						$(".button_container span").css('background',color);		
					}
				
			});
			
			$('#toggle-m').click(listItem, function(i, val) { //On Click Of Hamburger Menu MOBILE
				
				   	if($("#toggle-m").hasClass('active')) //if the menu is open stop autoplay on slider
					{
						
						$(".button_container span").css('background','#a56527'); 
					}
					else // if its not active start autoplay
					{
						
						if (currentSlide ==2) //find out current slide color for hamburger menu
						{
						color = '#6d6b69'; 
						}
						else if (currentSlide ==3)
						{
						color = '#7acfde'; 
						}
						else if (currentSlide ==4)
						{
						color = 'white'; 
						}
						else if (currentSlide ==5)
						{
						color = '#f06b27'; 
						}
						else if (currentSlide ==6)
						{
						color = '#906627'; 
						}
						else
						{
						color = '#a56527';
						}
						$(".button_container span").css('background',color);		
					}
				
			});
			
			$(window).resize(function(){    
	        if ($(window).width() <= 1150) //If window is large enough for desktop menu
	        {  
		        
			}
		    else 
		    { //close menu when resizing
			    if (currentSlide ==2) //find out current slide color for hamburger menu
						{
						color = '#6d6b69'; 
						}
						else if (currentSlide ==3)
						{
						color = '#7acfde'; 
						}
						else if (currentSlide ==4)
						{
						color = 'white'; 
						}
						else if (currentSlide ==5)
						{
						color = '#f06b27'; 
						}
						else if (currentSlide ==6)
						{
						color = '#906627'; 
						}
						else
						{
						color = '#a56527';
						}
						$(".button_container span").css('background',color);
			} 
		    });

        //document.querySelector('.current-slide').innerHTML = currentSlide;
      },
     
    }
        
	});
	

/*
  $('#toggle.active').on('mouseenter', function(e){
    console.log('stop autoplay');
	swiper.autoplay.stop();
  })
  $('#toggle').on('mouseleave', function(e){
    console.log('start autoplay');
	swiper.autoplay.start();
  })
  
  if ($("#toggle").hasClass("active")) {
	    console.log('stop autoplay');
	swiper.autoplay.stop();
}
else
{
	
}*/





$('#toggle').click(listItem, function(i, val) { //On Click Of Hamburger Menu
   $(this).toggleClass('active'); //Change Class to Active
    
    //var color = $(".button_container span").css('background');
   	if($("#toggle").hasClass('active')) //if the menu is open stop autoplay on slider
	{
		swiper.autoplay.stop();
		//$(".button_container span").css('background','#a56527'); 
	}
	else // if its not active start autoplay
	{
		swiper.autoplay.start();
		//$(".button_container span").css('background',color);		
	}
	
   	
    if(projectSelect == false) //If Porfolio is not selected
    {
       $('.nav-menu-container').toggleClass('open'); //Add Open Class to Nav Container
       $('#overlay').toggleClass('open'); //Add Open Class to Overlay div
	   $('nav p').toggleClass('navbar-d'); //Hide Navbar line "Tailored Pixels"
	   $('body').toggleClass('navbar-s');
    }
	else
	{
		jQuery.each(listItem, function(i, val) { //Porfolio Hover Effects
		   $(listImg[i]).css('left', '100%'); //Move hover image out of view
		   $(listAni[i]).removeClass("port-menu-hover"); //Show portfolio descrption
		});
		$('nav p').toggleClass('navbar-d'); // Hide Navbar line "Tailored Pixels"
		projectSelect = false; //Project is No Longer Selected
	} 
	$('.bottom').toggleClass('pulse');
	animateLines();
	$('.menu-scroller').toggleClass('navbar-h');
	$('.tp_logo_mm').toggleClass('navbar-d');
	$(".menu-container").css('display', 'block');
	$('.menu-bg-b').css('width', '40%');
	$('.menu-bg-w').css('width', '60%');
});



//Mobile

$('#toggle-m').click(listItem, function(i, val) { //On Click Of Hamburger Menu
   $(this).toggleClass('active'); //Change Class to Active
   	if($("#toggle-m").hasClass('active')) //if the menu is open stop autoplay on slider
	{
		swiper.autoplay.stop();
	}
	else // if its not active start autoplay
	{
		swiper.autoplay.start();
	}
	
   	projectSelect = false
    if(projectSelect == false) //If Porfolio is not selected
    {
       $('.nav-menu-container').toggleClass('open'); //Add Open Class to Nav Container
       $('#overlay').toggleClass('open'); //Add Open Class to Overlay div
	   $('nav p').toggleClass('navbar-d'); //Hide Navbar line "Tailored Pixels"
	   $('body').toggleClass('navbar-s');
    }
	else
	{
		jQuery.each(listItem, function(i, val) { //Porfolio Hover Effects
		   $(listImg[i]).css('left', '100%'); //Move hover image out of view
		   $(listAni[i]).removeClass("port-menu-hover"); //Show portfolio descrption
		});
		$('nav p').toggleClass('navbar-d'); // Hide Navbar line "Tailored Pixels"
		projectSelect = false; //Project is No Longer Selected
	} 
	$('.bottom').toggleClass('pulse');
	animateLines();
	$('.menu-scroller').toggleClass('navbar-h');
	$('.tp_logo_mm').toggleClass('navbar-d');
	$(".menu-container").css('display', 'block');
	$('.menu-bg-b').css('width', '100%');
	$('.menu-bg-w').css('width', '100%');
});

$(window).resize(function(){    
        if ($(window).width() <= 1150) //If window is large enough for desktop menu
        {  
 }
        else { //close menu when resizing
	        
	       
	        
	        $('#toggle').removeClass('active'); //Close Menu
	        $('#toggle-m').removeClass('active'); //Close Mobile Menu
	        swiper.autoplay.start(); //start slider
	       $('.nav-menu-container').removeClass('open'); //Add Open Class to Nav Container
	       $('#overlay').removeClass('open'); //Add Open Class to Overlay div
		   $('nav p').removeClass('navbar-d'); //Hide Navbar line "Tailored Pixels"
		   $('body').removeClass('navbar-s');
		   $('.bottom').toggleClass('pulse');
	
	$('.bottom').removeClass('pulse');
	$('.menu-scroller').removeClass('navbar-h');
	$('.tp_logo_mm').removeClass('navbar-d');
			$('.menu-line-bg').removeClass('open');
			
		$('.menu-trans').removeClass('menu-line-1-active'); // Animated Line Around The Screen 1
	    setTimeout( function(){
	    $('.menu-trans-4').removeClass('menu-line-4-active'); // Animated Line Around The Screen 2
		},250);
		setTimeout( function(){
		$('.menu-trans-3').removeClass('menu-line-3-active'); // Animated Line Around The Screen 3
		},500);
		setTimeout( function(){
		$('.menu-trans-2').removeClass('menu-line-2-active'); // Animated Line Around The Screen 4
		},750);

			
	        
	        
        } // Window is mobile menu size Don't do hover
    });

  
jQuery.each(listItem, function(i, val) { //Porfolio Hover Effects
	
			$(val).mouseover(function(){
				if(!projectSelect) { // If main project is not selected do this
				$(listImg[i]).css('left', '0px'); //Move hover image into view
				$(".port-menu-dec").css('display', 'block'); //Show project Container div
				$(listAni[i]).addClass("port-menu-hover"); //Show portfolio descrption
				}
			});
		   $(val).mouseout(function(){
			   if(projectSelect) return; // If main project is selected end function
			   $(listImg[i]).css('left', '100%'); //move hover image out of view
		       $(listAni[i]).removeClass("port-menu-hover"); //Hide project container div
		       $(".port-menu-dec").css('display', 'none'); // Hide portfolio descrption
		   }); 
       
});

jQuery.each(listItem, function(i, val) {
   $(val).click(function(){
    	projectSelect = true; //Project Selected True
        $(listImg[i]).css('left', '0px'); // Move hover out of view
        $(listAni[i]).addClass("port-menu-hover"); //Show Portfolio Description
        
        $('.menu-bg-b').css('width', '0%'); //Shrink Left "Black" Menu Div
	    $('.menu-bg-w').css('width', '100%'); //Expand Portfolio Picture Div
	    $('.button_container').toggleClass('active'); //Remove active class
	    $('.bottom').toggleClass('pulse'); // Remove plusing animation on hamburger icon
		animateLines(); //Line Animations Function
		$('.menu-scroller').toggleClass('navbar-h');
		$('.menu-scroller-full').css('background', 'transparent'); // Remove Background from navbar
		$('.menu-scroller-full').css('box-shadow', 'none'); // Remove navbar shadow
		$('.tp_logo_mm').toggleClass('navbar-d'); // show navbar icon
		$('nav p').toggleClass('navbar-d'); // show navbar line "Taliored Pixels"
		$(".menu-container").css('display', 'none'); // hide open menu container 
		//test load html page
    	/*$('.testdiv')
                .hide() // make sure #target starts hidden
                .load('test.html', function() {
                    $(this).fadeIn(1000); // when page.html has loaded, fade #target in
                });*/
		
		//$('.testdiv').trigger('pagecreate');

   });
});
  
$(".main-work li").mouseenter(function(event) //Keep hover events active inbetween portfolio links
{
    event.stopPropagation()
    $('.white-contain').addClass("port-menu-active");
    $('.main-work').css('width', '110%');
}).mouseleave(function(event)
{
    event.stopPropagation()
    	$('.main-work').css('width', '30%');
    //var delayInMilliseconds = 500; //1 second
//setTimeout(function() {
    $('.white-contain').removeClass("port-menu-active");
    //}, delayInMilliseconds);
   



})
    

function animateLines() { //Animated menu Lines on Open
	
		$('.menu-line-bg').toggleClass('open');
		$('.menu-trans').toggleClass('menu-line-1-active'); // Animated Line Around The Screen 1
	    setTimeout( function(){
	    $('.menu-trans-4').toggleClass('menu-line-4-active'); // Animated Line Around The Screen 2
		},250);
		setTimeout( function(){
		$('.menu-trans-3').toggleClass('menu-line-3-active'); // Animated Line Around The Screen 3
		},500);
		setTimeout( function(){
		$('.menu-trans-2').toggleClass('menu-line-2-active'); // Animated Line Around The Screen 4
		},750);
}





//START Browser Prompt
$(".close").click(function(){
  $(".browserupgrade").hide();
});

//Preloader
(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

       $(".loader-inner").fadeOut();
       $(".loader").delay(200).fadeOut("slow");

    });
    
    
    /* $(document).ready(function() {
	     if($(".first").hasClass('swiper-slide-active'))
	     {		         console.log('willow active');

		     $(".button_container span").css('background','#fff'); 

		    }
		   
		  else{
			  		     $(".button_container span").css('background',''); 

		  }
    
    });*/
 


})(jQuery);