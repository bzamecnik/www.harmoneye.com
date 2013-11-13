// ===== Google Analytics =====

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40015611-1']);
//_gaq.push(['_setDomainName', 'harmoneye.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function(){
	if (!window._gat) {
		return; // GA blocked
	}

	// cross-domain linking, eg. to the eshop
	$("a.cross-domain-href").click(function(event){
		var targetUrl = $(this).attr('href');
 		console.log('cross-domain ref to ' + targetUrl);
 		var navigateOutside = function(){
 			console.log('ga _link: ' + targetUrl);
 			_gaq.push(['_link', targetUrl]);
 		};		
 		if ($(this).hasClass('has-ga-event')) {
 			// give the event some time to be tracked before the redirect
 			console.log('setting timeout');
 			window.setTimeout(function() {navigateOutside()}, 250);
 		} else {
 			console.log('immediate');
 			navigateOutside();
 		}
		return false;
	});

	var addGaEvent = function(context, eventParams) {
		if (context) {
			context.addClass('has-ga-event');
		}
		var params = ['_trackEvent'];
		// concat GA function name with its parameters
		params.push.apply(params, eventParams);
		_gaq.push(params);
	};

	// === events ===
	
	// == navbar ==

	// $(".navbar a.buy").click(function(event){
	// 	addGaEvent($(this), ['button', 'buy', 'navbar']);
	// });
	
	// == index ==
	
	$(".intro a.get-started-button").click(function(event){
		addGaEvent($(this), ['button', 'get-started', 'intro-button']);
	});
	$(".intro a.screenshot").click(function(event){
		addGaEvent($(this), ['button', 'get-started', 'intro-screenshot']);
	});
	$(".intro a.download-button").click(function(event){
		addGaEvent($(this), ['button', 'download', 'intro-button']);
	});
	// $(".intro a.buy-button").click(function(event){
	// 	addGaEvent($(this), ['button', 'buy', 'intro-button']);
	// });
	// $(".intro a.trial-button").click(function(event){
	// 	addGaEvent($(this), ['button', 'trial', 'intro-button']);
	// });
	// $(".intro a.discount-button").click(function(event){
	// 	addGaEvent($(this), ['button', 'buy', 'intro-discount']);
	// });
	// $(".how-to-get-it a.buy-in-eshop-button").click(function(event){
	// 	addGaEvent($(this), ['button', 'buy-in-eshop']);
	// });
	$(".stay-in-touch a.newsletter-signup-button").click(function(event){
		addGaEvent($(this), ['button', 'newsletter-signup']);
	});

	// == download ==
	$(".download-harmoneye a.download-button").click(function(event){
		var platform = $(this).data('platform');
		var version = $(this).data('version');
		var appId = 'harmoneye-' + platform + '-' + version;
		addGaEvent($(this), ['button', 'download', appId]);
	});
	
	// $(".download-harmoneye a.buy-button").click(function(event){
	// 	addGaEvent($(this), ['button', 'buy', 'download']);
	// });

});
