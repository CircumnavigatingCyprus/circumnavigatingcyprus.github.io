{% raw %}

$(function($) {
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'iheartcyprus',
    accessToken: '3067904632.1677ed0.975541eb24274559b5f205cb9a7c3092',
    sortyBy: 'most-recent',
    template: '<div class="item"><a href="{{link}}"><img src="{{image}}" /></a></div>',
    target: 'instagramCarousel',
    after: initOwl
  });
  feed.run();

  function initOwl() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 2,
      margin: 10,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
  }
}($))

{% endraw %}