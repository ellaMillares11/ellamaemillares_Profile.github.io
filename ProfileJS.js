//JS for the front picture
var myIndex = 0;
				carousel();

				function carousel() {
				  var i;
				  var x = document.getElementsByClassName("pic3");
				  for (i = 0; i < x.length; i++) {
				    x[i].style.display = "none";  
				  }
					  myIndex++;
					  if (myIndex > x.length) {myIndex = 1}    
					  x[myIndex-1].style.display = "block";  
					  setTimeout(carousel, 4000); // Change image every 4 seconds
				}
//-----------------------------------------------

//JS Hide of Navigation bar
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
		  if (prevScrollpos > currentScrollPos) {
		    document.getElementById("navigation").style.top = "0";
		  } else {
		    document.getElementById("navigation").style.top = "-200px";
		  }
  prevScrollpos = currentScrollPos;
}

//------------------------------------------------------