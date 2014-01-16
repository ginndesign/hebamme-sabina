// Menu definitionen

$(document).ready(function() {
	$('.menu-link').bigSlide();
});

// Umbruch definitionen

Hyphenator.config({
	displaytogglebox : false,
	minwordlength : 2
});
Hyphenator.run();

// Parallax definitionen
var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	calibrateX: false,
	calibrateY: true,
	invertX: false,
	invertY: false,
	limitX: false,
	limitY: false,
	scalarX: 100,
	scalarY: 50,
	frictionX: 0.01,
	frictionY: 0.01
});

// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});