(function() {
  function init() {
    var myMap = new ymaps.Map('location', {
        center: [37.7975, -122.414483],
        zoom: 14
      }, {
        searchControlProvider: 'yandex#search'
      });

      myBalloonLayout = ymaps.templateLayoutFactory.createClass(
        '<span class="location__text location__text--greeting">Meet us!</span>' +
        '<span class="location__text location__text--address">1259 California St<br>San Francisco, CA</span>' +
        '<ul class="location__marks"><li class="location__mark location__mark--location"></li><li class="location__mark location__mark--pin"></li></ul>'
      );

    ymaps.layout.storage.add('my#balloonlayout', myBalloonLayout);

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        balloonContentLayout:'my#balloonlayout',
        balloonPanelMaxMapArea: Infinity,
        balloonCloseButton: false,
        iconLayout: 'default#image',
        iconImageHref: require('../_icons/marker-icon.svg'),
        iconImageSize: [60, 80],
        iconImageOffset: [-20, -34]
      });

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.balloon.open();
  }

  window.init = init;
})();