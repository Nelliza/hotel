(function($) {
  $.fn.toggles = function(options) {

    var opts = $.extend({ }, options);

    return this.each(function() {
      $(this).addClass('toggle--active');
      var $span1 = $('<span>').attr('class', 'toggle__round');
      var $span2 = $('<span>on</span>').attr('class', 'toggle__on');
      var $span3 = $('<span>off</span>').attr('class', 'toggle__off');
      var $input = $('<input>').prop('checked', true).attr({
        type: 'checkbox',
        class: 'toggle__checkbox'
      });
      $(this).append($span1).append($span2).append($span3).append($input);

      $('.toggle__checkbox').click(function() {
        var mainParent = $(this).parent('.toggle');

        if ($(mainParent).find('.toggle__checkbox').is(':checked')) {
          $(mainParent).addClass('toggle--active');
        }
        else {
          $(mainParent).removeClass('toggle--active');
        }
      });
    });
  };
})(jQuery);