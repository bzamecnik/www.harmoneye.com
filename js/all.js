// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
function onYouTubeIframeAPIReady(){for(var e=0;e<videoArray.length;e++)playerArray[e]=new YT.Player(videoArray[e],{events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(e){}function onPlayerStateChange(e){videoarraynum=e.target.id-1,e.data==YT.PlayerState.PLAYING&&(_gaq.push(["_trackEvent","Videos","Play",videoArray[videoarraynum]]),_pauseFlag=!1),e.data==YT.PlayerState.ENDED&&_gaq.push(["_trackEvent","Videos","Watch to End",videoArray[videoarraynum]]),e.data==YT.PlayerState.PAUSED&&_pauseFlag==0&&(_gaq.push(["_trackEvent","Videos","Pause",videoArray[videoarraynum]]),_pauseFlag=!0),e.data==YT.PlayerState.BUFFERING&&_gaq.push(["_trackEvent","Videos","Buffering",videoArray[videoarraynum]]),e.data==YT.PlayerState.CUED&&_gaq.push(["_trackEvent","Videos","Cueing",videoArray[videoarraynum]])}window.log=function(){log.history=log.history||[],log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var e=[].slice.call(arguments);typeof console.log=="object"?log.apply.call(console.log,console,e):console.log.apply(console,e)}},function(e){function t(){}for(var n="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),r;r=n.pop();)e[r]=e[r]||t}(function(){try{return console.log(),window.console}catch(e){return window.console={}}}()),$(document).ready(function(){var e=$("html, body");$("a").click(function(){var t=$.attr(this,"href");return t&&t.match(/^#[^#]+/)?(e.animate({scrollTop:$(t).offset().top},500,function(){window.location.hash=t}),!1):!0})});var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-40015611-1"]),_gaq.push(["_setAllowLinker",!0]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),$(document).ready(function(){if(!window._gat)return;$("a.cross-domain-href").click(function(e){var t=$(this).attr("href");console.log("cross-domain ref to "+t);var n=function(){console.log("ga _link: "+t),_gaq.push(["_link",t])};return $(this).hasClass("has-ga-event")?(console.log("setting timeout"),window.setTimeout(function(){n()},250)):(console.log("immediate"),n()),!1});var e=function(e,t){e&&e.addClass("has-ga-event");var n=["_trackEvent"];n.push.apply(n,t),_gaq.push(n)};$(".intro a.get-started-button").click(function(t){e($(this),["button","get-started","intro-button"])}),$(".intro a.screenshot").click(function(t){e($(this),["button","get-started","intro-screenshot"])}),$(".intro a.download-button").click(function(t){e($(this),["button","download","intro-button"])}),$(".stay-in-touch a.newsletter-signup-button").click(function(t){e($(this),["button","newsletter-signup"])}),$(".download-harmoneye a.download-button").click(function(t){var n=$(this).data("platform"),r=$(this).data("version"),i="harmoneye-"+n+"-"+r;e($(this),["button","download",i])})});var tag=document.createElement("script");tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var videoArray=new Array,playerArray=new Array;(function(e){function t(){var t=0;jQuery("iframe").each(function(){var n=e(this);if(n.attr("src")===undefined)var r="";else var r=n.attr("src");var s=/https?\:\/\/www\.youtube\.com\/embed\/([\w-]{11})(?:\?.*)?/,o=r.match(s);o&&o.length>1&&(videoArray[t]=o[1],e(this).attr("id",o[1]),t++)})}e(document).ready(function(){t()})})(jQuery);var _pauseFlag=!1;!function(e,t,n){var r,i=e.getElementsByTagName(t)[0],s=/^http:/.test(e.location)?"http":"https";e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src=s+"://platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs"),function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t),r.id=n,r.src="//connect.facebook.net/cs_CZ/all.js#xfbml=1",i.parentNode.insertBefore(r,i)}(document,"script","facebook-jssdk");