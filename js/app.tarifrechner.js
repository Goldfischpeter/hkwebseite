/*

@ haftpflichtkasse.de
2014 07 18

tarifrechner

- 2014-07-17	entfernung alter funktionen für alte tarifauswahl, neue funktionen
- 2014-07-24	responsive, tarif-selektor
- 2014-07-25	fix Tooltipp Eingaben HKDEXTERN-645
- 2014-07-30	fix Tooltipp Eingaben HKDEXTERN-654
*/


var tarifslide;
var tarifslideMax;

function getHelpTarifTxt(elem)
{
	var id = $(elem).attr('rel');
	var helpTxt = $('#'+id).find('.hkd-tooltip-content').html();
	if (helpTxt == undefined) helpTxt = "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr aliquyam erat, sed diam voluptua.</p>";
	return helpTxt;
}


function bindHelpTarif()
{
	
	$(".hkd-info-ic a").click(function () 
	{
		var elem = $(this).parent().parent().parent().parent().parent();
		
		
		//if (!$(this).hasClass('help-active'))
		if (!elem.find('.hlp').size())
		{
			var helptxt = getHelpTarifTxt( $(this) );
			
			if (helptxt != -1)
			{
				
				elem.append('<div class="hlp">'+helptxt+'</div>');
				$(this).addClass('help-active');
				
				bindHelpHide(elem);
			}
		}else{
			
			$(this).parent().parent().parent().parent().parent().find('div.hlp').remove();
			$(this).removeClass('help-active');
		}
		
		
		return false;
    }); 

 
    $(".hkd-legal a.hkd-has-ic-float").click(function () 
	{
		var elem = $(this).parent();
		
		//if (!$(this).hasClass('help-active'))
		if (!elem.find('.hlp').size())
		{
			var helptxt = getHelpTarifTxt( $(this) );
			
			if (helptxt != -1)
			{
				
				elem.append('<div class="hlp">'+helptxt+'</div>');
				$(this).addClass('help-active');
				
				bindHelpHide(elem);
			}
		}else{
			
			$(this).parent().find('div.hlp').remove();
			$(this).removeClass('help-active');
		}
		
		
		return false;
    }); 
 	
    

}

function bindHelpTarifAuswahl()
{
	

	$(".hkd-ic-hlp").click(function () 
	{
		var elem = $(this).parent().parent();
		elem.find('.hkd-hlp-txt').toggle();
		
		/* mobile */
		elem.toggleClass("hk-row-editmode");
		
	}); 
	

	
	$(".hkd-ic-edit").click(function () 
	{
		var elem = $(this).parent().parent();
		elem.find('.hkd-hlp-txt').toggle();
		
		/* mobile */
		elem.toggleClass("hk-row-editmode");
		
	}); 
	
	
	
	//nur demoversion
	$('.hkd-ic-tarif-hlp').click(function () 
	{
		var id = $(this).attr("href");
		$('.hkd-hlp-txt').hide();
		$("."+id).toggle();
	
		return false;
	}); 
	
}









function bindHelpTarifAuswahlClose()
{

	$(".hkd-hlp-txt").click(function () 
	{
		$(this).hide();
		return false;
	}); 
	
}




function bindHelpHide(elem)
{
	elem.find('.hlp').click(function () 
	{
		$(this).parent().find('.hkd-info-ic a').removeClass('help-active');
		$(this).parent().find('div.hlp').remove();
		return false;
    }); 
}


function bindNachlassCheckbox()
{
	$('.hkd-form-radio-group input').click(function()
	{
   		var val = $(this).val();
   		
   		if (val == "ja") $('.hkd-form-checkbox-group').show();
   		if (val == "nein") $('.hkd-form-checkbox-group').hide();
   		
	})
}


function bindBerufCheckbox()
{
	$('.hkd-form-radio-group input').click(function()
	{
   		var val = $(this).val();
   		if (val == "justiz") $('.beruf').show();
   		
	})
}





function isMobile()
{
	 var isVisible = $('ul.top').is(':visible');
	 if (isVisible) mobile = false;
	 else mobile = true;
	 return mobile;
}


function bindAuswahlPaket()
{
	$(".hkd-tarif-paket").click(function () 
	{
	
		var id = $(this).attr('id').replace('hkd-paket-controller-', '');
		
		$('.hkd-tarif-paket-'+id).toggle();
		$(this).toggleClass('hkd-tarif-paket-closed');
		return false;
	}); 

}


