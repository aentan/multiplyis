$(function() {

  $('.btn-enroll').popover({
    placement: 'top',
    html: true,
    container: 'body'
  });
  
  $('#selector-btn').click(function() {
    $('body').addClass('noscroll');
  });
  
  $('#fs-close').click(function(e){
    e.preventDefault();
    $('body').removeClass('noscroll');
  });

});
