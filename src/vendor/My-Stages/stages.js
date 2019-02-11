(function($) {
  $.fn.stages = function(options) {

    var opts = $.extend({ }, options);
    var $ul = $('<ul>').attr('class', 'stages__list');

    return this.each(function() {
      for (var i = 1; i <= opts.steps; i++) {
        var $li = $('<li>').attr('class', 'stages__item');
        if (i === opts.steps) {
          $li.css('width', 0);
        }
        else {
          $li.css('width', (100 / (opts.steps - 1) - 1.5) + '%');
        }
        $ul.append($li);
      }

      $(this).append($ul);

      var currentIdx = 0;

       $('.stages__item').click(function(){
          $('.stages__item').removeClass('stages__item--current stages__item--done');
          $(this).addClass('stages__item--current');
          currentIdx = $(this).index();

          for (var i = 0; i < currentIdx; i++) {
            $('.stages__item').eq(i).addClass('stages__item--done');
          }
       });
    });
  };
})(jQuery);