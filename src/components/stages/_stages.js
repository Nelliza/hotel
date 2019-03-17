(function($) {
  $.fn.stages = function(options) {

    var $li = $(this).children('li');
    var $countItems = $li.length;

    for (var i = 0; i < $countItems; i++) {
      if (i === $countItems - 1) {
        $li.eq(i).css('width', 0);
      }
      else {
        $li.eq(i).css('width', (100 / ($countItems - 1) - 1) + '%');
      }
    }

    var currentIdx = 0;

    $li.click(function(){
      $li.removeClass('stages__item--current stages__item--done');
      $(this).addClass('stages__item--current');
      currentIdx = $(this).index();

      for (var i = 0; i < currentIdx; i++) {
        $li.eq(i).addClass('stages__item--done');
      }
    });

    if (options.current) {
      $li.eq(options.current - 1).trigger('click');
    }
  }
})(jQuery);