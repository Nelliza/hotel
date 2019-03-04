$(function() {
  $('.button').on('click', function (event) {
    var $div = $('<div/>'),
      btnOffset = $(this).offset(),
      xPos = event.pageX - btnOffset.left,
      yPos = event.pageY - btnOffset.top;

    $(this).addClass('button--pressed');
    $div.addClass('button__ripple');

    $div
      .css({
        top: yPos,
        left: xPos
      }) 
      .appendTo($(this));

    window.setTimeout(function() {
      $div.remove();
      $('.button').removeClass('button--pressed');
    }, 1000);
  });
});