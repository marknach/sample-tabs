$(document).ready(function() {
  $('.tab-button').click(function(){
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    $('.content').hide();
    $('#' + $(this).data('tab')).show();
  });
  $('.add-tab-button').click(function() {
    $(this).before($("<span class='tab-button'></span>"));
  });
});
