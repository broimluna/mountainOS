function openTab(tabName) {
	var i;
	var x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
	}

	var changeBG = function(event) {
		var output = document.getElementsByClassName('desktop')[0];
		output.style.background= "url("+URL.createObjectURL(event.target.files[0])+")";
	  };
	
	  var resetBG = function(event) {
		var output = document.getElementsByClassName('desktop')[0];
		output.style.background= "";
	  }
	  function localBG() {
		document.getElementsByClassName('desktop')[0].style.background = "url('system/img/bg.png')";
	}
	
	
	  function defaultColors() {
		// Get the checkbox
		var checkBox = document.getElementById("defaultColor");
		// Get the output text
		var taskbar = document.getElementById("taskbar");
		var appsmenu = document.getElementById("appsmenu");
		var htmltemp = document.getElementById("htmltemp");
		// If the checkbox is checked, display the output text
		if (checkBox.checked == true){
		  taskbar.style.background = "";
		  appsmenu.style.background = "";
		  htmltemp.style.color = "";
		  
		} else {
		  taskbar.style.background = "";
		  appsmenu.style.background = "";
		  htmltemp.style.color = "";
		}
		const winhead = document.getElementsByClassName('windowHeader');
		$(winhead).css('background', '');
		$("#abranding a").css('color', '');
		$("#watermark").css('color', '');
		$('button').css('border-color', '');
		$('.checkBox').css('color', '');
		$('.wppicker').css('border-color', '');
	  }
	  
	
	
	