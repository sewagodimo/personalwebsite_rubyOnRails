
var slideIndex = 1;
showDivs(1);
carousel();

function minimizeHorzNav() {
    var x = document.getElementById("horzNav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("horzNav").style.width = "90%";
        document.getElementById("horzNav").style.height = "100%";
        document.getElementById("horzNav").style.te = "100%";
        //document.getElementById("wrapper").style.width = "100%";
    } else {
        x.className = "topnav";
         document.getElementById("horzNav").style.width = "100%";
        // document.getElementById("horzNav").style.height = "10%";
        // document.getElementById("wrapper").style.width = "80%";
    }
}
function minimizeSocialNav() {
    var x = document.getElementById("topMenu");
    if (x.className === "sociallink") {
        x.className += " responsive";
        document.getElementById("topMenu").style.width = "10%";
       // document.getElementById("topMenu").style.WebkitAnimation = "mynewmove 4s 2";
    } else {
        x.className = "sociallink";
        document.getElementById("topMenu").style.width = "10%";
    }
}
function onContact(){
  var x = document.getElementById("wrappercontact");
    if (x.className === "sociallink") {
        x.className += " responsive";
        document.getElementById("topMenu").style.width = "10%";
       // document.getElementById("topMenu").style.WebkitAnimation = "mynewmove 4s 2";
    } else {
        x.className = "sociallink";
        document.getElementById("topMenu").style.width = "10%";
    }

}
window.onscroll = function() {scrolldown()};

function scrolldown() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("heading").className = "websiteTitleNone";
    }
    else{
    	document.getElementById("heading").className = "websiteTitle";
    }
}
function scrolledtoContact(){
document.getElementById("heading").className = "websiteTitleNone";
//document.body.scrollTop=100;
   var x = document.getElementById("contact");
    if (x.className === "contactHeading") {
        x.className += " responsive";
        document.getElementById("topMenu").style.width = "10%";
       // document.getElementById("topMenu").style.WebkitAnimation = "mynewmove 4s 2";
    } else {
        x.className = "sociallink";
        document.getElementById("topMenu").style.width = "10%";
}
}

//The slider index code


function plusDivs(n) {
    showDivs(slideIndex += n);
}


function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myslides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
//change image every 2 seconds


function carousel() {
    var i;
    var x = document.getElementsByClassName("myslides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}