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
    var newTab = $("<li class='tab-button active'>New Tab</li>");
    var newContent = $("<div class='content'>New Tab content</div>");
    $('.content-container').append(newContent);
    $(this).before($(newTab));
    addHandler(newTab, newContent);
  });
});

function addHandler(newTab, newContent){
  newTab.click(function() {
    $('.tab-button').removeClass('active');
    $('.content').hide();
    newContent.show();
    newTab.addClass("active");
  });
}
