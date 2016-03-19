// File : co.js (v10.0)
// Function : Accurate Placement via Browser Constraints
// (c) Copyright 2014 SGNLS.net

// constraints

var gW = $(window).width();
var gH = $(window).height();

if (gW > 1549){
	var tcols = 3;
	var gcols = 3;
}
else{
	var tcols = 3;
	var gcols = 5;
}

var gWE = gW - 10;
var colpaddt = 20;
var colmargt = 20;
var colpaddg = 10;
var colmargg = 10;

// var gWCA = (gWE / tcols) - ((colpadd * 2) * tcols);
var gWCA = (gWE / tcols);
	var gWCC = (gWCA - (colpaddt * 4)) - (2 * tcols);
var gWCB = (gWE / gcols);
	var gWCD = (gWCB - (colpaddg * 4)) - (2 * gcols);

// structures

document.write("<script type=\"text/javascript\">\
		$(window).load(function() {\
		  $('#twr_wr').masonry({\
			itemSelector : '.twr',\
			isAnimated: true\
		  });\
		  $('#gallery_frg').masonry({\
			itemSelector : 'img',\
			isAnimated: true\
		  });\
		});\
		</script>");

document.write("<style type=\"text\/css\">");
	document.write(".twr{\
				border: 1px solid #787b7c;\
				background: #4e5152;\
				float: left; \
				width:" + gWCC + "px;\
				padding:" + colpaddt + "px;\
				margin:" + colmargt + "px;\
			}");
	document.write("#gallery_frg img{\
				border: 0;\
				width:" + gWCD + "px;\
				float: left; \
				padding:" + colpaddg + "px;\
				margin:" + colmargg + "px;\
			}");
document.write("</style>");

// functions

function gC(){
	window.alert("Width is " + gW + "px, height is " + gH + "px.");
}

function sR(){
	window.alert("Real Estate is X*Y (" + gW + "x" + gH + ") = " + gS + " pixels.");
}

