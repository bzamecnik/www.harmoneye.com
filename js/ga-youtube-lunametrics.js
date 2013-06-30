//
//To Track Thy Youtube Upon Google Analytics
//Regardless the number of Players upon thy stage
//Revised and Revisioned to Version 2.1
//Within the March of Two Thousand and Thirteen
//
//Performed by LunaMetrics http://www.lunametrics.com @lunametrics 
//and Sayf Sharif @sayfsharif
//
//Who beg thy forgiveness for the lack of the regular expression
//Tis code not the most triumphant
//Nor that of most efficiency
//but neither is the field of poppies
//stretch'd ere the distance
//it matches its purpose
//
//Forget thou not to subscribeth to our bloge: http://www.lunametrics.com/blog/
//
//CURTAIN
//
//Forsooth here doth we instantiate thy youtube player api 
//as it was written by the Google
function onYouTubeIframeAPIReady(){for(var e=0;e<videoArray.length;e++)playerArray[e]=new YT.Player(videoArray[e],{events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(e){}function onPlayerStateChange(e){videoarraynum=e.target.id-1,e.data==YT.PlayerState.PLAYING&&(_gaq.push(["_trackEvent","Videos","Play",videoArray[videoarraynum]]),_pauseFlag=!1),e.data==YT.PlayerState.ENDED&&_gaq.push(["_trackEvent","Videos","Watch to End",videoArray[videoarraynum]]),e.data==YT.PlayerState.PAUSED&&_pauseFlag==0&&(_gaq.push(["_trackEvent","Videos","Pause",videoArray[videoarraynum]]),_pauseFlag=!0),e.data==YT.PlayerState.BUFFERING&&_gaq.push(["_trackEvent","Videos","Buffering",videoArray[videoarraynum]]),e.data==YT.PlayerState.CUED&&_gaq.push(["_trackEvent","Videos","Cueing",videoArray[videoarraynum]])}var tag=document.createElement("script");tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var videoArray=new Array,playerArray=new Array;(function(e){function t(){var t=0;jQuery("iframe").each(function(){var n=e(this);if(n.attr("src")===undefined)var r="";else var r=n.attr("src");var s=/https?\:\/\/www\.youtube\.com\/embed\/([\w-]{11})(?:\?.*)?/,o=r.match(s);o&&o.length>1&&(videoArray[t]=o[1],e(this).attr("id",o[1]),t++)})}e(document).ready(function(){t()})})(jQuery);var _pauseFlag=!1;