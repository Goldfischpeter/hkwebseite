/*

@ haftpflichtkasse.de
2014 07 25


2014 05 27 - vermittlersuche bindFAQ()
		   - bindDeckungsvergleich() - dynamische Höhe 
2014 07 11 - bindListeExpander() - Anpassungen 
2014 07 24 - rollover funktion navigation 
2014 07 25 - rollover funktion navigation fix
2014 07 25 - Hinweis-Layer Funktion
2014 07 25 - Übersicht Link auf komplette Boxen
2014 07 28 - Übersicht Link auf komplette Presse-Teaser-Boxen
2014 07 29 - Hinweis-Layer Horz und Vertikal Center/Middle Align in Funktion
2014 07 29 - Navi Hover nur für non-Touch-Devices
2014 08 07 - forEach IE 8 fix #28-34
2014-08-12 - Touch Detection Navigation
2014-08-19 - Modal #518
*/

var currentlvl1;
var unbindNav;
var currentStatus = new Array();
var aryKm = new Array(5,10,20,50);
var dbugline = 1;



if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function(callback){
      for (var i = 0; i < this.length; i++){
        callback.apply(this, [this[i], i, this]);
      }
    };
}



function triggerNavLvl1 (obj)
{

	var sel = false;
	var nextLvl1;
	var nextLvl2;
	var nextLvl3;
	var sub = false;
	var id;
	
	
	id = obj.attr('class');
	id = id.replace("sel", "")
	id = id.slice( 1 );
	
	if (id == 1) return; //start
	if ( obj.hasClass('sel') ) sel = true;
	if ( $('.nav-flyout').is(':visible') ) sub = true;

	
	if (sel) return;
	
	
	if (sub)
	{
		if ( $('.lvl-3').parent().hasClass('sel') ) $('.lvl-3').hide();
		if ( $('.lvl-4').parent().hasClass('sel') ) $('.lvl-4').hide();
	}
	if (currentlvl1 != id)
	{
		$('.lvl-3').hide();
		$('.lvl-4').hide();
	}
	
	
	$(".nav li a").removeClass("sel");		
	obj.addClass("sel");

	// RESET
	$('.navset').hide();

	//currentStatus speichert bei doc.ready den status der 3 levels
	if ( id == currentStatus[1] )
	{
		nextLvl1 = currentStatus[1];
		nextLvl2 = currentStatus[2];
		nextLvl3 = currentStatus[3];
		
	}else{
		nextLvl1 = id;
		nextLvl2 = nextLvl3 = 0;	
	}

	updateNavPath(nextLvl1, 1, false);
	updateNavPath(nextLvl2, 2, false);
	updateNavPath(nextLvl3, 3, false);
	
	bindScrollDetection();
	
	if (!sub) $('.nav-flyout').show();
	
	return false;
	
}


function triggerNavLvl2 (obj)
{

	var id;
	var sel = false;
	var children = false;
	
	id = obj.parent().attr('id');
	id = id.slice( 1 );

	if ( obj.hasClass('sel') ) sel = true;
	if ( obj.parent().hasClass('c') ) children = true;
	
	if (sel) return;
	
	$(".lvl-2 li a").removeClass("sel");		
	obj.addClass("sel");

	var marker = '#c-'+id;

	$('.lvl-3').hide();
	$('.lvl-4').hide();
	$(marker).show();

	if (children) return false;

}


function triggerNavLvl3 (obj)
{
	var id;
	var sel = false;
	var children = false;

	id = obj.parent().attr('id');
	id = id.slice( 1 );
	
	if ( obj.hasClass('sel') ) sel = true;
	if ( obj.parent().hasClass('c') ) children = true;
	
	if (sel) return;
	
	$(".lvl-3 li a").removeClass("sel");		
	obj.addClass("sel");

	var marker = '#c-'+id;

	$('.lvl-4').hide();
	$(marker).show();
	
	if (children) return false;

}





function bindNavigationLvl1()
{
	$(".nav li a, .mobile-nav li a").click(function(event)
	{
		r = triggerNavLvl1( $(this) );	
		return r;	
	});  
	

	if (!isTouchDevice()){
		$( ".nav li a" ).hover(
			function() {
				triggerNavLvl1( $(this) );
			}, function() {
				$(".nav li a").removeClass("sel");	
			}
		); 
	}

	
}

function bindNavigationLvl2()
{
	$(".lvl-2 li a").click(function(event)
	{
		r = triggerNavLvl2( $(this) );	
		return r;	
	});  
	

	if (!isTouchDevice()){
		$( ".lvl-2 li a" ).hover(function (){ triggerNavLvl2( $(this) );	});  
	}

		
}

