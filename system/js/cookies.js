//THEMES COOKIES
// *** TO BE CUSTOMISED ***

var style_cookie_name = "UOSTheme" ;
var style_cookie_duration = 30 ;
var style_domain = "" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie_style( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie_style( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie_style ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie_style ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}
//cookies 
function createCookie(cname,cvalue,exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

    function eraseCookie(c_name) {
	createCookie(c_name,"",-1);
  }



  
  function checkBGCookie() {
	if (localStorage.hasOwnProperty('AeroBG') != -1)  {
		var AvaBGLS = localStorage.getItem("AeroBG");
		var base64uncom0 = AvaBGLS.replaceAll("%", "A");
		var base64uncom1 = base64uncom0.replace("ebubjnbhf", "data:image");
		var base64uncom2 = base64uncom1.replace("aerolssecurity", "base64");
		var base64uncompressed = base64uncom2.replaceAll("'", "F");
		$('.desktop').css('background', 'url(' + base64uncompressed + ')');

	} else {
        void(0);		
	}
  }



function setColourCookie() {
	let root = document.documentElement;
	var hsl1 = getCookie("AeroColorTheme");
	
  }
  function mOSLeftBarCookie() {
  if (document.cookie.indexOf("mOSLeftBar=true") != -1)  {
	var taskbar = document.getElementById("taskbar");
	var checkBox = document.getElementById("centrdAppsChk");
	var appsmenu = document.getElementById("appsmenu");
	var timedate = document.getElementsByClassName("timedate")[0];
	appsmenu.style.margin = "unset";
	taskbar.style.margin = "unset";
	taskbar.style.borderTopLeftRadius = "0px";
	taskbar.style.borderBottomLeftRadius = "0px";
	taskbar.style.borderBottomRightRadius = "0px";
	taskbar.style.bottom = "0px";
	timedate.style.borderTopRightRadius = "0px";
	timedate.style.bottom = "0";
	timedate.style.right = "0";
	timedate.style.borderBottomLeftRadius = "0px";
	timedate.style.borderBottomRightRadius = "0px";
	appsmenu.style.bottom = "58px";
	checkBox.checked = "true"
  }
}

  function setColorCookie() {
	var cpcolor = getCookie("mOSColor");
	const winhead = document.getElementsByClassName('windowHeader');
    $(winhead).css('background', cpcolor);
	$('#taskbar').css('background', cpcolor);
	$('#appsmenu').css('background', cpcolor);
	$('#htmltemp').css('color', cpcolor);
	$('#watermark').css('color', cpcolor);
	$('#abranding a').css('color', cpcolor);
	$('button').css('border-color', cpcolor);
	$('.checkBox').css('color', cpcolor);
	
  }
  
  function defaultColorsCookies() {
	eraseCookie("mOSColor")
   };

  function startCookies() {
	setColorCookie();
	mOSLeftBarCookie();
  }
   
