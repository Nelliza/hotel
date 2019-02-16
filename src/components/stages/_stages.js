(function($) {
  $.fn.stages = function() {

    var $li = $(this).children('li');
    var $countItems = $li.length;

    for (var i = 0; i < $countItems; i++) {
      if (i === $countItems - 1) {
        $li.eq(i).css('width', 0);
      }
      else {
        $li.eq(i).css('width', (100 / ($countItems - 1) - 1.5) + '%');
      }
    }

    var currentIdx = 0;

    $('.stages__item').click(function(){
      $('.stages__item').removeClass('stages__item--current stages__item--done');
      $(this).addClass('stages__item--current');
      currentIdx = $(this).index();

      for (var i = 0; i < currentIdx; i++) {
        $('.stages__item').eq(i).addClass('stages__item--done');
      }
    });
  }
})(jQuery);