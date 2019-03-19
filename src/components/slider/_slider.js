(function() {
  function sliderScale() {
    var ul = $(this).find('.slider__scale');
    var count = ($(this).slider('option', 'max') - $(this).slider('option', 'min')) / $(this).slider('option', 'step');
    var step = $(this).slider('option', 'min');
    var distance = 100 / count;
    var left = 0;
    for (var i = 0; i <= count; i++) {
      ul.append($('<li>', {
        class: 'slider__step',
        text: step,
        style: 'left: ' + left + '%'
      }));
      step += $(this).slider('option', 'step');
      left += distance;
    }
  }

  function sliderPointerInitial() {
    var pointer = $(this).find('.slider__pointer');
    pointer.text($(this).slider('option', 'value') || $(this).slider('option', 'min'));
  }

  function sliderPointer(event, ui) {
    var pointer = $(this).find('.slider__pointer');
    pointer.text(ui.value);
  }

  window.sliderScale = sliderScale;
  window.sliderPointerInitial = sliderPointerInitial;
  window.sliderPointer = sliderPointer;
}());