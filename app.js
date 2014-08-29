$(document).ready(function() {
  $('.tab-button').click(function(){
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    $('.content').hide();
    $('#' + $(this).data('tab')).show();
  });
});
