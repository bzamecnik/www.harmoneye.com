// require_tree .
// animate scrolling the page after clicking on a fragment link
$(document).ready(function(){var e=$("html, body");$("a").click(function(){var t=$.attr(this,"href");return e.animate({scrollTop:$(t).offset().top},500,function(){window.location.hash=t}),!1})});