function bindNavigationLvl3()
{
	$(".lvl-3 li a").click(function(event)
	{
		r = triggerNavLvl3( $(this) );	
		return r;
	});  
	

	if (!isTouchDevice()){
		$( ".lvl-3 li a" ).hover( function (){ triggerNavLvl3( $(this) );	});
	}

}







function bindMobileNav()
{
	$("a.mobile-nav-trigger").click(function(event)
	{
		$('.nav-flyout').toggle();
		return false;
	});  
}


function updateNavPath(n, lvl, init)
{
	
	if (n != undefined)
	{
		var marker = '#c-'+n;
		$(marker).show();
		
		if (init) currentStatus[lvl]=n;
		
		dbug("n: "+n+" lvl: " + lvl);
	}	
	
}


function bindScrollDetection ()
{
	
	$( window ).scroll(function() {
		if(!isTouchDevice()){
			var isVisible = $('ul.top').is(':visible')
			if ( isVisible ){
				$('.nav-flyout').hide();
				$( window ).unbind('scroll');
			}
		}
	});
	
	

	
	$("body").click(function(event){
		$('.nav-flyout').hide();
	}); 
	
	$('.nav-flyout').hover(
	function (){
	}, function(){
		$('.nav-flyout').hide();
	});  
	
	
	
	
}


function bindFAQ()
{
	$(".faq").click(function(event){
	
		if ($(this).hasClass('closed'))
		{
		
			//alle schliessen
			$(".faq").removeClass('open');
			$(".faq").addClass('closed');
			$("div.extended").hide();
		
			$(this).removeClass('closed');
			$(this).addClass('open');
			
			$(this).find("div.extended").show();
			$(this).find(".short").hide();
			
			// vermittlersuche
			var mapFrame = $(this).find("iframe");
			if ( mapFrame ) {
			   mapFrame.attr('src',mapFrame.attr('src') )
			}

		}
		else
		{
			
			$(this).removeClass('open');
			$(this).addClass('closed');
			
			$("div.extended").hide();
			$(this).find(".short").show();
			
			return false;
		}
		
	}); 
	
	
	$(".faq a").click(function(event){
		event.stopPropagation();
	}); 
}



function checkForSlide(ary, checkslide)
{
	var r = 0;
	var yoffset = 0;
	ary.forEach(function(entry) {
   		var slide = entry[0];
   		if (checkslide === slide) {
   			r = 1;
   			yoffset = entry[1];
   		}
   	});
   	return new Array(r, yoffset);
}




function bindSlider(delay, bgsettings)
{
	bgsettings = bgsettings || 0;
	delay = delay || 5000;

	var size = $('.slider-item').size();

	if (size > 1)
	{
		var sliderInst = $(".royalSlider").royalSlider({
			controlNavigation:'bullets',
			arrowsNav: true,
			arrowsNavAutoHide: false,
			fullscreen: false,
			loop: true,
			keyboardNavEnabled: true,
			autoPlay: {
				enabled: true,
				pauseOnHover: true,
				delay: delay
			}
		});  
		
		//slides 0 ... n-1, array mit funktion übergeben
		/*var bgsettings = new Array([0,'0px'],[2,'-760px']);*/
		
		//EVENT VOR ANIMATION nextSlide = 0 ... num-1
		var slider = $(".royalSlider").data('royalSlider');
		slider.ev.on('rsBeforeAnimStart', function(event) 
		{
		
    		nextSlide = parseInt(slider.currSlideId);
			
			if (bgsettings != 0)
			{
			
				var res = checkForSlide(bgsettings, nextSlide);
			
				if (res[0] == 1)
				{
					var ty = res[1];
					$('#visual').stop().animate({
						backgroundPositionY: ty
					});
				}
			
			}
		});
		
		/*
		760 Startseite
		
		*/
	}
	
}


function bindDeckungsvergleich()
{

	var size = $('.dv-page').size();

	if (size > 1)
	{
		var sliderInst = $(".royalSlider").royalSlider({
			autoHeight: true,
			controlNavigation:'bullets',
			arrowsNav: false,
			arrowsNavAutoHide: false,
			fullscreen: false,
			loop: false,
			keyboardNavEnabled: true,
			autoPlay: {
				enabled: true,
				pauseOnHover: true,
				delay: 10000
			}
		});  
		
	}
	
	
	// klappbare box
	$(".dv-box .dv-title").click(function(event)
	{
	
		if ($(this).parent().hasClass('dv-closed'))
		{
			$(this).parent().find('.deckungsvergleich').slideDown();
			$(this).parent().removeClass('dv-closed');
			$(this).parent().addClass('dv-open');
		}
		else
		{
			$(this).parent().find('.deckungsvergleich').hide();
			$(this).parent().removeClass('dv-open');
			$(this).parent().addClass('dv-closed');
		}
		
	}); 
	
	$(".dv-box .dv-title a").click(function(event) {
		event.stopPropagation();
	}); 
	
	
}