function bindTarifSelector()
{
	
	$(".hk-tarif-2 .hk-tarif-sel-1").addClass('aktiv');
	$(".hk-tarif-4 .hk-tarif-sel-1").addClass('aktiv');

	$(".hk-tarif-2 .hk-tarif-sel-1").click(function () 
	{
		$('.hkd-b1').show();
		$('.hkd-b2').hide();
		$('.hkd-tarif-selector li').removeClass('aktiv');
		$(".hk-tarif-sel-1").addClass('aktiv');
		return false;
	}); 
	
	$(".hk-tarif-2 .hk-tarif-sel-2").click(function () 
	{
		$('.hkd-b1').hide();
		$('.hkd-b2').show();
		$('.hkd-tarif-selector li').removeClass('aktiv');
		$(".hk-tarif-sel-2").addClass('aktiv');
		return false;
	});
	
	
	
	
	$(".hk-tarif-4 .hk-tarif-sel-1").click(function () 
	{
		$('.hkd-col-b1').show();
		$('.hkd-col-b2').hide();
		$('.hkd-col-b3').hide();
		$('.hkd-col-b4').hide();
		$('.hkd-tarif-paket .hkd-col-b1').hide();
		$('.hkd-tarif-paket .hkd-b1').show();
		$('.hkd-tarif-selector li').removeClass('aktiv');
		$(".hk-tarif-sel-1").addClass('aktiv');
		return false;
	}); 
	
	$(".hk-tarif-4 .hk-tarif-sel-2").click(function () 
	{
		$('.hkd-col-b2').show();
	
		$('.hkd-col-b1').hide();
		$('.hkd-col-b3').hide();
		$('.hkd-col-b4').hide();
		$('.hkd-tarif-paket .hkd-col-b1').hide();
		$('.hkd-tarif-paket .hkd-b1').show();
		$('.hkd-tarif-selector li').removeClass('aktiv');
		$(".hk-tarif-sel-2").addClass('aktiv');
		return false;
	}); 
	
	$(".hk-tarif-4 .hk-tarif-sel-3").click(function () 
	{
		$('.hkd-col-b3').show();
		$('.hkd-col-b1').hide();
		$('.hkd-col-b2').hide();
		$('.hkd-col-b4').hide();
		$('.hkd-tarif-paket .hkd-col-b1').hide();
		$('.hkd-tarif-paket .hkd-b1').show();
		$('.hkd-tarif-selector li').removeClass('aktiv');
		$(".hk-tarif-sel-3").addClass('aktiv');
		return false;
	}); 
	
	$(".hk-tarif-4 .hk-tarif-sel-4").click(function () 
	{
		$('.hkd-col-b4').show();
		$('.hkd-col-b1').hide();
		$('.hkd-col-b2').hide();
		$('.hkd-col-b3').hide();
		$('.hkd-tarif-paket .hkd-col-b1').hide();
		$('.hkd-tarif-paket .hkd-b1').show();
		$('.hkd-tarif-selector li').removeClass('aktiv');
		$(".hk-tarif-sel-4").addClass('aktiv');
		return false;
	}); 
	
	
	
}


function bindTabellenAufrufe()
{
	// Link to open the dialog
	$( ".hkd-ic56" ).click(function( event ) {
		
		var id = $(this).data('id');
		$( id ).dialog( "open" );
		return false;
	});
	
	var dwidth = $('#content').width() * .9;
	
	$( ".dialog" ).dialog({
		autoOpen: false,
		width: dwidth,
		height: 500,
		dialogClass: "no-close",
		buttons: [
			{
				text: "Schließen",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});
	
	/* schliest ui-dialog wenn dialog offen und fenster resized wird */
	$( window ).resize(function() 
	{
		var isOpen = $( ".dialog" ).dialog( "isOpen" );
	  	if (isOpen) $( ".dialog" ).dialog('close'); 
	});
	
	
	
	
	/* klappt tabelle aus */
	$( ".hkd-ic57" ).click(function( event ) 
	{
	
		var id = $(this).data('id');

		$( id ).slideToggle();
		$( id ).toggleClass("aktiv");
		
		if ( $( id ).hasClass("aktiv") ) 
		{
			$(this).parent().append('<a data-id="'+id+'" class="close-tabelle-grundsumme" href="#">(Tabelle schließen)</a>')
			bindCloseTabelle();
		}
		else
		{
			$(this).parent().find('.close-tabelle-grundsumme').remove();
		}
		
		
		return false;
	});
	
}

function bindCloseTabelle(){
	$( ".close-tabelle-grundsumme" ).click(function( event ) 
	{	
		var id = $(this).data('id');
		$( id ).slideUp();
		$(this).parent().find('.close-tabelle-grundsumme').remove();
		$( id ).removeClass("aktiv");
		return false;
	});
}


function bindChosen()
{
		$(".hkd-form-select-chosen").chosen();
}


$(document).ready(function()
{
	
	bindHelpTarif();
	bindHelpTarifAuswahl();
	bindHelpTarifAuswahlClose();
	bindAuswahlPaket();
	bindNachlassCheckbox();
	bindTarifSelector();
	bindTabellenAufrufe();
	
	bindBerufCheckbox();
	
	//bindChosen();
	

});

