class Location {
  constructor(myMap) {
    this.createBalloon();
    this.createPlacemark(myMap);
  }

  createBalloon() {
    const myBalloonLayout = ymaps.templateLayoutFactory.createClass(
      '<span class="location__text location__text_type_greeting">Meet us!</span><span class="location__text location__text_type_address">1259 California St<br>San Francisco, CA</span><ul class="location__marks"><li class="location__mark location__mark_type_location"><a class="location__mark-link" href="./handler.php"></a></li><li class="location__mark location__mark_type_pin"><a class="location__mark-link" href="./handler.php"></a></li></ul>',
    );

    ymaps.layout.storage.add('my#balloonlayout', myBalloonLayout);
  }

  createPlacemark(myMap) {
    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      balloonContentLayout: 'my#balloonlayout',
      balloonPanelMaxMapArea: Infinity,
      balloonCloseButton: false,
      iconLayout: 'default#image',
      iconImageHref: require('../../assets/icons/marker-icon.svg'),
      iconImageSize: [60, 80],
      iconImageOffset: [-20, -34],
    });

    myMap.geoObjects.add(myPlacemark);

    myPlacemark.balloon.open();
  }
}

export default Location;
