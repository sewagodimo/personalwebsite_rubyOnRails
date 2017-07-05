// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function minimizeHorzNav() {
    var x = document.getElementById("horzNav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("horzNav").style.width = "100%";
        document.getElementById("horzNav").style.height = "100%";
        document.getElementById("horzNav").style.te = "100%";
        //document.getElementById("wrapper").style.width = "100%";
    } else {
        x.className = "topnav";
         //document.getElementById("horzNav").style.width = "100%";
        // document.getElementById("horzNav").style.height = "10%";
        // document.getElementById("wrapper").style.width = "80%";
    }
}
function minimizeSocialNav() {
    var x = document.getElementById("topMenu");
    if (x.className === "sociallink") {
        x.className += " responsive";
        document.getElementById("topMenu").style.width = "10%";
        document.getElementById("topMenu").style.WebkitAnimation = "mynewmove 4s 2";
    } else {
        x.className = "sociallink";
        document.getElementById("topMenu").style.width = "10%";
    }
}