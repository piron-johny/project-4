$(document).ready(function() {   
 var btn_top = $('#scrolling-up');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() < 400) {
         btn_top.addClass('show');
       } else {
         btn_top.removeClass('show');
       }
     });
     btn_top.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '400');
     });
});