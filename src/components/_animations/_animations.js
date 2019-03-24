(function() {
  function isScrolledIntoView(elem) {
    var TopViewPort = $(window).scrollTop();
    var BottomViewPort = TopViewPort + $(window).height();
    var TopOfElement = $(elem).offset().top;
    var BottomOfElement = TopOfElement + $(elem).height();
    return ((BottomOfElement <= BottomViewPort) && (TopOfElement >= TopViewPort));
  }

  window.isScrolledIntoView = isScrolledIntoView;
})();