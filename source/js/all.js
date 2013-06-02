// require_tree .

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
