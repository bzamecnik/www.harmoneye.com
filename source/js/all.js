// require_tree .

// google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40015611-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// share this
// stLight.options({publisher: "70fe0e1f-a7c3-4a6f-97b1-7aec5e22c1a2", doNotHash: false, doNotCopy: false, hashAddressBar: false});
// var options={ "publisher": "70fe0e1f-a7c3-4a6f-97b1-7aec5e22c1a2", "position": "left", "ad": { "visible": false, "openDelay": 5, "closeDelay": 0}, "chicklets": { "items": ["facebook", "googleplus", "twitter", "email"]}};
// var st_hover_widget = new sharethis.widgets.hoverbuttons(options);

// animate scrolling the page after clicking on a fragment link
$(document).ready(function() {
  var $root = $('html, body');
  $('a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });
});
