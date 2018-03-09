/*

@ haftpflichtkasse.de
2014 04 11

schadenmeldung


2014-07-29	fragen: keine tooltipps 
*/

/*
var hkHelpAry = new Array();

// hilfetext hausrat
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Hausrat";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Hausrat";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Hausrat";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Hausrat";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Hausrat";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Hausrat";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Hausrat";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Hausrat";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Hausrat";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Hausrat";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Hausrat";
hkHelpAry['hk-sm-hausrat'] = tHelp;


// hilfetext hausrat elementar
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Hausrat Elementar";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Hausrat Elementar";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Hausrat Elementar";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Hausrat Elementar";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Hausrat Elementar";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Hausrat Elementar";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Hausrat Elementar";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Hausrat Elementar";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Hausrat Elementar";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Hausrat Elementar";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Hausrat Elementar";
tHelp["f-12"] 	= "Das ist ein Hilfetext für Frage 12 zu Schadenmeldung Hausrat Elementar";
hkHelpAry['hk-sm-hausrat-elementar'] = tHelp;


// hilfetext hausrat fahrrad
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-12"] 	= "Das ist ein Hilfetext für Frage 12 zu Schadenmeldung Hausrat Fahrrad";
tHelp["f-13"] 	= "Das ist ein Hilfetext für Frage 13 zu Schadenmeldung Hausrat Fahrrad";
hkHelpAry['hk-sm-hausrat-fahrrad'] = tHelp;


// hilfetext hausrat glas
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Hausrat Glas";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Hausrat Glas";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Hausrat Glas";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Hausrat Glas";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Hausrat Glas";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Hausrat Glas";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Hausrat Glas";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Hausrat Glas";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Hausrat Glas";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Hausrat Glas";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Hausrat Glas";
tHelp["f-12"] 	= "Das ist ein Hilfetext für Frage 12 zu Schadenmeldung Hausrat Glas";
tHelp["f-13"] 	= "Das ist ein Hilfetext für Frage 13 zu Schadenmeldung Hausrat Glas";
hkHelpAry['hk-sm-hausrat-glas'] = tHelp;


// hilfetext firmenkunden
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Firmenkunden";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Firmenkunden";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Firmenkunden";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Firmenkunden";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Firmenkunden";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Firmenkunden";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Firmenkunden";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Firmenkunden";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Firmenkunden";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Firmenkunden";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Firmenkunden";
tHelp["f-12"] 	= "Das ist ein Hilfetext für Frage 12 zu Schadenmeldung Firmenkunden";
tHelp["f-13"] 	= "Das ist ein Hilfetext für Frage 13 zu Schadenmeldung Firmenkunden";
tHelp["f-14"] 	= "Das ist ein Hilfetext für Frage 14 zu Schadenmeldung Firmenkunden";
tHelp["f-15"] 	= "Das ist ein Hilfetext für Frage 15 zu Schadenmeldung Firmenkunden";
hkHelpAry['hk-sm-firmenkunden'] = tHelp;


// hilfetext privatkunden
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Privatkunden";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Privatkunden";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Privatkunden";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Privatkunden";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Privatkunden";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Privatkunden";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Privatkunden";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Privatkunden";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Privatkunden";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Privatkunden";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Privatkunden";
tHelp["f-12"] 	= "Das ist ein Hilfetext für Frage 12 zu Schadenmeldung Privatkunden";
tHelp["f-13"] 	= "Das ist ein Hilfetext für Frage 13 zu Schadenmeldung Privatkunden";
tHelp["f-14"] 	= "Das ist ein Hilfetext für Frage 14 zu Schadenmeldung Privatkunden";
tHelp["f-15"] 	= "Das ist ein Hilfetext für Frage 15 zu Schadenmeldung Privatkunden";
tHelp["f-16"] 	= "Das ist ein Hilfetext für Frage 16 zu Schadenmeldung Privatkunden";
tHelp["f-17"] 	= "Das ist ein Hilfetext für Frage 17 zu Schadenmeldung Privatkunden";
tHelp["f-18"] 	= "Das ist ein Hilfetext für Frage 18 zu Schadenmeldung Privatkunden";
tHelp["f-19"] 	= "Das ist ein Hilfetext für Frage 19 zu Schadenmeldung Privatkunden";
tHelp["f-20"] 	= "Das ist ein Hilfetext für Frage 20 zu Schadenmeldung Privatkunden";
tHelp["f-21"] 	= "Das ist ein Hilfetext für Frage 21 zu Schadenmeldung Privatkunden";
tHelp["f-22"] 	= "Das ist ein Hilfetext für Frage 22 zu Schadenmeldung Privatkunden";
tHelp["f-23"] 	= "Das ist ein Hilfetext für Frage 23 zu Schadenmeldung Privatkunden";
tHelp["f-24"] 	= "Das ist ein Hilfetext für Frage 24 zu Schadenmeldung Privatkunden";
tHelp["f-25"] 	= "Das ist ein Hilfetext für Frage 25 zu Schadenmeldung Privatkunden";
hkHelpAry['hk-sm-privatkunden'] = tHelp;



// hilfetext unfall
var tHelp = new Array();
tHelp["f-1"] 	= "Das ist ein Hilfetext für Frage 1 zu Schadenmeldung Unfall";
tHelp["f-2"] 	= "Das ist ein Hilfetext für Frage 2 zu Schadenmeldung Unfall";
tHelp["f-3"] 	= "Das ist ein Hilfetext für Frage 3 zu Schadenmeldung Unfall";
tHelp["f-4"] 	= "Das ist ein Hilfetext für Frage 4 zu Schadenmeldung Unfall";
tHelp["f-5"] 	= "Das ist ein Hilfetext für Frage 5 zu Schadenmeldung Unfall";
tHelp["f-6"] 	= "Das ist ein Hilfetext für Frage 6 zu Schadenmeldung Unfall";
tHelp["f-7"] 	= "Das ist ein Hilfetext für Frage 7 zu Schadenmeldung Unfall";
tHelp["f-8"] 	= "Das ist ein Hilfetext für Frage 8 zu Schadenmeldung Unfall";
tHelp["f-9"] 	= "Das ist ein Hilfetext für Frage 9 zu Schadenmeldung Unfall";
tHelp["f-10"] 	= "Das ist ein Hilfetext für Frage 10 zu Schadenmeldung Unfall";
tHelp["f-11"] 	= "Das ist ein Hilfetext für Frage 11 zu Schadenmeldung Unfall";
tHelp["f-12"] 	= "Das ist ein Hilfetext für Frage 12 zu Schadenmeldung Unfall";
tHelp["f-13"] 	= "Das ist ein Hilfetext für Frage 13 zu Schadenmeldung Unfall";
tHelp["f-14"] 	= "Das ist ein Hilfetext für Frage 14 zu Schadenmeldung Unfall";
tHelp["f-15"] 	= "Das ist ein Hilfetext für Frage 15 zu Schadenmeldung Unfall";
tHelp["f-16"] 	= "Das ist ein Hilfetext für Frage 16 zu Schadenmeldung Unfall";
tHelp["f-17"] 	= "Das ist ein Hilfetext für Frage 17 zu Schadenmeldung Unfall";
tHelp["f-18"] 	= "Das ist ein Hilfetext für Frage 18 zu Schadenmeldung Unfall";
tHelp["f-19"] 	= "Das ist ein Hilfetext für Frage 19 zu Schadenmeldung Unfall";
tHelp["f-20"] 	= "Das ist ein Hilfetext für Frage 20 zu Schadenmeldung Unfall";
tHelp["f-21"] 	= "Das ist ein Hilfetext für Frage 21 zu Schadenmeldung Unfall";
tHelp["f-22"] 	= "Das ist ein Hilfetext für Frage 22 zu Schadenmeldung Unfall";
tHelp["f-23"] 	= "Das ist ein Hilfetext für Frage 23 zu Schadenmeldung Unfall";
tHelp["f-24"] 	= "Das ist ein Hilfetext für Frage 24 zu Schadenmeldung Unfall";
tHelp["f-25"] 	= "Das ist ein Hilfetext für Frage 25 zu Schadenmeldung Unfall";
hkHelpAry['hk-sm-unfall'] = tHelp;
*/



