var projectSelect = false;
var listItem = [".main-work li:nth-of-type(1)", ".main-work li:nth-of-type(2)", ".main-work li:nth-of-type(3)", ".main-work li:nth-of-type(4)", ".main-work li:nth-of-type(5)"];
var listAni = [".port-li-1", ".port-li-2", ".port-li-3", ".port-li-4", ".port-li-5"];
var listImg = [".port-img-menu-container li:nth-of-type(1) img", ".port-img-menu-container li:nth-of-type(2) img", ".port-img-menu-container li:nth-of-type(3) img", ".port-img-menu-container li:nth-of-type(4) img", ".port-img-menu-container li:nth-of-type(5) img"];


$('#toggle').click(listItem, function(i, val) { //On Click Of Hamburger Menu
   $(this).toggleClass('active'); //Change Class to Active
   	$('#toggle').toggleClass('menu-page-color'); //change hamburger menu icon color
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
   	$('#toggle-m').toggleClass('menu-page-color'); //change hamburger menu icon color
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
	       $('.nav-menu-container').removeClass('open'); //Add Open Class to Nav Container
	       $('#overlay').removeClass('open'); //Add Open Class to Overlay div
		   $('nav p').removeClass('navbar-d'); //Hide Navbar line "Tailored Pixels"
		   $('body').removeClass('navbar-s');
		   $('.bottom').toggleClass('pulse');
	
		   $('.bottom').removeClass('pulse');
		   $('.menu-scroller').removeClass('navbar-h');
		   $('.tp_logo_mm').removeClass('navbar-d');
		   $('.menu-line-bg').removeClass('open');
		   
		   $('#toggle').addClass('menu-page-color'); 
		   $('#toggle-m').addClass('menu-page-color'); 

			
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
    $('.white-contain').removeClass("port-menu-active");
    $('.main-work').css('width', '30%');
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
    

 


})(jQuery);