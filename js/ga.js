// ===== Google Analytics =====
var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-40015611-1"]),_gaq.push(["_setAllowLinker",!0]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),$(document).ready(function(){$("a.cross-domain-href").click(function(e){var t=$(this).attr("href");console.log("cross-domain ref to "+t);var n=function(){console.log("ga _link: "+t),_gaq.push(["_link",t])};return $(this).hasClass("has-ga-event")?(console.log("setting timeout"),window.setTimeout(function(){n()},250)):(console.log("immediate"),n()),!1});var e=function(e,t){e&&e.addClass("has-ga-event");var n=["_trackEvent"];n.push.apply(n,t),_gaq.push(n)};$(".navbar a.buy").click(function(t){e($(this),["button","buy","navbar"])}),$(".intro a.get-started-button").click(function(t){e($(this),["button","get-started","intro-button"])}),$(".intro a.screenshot").click(function(t){e($(this),["button","get-started","intro-screenshot"])}),$(".intro a.buy-button").click(function(t){e($(this),["button","buy","intro-button"])}),$(".intro a.trial-button").click(function(t){e($(this),["button","trial","intro-button"])}),$(".intro a.discount-button").click(function(t){e($(this),["button","buy","intro-discount"])}),$(".how-to-get-it a.buy-in-eshop-button").click(function(t){e($(this),["button","buy-in-eshop"])}),$(".stay-in-touch a.newsletter-signup-button").click(function(t){e($(this),["button","newsletter-signup"])}),$(".download-harmoneye a.download-button").click(function(t){var n=$(this).data("platform"),r=$(this).data("version"),i="harmoneye-"+n+"-"+r;e($(this),["button","download",i])}),$(".download-harmoneye a.buy-button").click(function(t){e($(this),["button","buy","download"])})});