// Menu definitionen
$(document).ready(function(){$(".menu-link").bigSlide()});Hyphenator.config({displaytogglebox:!1,minwordlength:2});Hyphenator.run();var scene=document.getElementById("scene"),parallax=new Parallax(scene,{calibrateX:!1,calibrateY:!0,invertX:!1,invertY:!1,limitX:!1,limitY:!1,scalarX:100,scalarY:50,frictionX:.01,frictionY:.01});$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},1e3);return!1}}})});