$(document).ready(function() {

    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);
  
  });
  