function bindAnsprechpartnerSlider()
{

	var size = $('.ap-page').size();
	if (size > 1)
	{
		var sliderInst = $(".royalSlider").royalSlider({
			controlNavigation:'tabs',
			arrowsNav: false,
			arrowsNavAutoHide: false,
			fullscreen: false,
			loop: true,
			keyboardNavEnabled: true,
			autoPlay: {
				enabled: false,
				pauseOnHover: true,
				delay: 10000
			}
		});  
		
	}
	
}




function bindListeExpander ()
{
	
	$("div.list-txt-img .col-2 > a").click(function(event){
	
		if ($(this).hasClass("aktiv"))
		{
			$(this).prev(".extended").slideUp();
			//$("div.extended").slideUp();
			$(this).removeClass("aktiv");
			$(this).html("Mehr");
		}else{
			$(this).prev(".extended").slideDown();
			//$("div.extended").slideDown();
			$(this).addClass("aktiv");
			$(this).html("Weniger");
		}
		return false;
	});

}


function bindSearch()
{
	$('.suche').keypress(function (e) {
	  if (e.which == 13) {
		window.location.href = 'http://hkd.goldfischtank.de/service-kontakt/suche.html';
		return false;
	  }
	});

}



function bindVermittersuche()
{
	$(".vmf-umkreis li").click(function(event){
		
		var id = $(this).attr("id");
		id = id.replace("km","");
		
		for (var i in aryKm) 
		{
			var km = aryKm[i];
			var myclass = 'li#'+km+'km';
			
			if (km <= id) $(myclass).addClass('aktiv');
			else $(myclass).removeClass('aktiv');
		}			
		
		return false;	
	}); 

}

function bindVermittlerFunktion()
{
	$(".hkd-form-radio input").click(function () {
     if ( $(this).attr("id") == "hkd-form-e-8") $(".set-mitarbeiter").fadeTo("fast", 1);
     else $(".set-mitarbeiter").fadeTo("fast", 0.2 );
    }); 
}


function bindUebersichtButtons()
{
	$(".selbox").click(function () {
     	var url = $(this).find('a').attr("href");
     	window.location = url;
    }); 
    $(".feed li").click(function () {
     	var url = $(this).find('a').attr("href");
     	window.location = url;
    }); 
    
}





function startPage()
{	
	$('#page').hide();
	$('#page').fadeIn('slow');
}

function showHinweis(url)
{

    $('#content').fadeTo( "fast", 0.33 );
   
    //set link of second href
    $('.hinweis-layer a.continueLink').attr('href',url);
    var elem = '.hinweis-layer';
    $(elem).css({
        position:'absolute',
        left: ($(window).width() - $(elem).outerWidth())/2,
        top: ( ( $(window).height() - $(elem).outerHeight() )/2 ) + $(window).scrollTop()
    });

    $(elem).show();
   
}

function hideHinweis()
{
    $('#content').fadeTo( "fast", 1 );
    $('.hinweis-layer').hide();
}



function showModal()
{
    var elem = '.modal-layer';
    $(elem).css({
        position:'absolute',
        left: ($(window).width() - $(elem).outerWidth())/2,
        top: ( ( $(window).height() - $(elem).outerHeight() )/2 ) + $(window).scrollTop()
    });

    $(elem).show();
   
}

function hideModal()
{
    $('.modal-layer').hide();
}



function isTouchDevice(){
    return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}


function bindScrollUpdate()
{
	 $(document).scroll(function () 
	 {
        var y = $(this).scrollTop();
        
        var isVisible = $('ul.top').is(':visible')
        
        if (isVisible)
        {
			if (y > 240) $(".visual-1 .teaser").hide();
			else $(".visual-1 .teaser").show();
		
			if (y > 70) $(".visual-2 .teaser").hide();
			else $(".visual-2 .teaser").show();
        }
    });
}






function dbug(mess)
{
	var debuggerText = $('.debugger').html();
	debuggerText += mess + "<br />";
	$('.debugger').html(debuggerText);
	dbugline++;
	
	var status = "currentStatus[1]: "+currentStatus[1] +"<br />";
	var status = status + "currentStatus[2]: "+currentStatus[2] +"<br />";
	var status = status + "currentStatus[3]: "+currentStatus[3] +"<br />";
	$('.status').html(status);
}




$(document).ready(function()
{

	bindNavigationLvl1();
	bindNavigationLvl2();
	bindNavigationLvl3();
	
	bindMobileNav();
	
	//bindSlider();
	bindDeckungsvergleich();
	bindFAQ();
	bindListeExpander();
	//bindSearch();
	bindVermittersuche();
	bindAnsprechpartnerSlider();
	bindVermittlerFunktion();
	bindScrollUpdate();
	bindUebersichtButtons();

	startPage();


});

