$(document).ready(function() {
  $('.tab-button').click(function(){
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    $('.content').hide();
    $('#' + $(this).data('tab')).show();
  });
  $('.add-tab-button').click(function() {
    $('.tab-button').removeClass('active');
    $('.content').hide();
    var newTab = $("<li><a class='tab-button active'>New Tab</a></li>");
    var newContent = $("<div class='content'>New Tab content</div>");
    $('.content-container').append(newContent);
    newTab.click(function() {
      $('.tab-button').removeClass('active');
      $('.content').hide();
      newContent.show();
      newTab.find("a").addClass("active");
    });
    $(this).parent().before($(newTab));
  });
});