function bindBoxCollapse()
{

	$(document).on('click', '.hkd-bx-config', function() {
       if (! $(this).parent().parent().hasClass('hkd-bx-open') && ! $(this).parent().parent().hasClass('hkd-bx-closed')){
           $(this).parent().parent().removeClass('hkd-bx-open');
           $(this).parent().parent().addClass('hkd-bx-closed');
           $(this).parent().parent().find('.hkd-toggle-bx').hide();
           return false;
       }
       if ($(this).parent().parent().hasClass('hkd-bx-closed')){
           $(this).parent().parent().removeClass('hkd-bx-closed');
           $(this).parent().parent().addClass('hkd-bx-open');
           $(this).parent().parent().find('.hkd-toggle-bx').show();
           return false;
       }
       if ($(this).parent().parent().hasClass('hkd-bx-open')){
           $(this).parent().parent().removeClass('hkd-bx-open');
           $(this).parent().parent().addClass('hkd-bx-closed');
           $(this).parent().parent().find('.hkd-toggle-bx').hide();
           return false;
       }
   });
   
}



function getHelpTxt(elem, id)
{
	var indx = $('p.hkd-fieldset-frage').index(elem);
	var helptxt;

	var frage = indx + 1;

	if ($.isNumeric(frage)) 
	{
		helptxt = hkHelpAry[id]['f-'+frage];
		return helptxt;
	}
	return -1;
}


/* 

hilfetext ermitteln und anzeigen (toggle append remove)

*/


function bindHelp()
{

	// schadenmeldung ermittlern, klasse definiert in help array frage/antworten
	var smclass = $('#hk-schadenmeldung').attr('class');
	
	
	$(".hkd-fieldset-frage").click(function () {
	
	
		if (!$(this).hasClass('help-active'))
		{
			var helptxt = getHelpTxt( $(this), smclass );
			
			if (helptxt != -1)
			{
				$(this).append('<span>'+helptxt+'</span>');
				$(this).addClass('help-active');
			}
		}else{
			
			$(this).find('span').remove();
			$(this).removeClass('help-active');
		}
		
		
		return false;
    }); 
    
}





$(document).ready(function()
{

	bindBoxCollapse()
	//bindHelp();

});

