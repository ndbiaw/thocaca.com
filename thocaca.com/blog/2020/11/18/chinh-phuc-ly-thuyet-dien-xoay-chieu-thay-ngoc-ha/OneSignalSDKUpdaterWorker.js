<!DOCTYPE html>
<html class="no-js" lang="vi" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:addthis="https://www.addthis.com/help/api-spec" >
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="profile" href="https://gmpg.org/xfn/11" />
<script data-ad-client="ca-pub-4236244253293148" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<title>Không tìm thấy trang này &#8211; Chinh phục giảng đường</title>
<link rel='dns-prefetch' href='//s7.addthis.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Dòng thông tin Chinh phục giảng đường &raquo;" href="https://thocaca.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Dòng phản hồi Chinh phục giảng đường &raquo;" href="https://thocaca.com/comments/feed/" />
		<!-- This site uses the Google Analytics by MonsterInsights plugin v8.3.0 - Using Analytics tracking - https://www.monsterinsights.com/ -->
							<script src="//www.googletagmanager.com/gtag/js?id=UA-199874138-1"  type="text/javascript" data-cfasync="false" data-wpfc-render="false" async></script>
			<script type="text/javascript" data-cfasync="false" data-wpfc-render="false">
				var mi_version = '8.3.0';
				var mi_track_user = true;
				var mi_no_track_reason = '';
				
								var disableStrs = [
															'ga-disable-UA-199874138-1',
									];

				/* Function to detect opted out users */
				function __gtagTrackerIsOptedOut() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						if ( document.cookie.indexOf( disableStrs[ index ] + '=true' ) > -1 ) {
							return true;
						}
					}

					return false;
				}

				/* Disable tracking if the opt-out cookie exists. */
				if ( __gtagTrackerIsOptedOut() ) {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						window[ disableStrs[ index ] ] = true;
					}
				}

				/* Opt-out function */
				function __gtagTrackerOptout() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						document.cookie = disableStrs[ index ] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
						window[ disableStrs[ index ] ] = true;
					}
				}

				if ( 'undefined' === typeof gaOptout ) {
					function gaOptout() {
						__gtagTrackerOptout();
					}
				}
								window.dataLayer = window.dataLayer || [];

				window.MonsterInsightsDualTracker = {
					helpers: {},
					trackers: {},
				};
				if ( mi_track_user ) {
					function __gtagDataLayer() {
						dataLayer.push( arguments );
					}

					function __gtagTracker( type, name, parameters ) {
						if (!parameters) {
							parameters = {};
						}

						if (parameters.send_to) {
							__gtagDataLayer.apply( null, arguments );
							return;
						}

						if ( type === 'event' ) {
							
															parameters.send_to = monsterinsights_frontend.ua;
								__gtagDataLayer( type, name, parameters );
													} else {
							__gtagDataLayer.apply( null, arguments );
						}
					}
					__gtagTracker( 'js', new Date() );
					__gtagTracker( 'set', {
						'developer_id.dZGIzZG' : true,
											} );
															__gtagTracker( 'config', 'UA-199874138-1', {"forceSSL":"true","link_attribution":"true","page_path":'\/404.html?page=' + document.location.pathname + document.location.search + '&from=' + document.referrer} );
										window.gtag = __gtagTracker;											(function () {
							/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
							/* ga and __gaTracker compatibility shim. */
							var noopfn = function () {
								return null;
							};
							var newtracker = function () {
								return new Tracker();
							};
							var Tracker = function () {
								return null;
							};
							var p = Tracker.prototype;
							p.get = noopfn;
							p.set = noopfn;
							p.send = function (){
								var args = Array.prototype.slice.call(arguments);
								args.unshift( 'send' );
								__gaTracker.apply(null, args);
							};
							var __gaTracker = function () {
								var len = arguments.length;
								if ( len === 0 ) {
									return;
								}
								var f = arguments[len - 1];
								if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
									if ( 'send' === arguments[0] ) {
										var hitConverted, hitObject = false, action;
										if ( 'event' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[3] ) {
												hitObject = {
													'eventAction': arguments[3],
													'eventCategory': arguments[2],
													'eventLabel': arguments[4],
													'value': arguments[5] ? arguments[5] : 1,
												}
											}
										}
										if ( 'pageview' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[2] ) {
												hitObject = {
													'eventAction': 'page_view',
													'page_path' : arguments[2],
												}
											}
										}
										if ( typeof arguments[2] === 'object' ) {
											hitObject = arguments[2];
										}
										if ( typeof arguments[5] === 'object' ) {
											Object.assign( hitObject, arguments[5] );
										}
										if ( 'undefined' !== typeof arguments[1].hitType ) {
											hitObject = arguments[1];
											if ( 'pageview' === hitObject.hitType ) {
												hitObject.eventAction = 'page_view';
											}
										}
										if ( hitObject ) {
											action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
											hitConverted = mapArgs( hitObject );
											__gtagTracker( 'event', action, hitConverted );
										}
									}
									return;
								}

								function mapArgs( args ) {
									var arg, hit = {};
									var gaMap = {
										'eventCategory': 'event_category',
										'eventAction': 'event_action',
										'eventLabel': 'event_label',
										'eventValue': 'event_value',
										'nonInteraction': 'non_interaction',
										'timingCategory': 'event_category',
										'timingVar': 'name',
										'timingValue': 'value',
										'timingLabel': 'event_label',
										'page' : 'page_path',
										'location' : 'page_location',
										'title' : 'page_title',
									};
									for ( arg in args ) {
																				if ( ! ( ! args.hasOwnProperty(arg) || ! gaMap.hasOwnProperty(arg) ) ) {
											hit[gaMap[arg]] = args[arg];
										} else {
											hit[arg] = args[arg];
										}
									}
									return hit;
								}

								try {
									f.hitCallback();
								} catch ( ex ) {
								}
							};
							__gaTracker.create = newtracker;
							__gaTracker.getByName = newtracker;
							__gaTracker.getAll = function () {
								return [];
							};
							__gaTracker.remove = noopfn;
							__gaTracker.loaded = true;
							window['__gaTracker'] = __gaTracker;
						})();
									} else {
										console.log( "" );
					( function () {
							function __gtagTracker() {
								return null;
							}
							window['__gtagTracker'] = __gtagTracker;
							window['gtag'] = __gtagTracker;
					} )();
									}
			</script>
				<!-- / Google Analytics by MonsterInsights -->
				<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/thocaca.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.5.10"}};
			!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<!-- thocaca.com is managing ads with Advanced Ads – https://wpadvancedads.com/ --><script id="thoca-ready">
			window.advanced_ads_ready=function(e,a){a=a||"complete";var d=function(e){return"interactive"===a?"loading"!==e:"complete"===e};d(document.readyState)?e():document.addEventListener("readystatechange",(function(a){d(a.target.readyState)&&e()}),{once:"interactive"===a})},window.advanced_ads_ready_queue=window.advanced_ads_ready_queue||[];		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='wp-block-library-css'  href='https://thocaca.com/wp-includes/css/dist/block-library/style.min.css?ver=5.5.10' type='text/css' media='all' />
<link rel='stylesheet' id='wordpress-popular-posts-css-css'  href='https://thocaca.com/wp-content/plugins/wordpress-popular-posts/assets/css/wpp.css?ver=5.5.0' type='text/css' media='all' />
<link rel='stylesheet' id='mh-google-fonts-css'  href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,600' type='text/css' media='all' />
<link rel='stylesheet' id='mh-magazine-lite-css'  href='https://thocaca.com/wp-content/themes/mh-magazine-lite/style.css?ver=2.8.6' type='text/css' media='all' />
<link rel='stylesheet' id='mh-font-awesome-css'  href='https://thocaca.com/wp-content/themes/mh-magazine-lite/includes/font-awesome.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='addthis_all_pages-css'  href='https://thocaca.com/wp-content/plugins/addthis/frontend/build/addthis_wordpress_public.min.css?ver=5.5.10' type='text/css' media='all' />
<script type='text/javascript' id='monsterinsights-frontend-script-js-extra'>
/* <![CDATA[ */
var monsterinsights_frontend = {"js_events_tracking":"true","download_extensions":"doc,pdf,ppt,zip,xls,docx,pptx,xlsx","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"https:\/\/thocaca.com","hash_tracking":"false","ua":"UA-199874138-1","v4_id":""};
/* ]]> */
</script>
<script type='text/javascript' src='https://thocaca.com/wp-content/plugins/google-analytics-for-wordpress/assets/js/frontend-gtag.min.js?ver=8.3.0' id='monsterinsights-frontend-script-js'></script>
<script type='application/json' id='wpp-json'>
{"sampling_active":0,"sampling_rate":100,"ajax_url":"https:\/\/thocaca.com\/wp-json\/wordpress-popular-posts\/v1\/popular-posts","api_url":"https:\/\/thocaca.com\/wp-json\/wordpress-popular-posts","ID":0,"token":"23c6727a9c","lang":0,"debug":0}
</script>
<script type='text/javascript' src='https://thocaca.com/wp-content/plugins/wordpress-popular-posts/assets/js/wpp.min.js?ver=5.5.0' id='wpp-js-js'></script>
<script type='text/javascript' src='https://thocaca.com/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp' id='jquery-core-js'></script>
<script type='text/javascript' src='https://thocaca.com/wp-content/themes/mh-magazine-lite/js/scripts.js?ver=2.8.6' id='mh-scripts-js'></script>
<script type='text/javascript' src='https://s7.addthis.com/js/300/addthis_widget.js?ver=5.5.10#pubid=wp-65f832448689c2e796d8b222f6f181a5' id='addthis_widget-js'></script>
<link rel="https://api.w.org/" href="https://thocaca.com/wp-json/" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://thocaca.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://thocaca.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.5.10" />
        <style>
            @-webkit-keyframes bgslide {
                from {
                    background-position-x: 0;
                }
                to {
                    background-position-x: -200%;
                }
            }

            @keyframes bgslide {
                    from {
                        background-position-x: 0;
                    }
                    to {
                        background-position-x: -200%;
                    }
            }

            .wpp-widget-placeholder {
                margin: 0 auto;
                width: 60px;
                height: 3px;
                background: #dd3737;
                background: -webkit-gradient(linear, left top, right top, from(#dd3737), color-stop(10%, #571313), to(#dd3737));
                background: linear-gradient(90deg, #dd3737 0%, #571313 10%, #dd3737 100%);
                background-size: 200% auto;
                border-radius: 3px;
                -webkit-animation: bgslide 1s infinite linear;
                animation: bgslide 1s infinite linear;
            }
        </style>
        <!--[if lt IE 9]>
<script src="https://thocaca.com/wp-content/themes/mh-magazine-lite/js/css3-mediaqueries.js"></script>
<![endif]-->
      <meta name="onesignal" content="wordpress-plugin"/>
            <script>

      window.OneSignal = window.OneSignal || [];

      OneSignal.push( function() {
        OneSignal.SERVICE_WORKER_UPDATER_PATH = 'OneSignalSDKUpdaterWorker.js';
                      OneSignal.SERVICE_WORKER_PATH = 'OneSignalSDKWorker.js';
                      OneSignal.SERVICE_WORKER_PARAM = { scope: '/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/push/onesignal/' };
        OneSignal.setDefaultNotificationUrl("https://thocaca.com");
        var oneSignal_options = {};
        window._oneSignalInitOptions = oneSignal_options;

        oneSignal_options['wordpress'] = true;
oneSignal_options['appId'] = 'bdd7aa94-1c2e-4ab6-bfed-9536955c04d9';
oneSignal_options['allowLocalhostAsSecureOrigin'] = true;
oneSignal_options['welcomeNotification'] = { };
oneSignal_options['welcomeNotification']['title'] = "Chào mừng bạn quay trở lại với thocaca.com!";
oneSignal_options['welcomeNotification']['message'] = "Cảm ơn bạn đã đăng ký nha!^^";
oneSignal_options['path'] = "https://thocaca.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
oneSignal_options['safari_web_id'] = "web.onesignal.auto.5130fec1-dc87-4e71-b719-29a6a70279c4";
oneSignal_options['persistNotification'] = false;
oneSignal_options['promptOptions'] = { };
oneSignal_options['promptOptions']['actionMessage'] = "Bạn muốn nhận thông báo về hoạt động mới của Thỏ không?";
oneSignal_options['promptOptions']['acceptButtonText'] = "CÓ, ĐỒNG Ý!";
oneSignal_options['promptOptions']['cancelButtonText'] = "KHÔNG, CẢM ƠN!";
oneSignal_options['promptOptions']['siteName'] = "https://thocaca.com/";
oneSignal_options['notifyButton'] = { };
oneSignal_options['notifyButton']['enable'] = true;
oneSignal_options['notifyButton']['position'] = 'bottom-right';
oneSignal_options['notifyButton']['theme'] = 'default';
oneSignal_options['notifyButton']['size'] = 'medium';
oneSignal_options['notifyButton']['displayPredicate'] = function() {
              return OneSignal.isPushNotificationsEnabled()
                      .then(function(isPushEnabled) {
                          return !isPushEnabled;
                      });
            };
oneSignal_options['notifyButton']['showCredit'] = true;
oneSignal_options['notifyButton']['text'] = {};
oneSignal_options['notifyButton']['text']['tip.state.unsubscribed'] = 'Đăng ký để nhận thông báo!';
oneSignal_options['notifyButton']['text']['tip.state.subscribed'] = 'Bạn đã đăng ký nhận thông báo!';
oneSignal_options['notifyButton']['text']['tip.state.blocked'] = 'Bạn đã bị chặn nhận thông báo!';
oneSignal_options['notifyButton']['text']['message.action.subscribed'] = 'Cảm ơn bạn đã đăng ký nha!';
oneSignal_options['notifyButton']['text']['message.action.unsubscribed'] = 'Bạn sẽ không nhận được thông báo này nữa!';
oneSignal_options['notifyButton']['text']['dialog.main.button.subscribe'] = 'ĐĂNG KÝ';
oneSignal_options['notifyButton']['text']['dialog.main.button.unsubscribe'] = 'BỎ ĐĂNG KÝ';
                OneSignal.init(window._oneSignalInitOptions);
                OneSignal.showSlidedownPrompt();      });

      function documentInitOneSignal() {
        var oneSignal_elements = document.getElementsByClassName("OneSignal-prompt");

        var oneSignalLinkClickHandler = function(event) { OneSignal.push(['registerForPushNotifications']); event.preventDefault(); };        for(var i = 0; i < oneSignal_elements.length; i++)
          oneSignal_elements[i].addEventListener('click', oneSignalLinkClickHandler, false);
      }

      if (document.readyState === 'complete') {
           documentInitOneSignal();
      }
      else {
           window.addEventListener("load", function(event){
               documentInitOneSignal();
          });
      }
    </script>
<style type="text/css" id="custom-background-css">
body.custom-background { background-image: url("https://thocaca.com/wp-content/uploads/2020/01/background.jpg"); background-position: left top; background-size: auto; background-repeat: repeat; background-attachment: scroll; }
</style>
	<script data-cfasync="false" type="text/javascript">if (window.addthis_product === undefined) { window.addthis_product = "wpp"; } if (window.wp_product_version === undefined) { window.wp_product_version = "wpp-6.2.6"; } if (window.addthis_share === undefined) { window.addthis_share = {}; } if (window.addthis_config === undefined) { window.addthis_config = {"data_track_clickback":true,"ignore_server_config":true,"ui_atversion":300}; } if (window.addthis_layers === undefined) { window.addthis_layers = {}; } if (window.addthis_layers_tools === undefined) { window.addthis_layers_tools = []; } else {  } if (window.addthis_plugin_info === undefined) { window.addthis_plugin_info = {"info_status":"enabled","cms_name":"WordPress","plugin_name":"Share Buttons by AddThis","plugin_version":"6.2.6","plugin_mode":"WordPress","anonymous_profile_id":"wp-65f832448689c2e796d8b222f6f181a5","page_info":{"template":false,"post_type":""}}; } 
                    (function() {
                      var first_load_interval_id = setInterval(function () {
                        if (typeof window.addthis !== 'undefined') {
                          window.clearInterval(first_load_interval_id);
                          if (typeof window.addthis_layers !== 'undefined' && Object.getOwnPropertyNames(window.addthis_layers).length > 0) {
                            window.addthis.layers(window.addthis_layers);
                          }
                          if (Array.isArray(window.addthis_layers_tools)) {
                            for (i = 0; i < window.addthis_layers_tools.length; i++) {
                              window.addthis.layers(window.addthis_layers_tools[i]);
                            }
                          }
                        }
                     },1000)
                    }());
                </script><link rel="icon" href="https://thocaca.com/wp-content/uploads/2020/01/cropped-logo-2-32x32.png" sizes="32x32" />
<link rel="icon" href="https://thocaca.com/wp-content/uploads/2020/01/cropped-logo-2-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://thocaca.com/wp-content/uploads/2020/01/cropped-logo-2-180x180.png" />
<meta name="msapplication-TileImage" content="https://thocaca.com/wp-content/uploads/2020/01/cropped-logo-2-270x270.png" />
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '641436176421884');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=641436176421884&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
</head>
<body data-rsssl=1 id="mh-mobile" class="error404 custom-background mh-right-sb aa-prefix-thoca-" itemscope="itemscope" itemtype="http://schema.org/WebPage">
<div class="mh-container mh-container-outer">
<div class="mh-header-mobile-nav mh-clearfix"></div>
<header class="mh-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
	<div class="mh-container mh-container-inner mh-row mh-clearfix">
		<div class="mh-custom-header mh-clearfix">
<a class="mh-header-image-link" href="https://thocaca.com/" title="Chinh phục giảng đường" rel="home">
<img class="mh-header-image" src="https://thocaca.com/wp-content/uploads/2020/01/cropped-logo.png" height="163" width="323" alt="Chinh phục giảng đường" />
</a>
</div>
	</div>
	<div class="mh-main-nav-wrap">
		<nav class="mh-navigation mh-main-nav mh-container mh-container-inner mh-clearfix" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
			<div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li id="menu-item-14" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-14"><a href="https://thocaca.com/">TRANG CHỦ</a></li>
<li id="menu-item-15" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-15"><a href="https://thocaca.com/blog/category/kinh-nghiem/">KINH NGHIỆM</a></li>
<li id="menu-item-26" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26"><a href="https://thocaca.com/blog/category/review-truong-lop/">REVIEW TRƯỜNG LỚP</a></li>
<li id="menu-item-28" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28"><a href="https://thocaca.com/blog/category/tai-lieu/">TÀI LIỆU</a></li>
<li id="menu-item-30" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-30"><a href="https://thocaca.com/blog/category/de-thi/">ĐỀ THI</a></li>
<li id="menu-item-16" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-16"><a href="https://thocaca.com/blog/category/mon-hoc/">MÔN HỌC</a>
<ul class="sub-menu">
	<li id="menu-item-23" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-23"><a href="https://thocaca.com/blog/category/mon-hoc/toan/">TOÁN</a></li>
	<li id="menu-item-24" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-24"><a href="https://thocaca.com/blog/category/mon-hoc/vat-ly/">VẬT LÝ</a></li>
	<li id="menu-item-18" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18"><a href="https://thocaca.com/blog/category/mon-hoc/hoa-hoc/">HOÁ HỌC</a></li>
	<li id="menu-item-21" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-21"><a href="https://thocaca.com/blog/category/mon-hoc/sinh-hoc/">SINH HỌC</a></li>
	<li id="menu-item-20" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20"><a href="https://thocaca.com/blog/category/mon-hoc/ngu-van/">NGỮ VĂN</a></li>
	<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19"><a href="https://thocaca.com/blog/category/mon-hoc/lich-su/">LỊCH SỬ</a></li>
	<li id="menu-item-25" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-25"><a href="https://thocaca.com/blog/category/mon-hoc/dia-ly/">ĐỊA LÝ</a></li>
	<li id="menu-item-17" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17"><a href="https://thocaca.com/blog/category/mon-hoc/giao-duc-cong-dan/">GIÁO DỤC CÔNG DÂN</a></li>
	<li id="menu-item-22" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22"><a href="https://thocaca.com/blog/category/mon-hoc/tieng-anh/">TIẾNG ANH</a></li>
</ul>
</li>
<li id="menu-item-27" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27"><a href="https://thocaca.com/blog/category/sach-hay/">SÁCH HAY</a></li>
<li id="menu-item-29" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-29"><a href="https://thocaca.com/blog/category/thu-3-hoc-tro/">THỨ 3 HỌC TRÒ</a></li>
</ul></div>		</nav>
	</div>
</header><div class="mh-wrapper mh-clearfix">
	<div id="main-content" class="mh-content" role="main" itemprop="mainContentOfPage">
				<header class="page-header">
			<h1 class="page-title">
				Không tìm thấy trang (404)			</h1>
		</header>
		<div class="entry-content mh-widget">
			<div class="mh-box">
				<p>Không thấy nội dung tìm kiếm. Hãy thử tìm kiếm khác.</p>
			</div>
			<h4 class="mh-widget-title mh-404-search">
				<span class="mh-widget-title-inner">
					Tìm				</span>
			</h4>
			<form role="search" method="get" class="search-form" action="https://thocaca.com/">
				<label>
					<span class="screen-reader-text">Tìm kiếm cho:</span>
					<input type="search" class="search-field" placeholder="Tìm kiếm &hellip;" value="" name="s" />
				</label>
				<input type="submit" class="search-submit" value="Tìm kiếm" />
			</form>		</div>
		<div class="404-recent-articles mh-widget-col-2"><div class="mh-widget"><h4 class="mh-widget-title"><span class="mh-widget-title-inner">Bài viết mới</span></h4>			<ul class="mh-custom-posts-widget mh-clearfix">					<li class="post-4305 mh-custom-posts-item mh-custom-posts-small mh-clearfix">
						<figure class="mh-custom-posts-thumb">
							<a href="https://thocaca.com/blog/2022/08/23/sinh-hoc-11-chuong-1-chuyen-hoa-vat-chat-va-nang-luong/" title="Sinh học 11: Chương 1 Chuyển hóa vật chất và năng lượng!"><img width="80" height="60" src="https://thocaca.com/wp-content/uploads/2022/08/so-do-tu-duy-chuyen-hoa-vat-chat-va-nang-luong-80x60.jpg" class="attachment-mh-magazine-lite-small size-mh-magazine-lite-small wp-post-image" alt="" loading="lazy" srcset="https://thocaca.com/wp-content/uploads/2022/08/so-do-tu-duy-chuyen-hoa-vat-chat-va-nang-luong-80x60.jpg 80w, https://thocaca.com/wp-content/uploads/2022/08/so-do-tu-duy-chuyen-hoa-vat-chat-va-nang-luong-326x245.jpg 326w" sizes="(max-width: 80px) 100vw, 80px" />							</a>
						</figure>
						<div class="mh-custom-posts-header">
							<p class="mh-custom-posts-small-title">
								<a href="https://thocaca.com/blog/2022/08/23/sinh-hoc-11-chuong-1-chuyen-hoa-vat-chat-va-nang-luong/" title="Sinh học 11: Chương 1 Chuyển hóa vật chất và năng lượng!">
									Sinh học 11: Chương 1 Chuyển hóa vật chất và năng lượng!								</a>
							</p>
							<div class="mh-meta mh-custom-posts-meta">
								<span class="mh-meta-date updated"><i class="fa fa-clock-o"></i>23 Tháng Tám, 2022</span>
<span class="mh-meta-comments"><i class="fa fa-comment-o"></i><a class="mh-comment-count-link" href="https://thocaca.com/blog/2022/08/23/sinh-hoc-11-chuong-1-chuyen-hoa-vat-chat-va-nang-luong/#mh-comments">0</a></span>
							</div>
						</div>
					</li>					<li class="post-4301 mh-custom-posts-item mh-custom-posts-small mh-clearfix">
						<figure class="mh-custom-posts-thumb">
							<a href="https://thocaca.com/blog/2022/08/23/sinh-hoc-12-chuong-1-co-che-di-truyen-va-bien-di/" title="Sinh học 12: Chương 1 Cơ chế di truyền và biến dị"><img width="80" height="60" src="https://thocaca.com/wp-content/uploads/2022/08/Bien-di-to-hop-la-gi-Dac-diem-Vai-tro-80x60.jpg" class="attachment-mh-magazine-lite-small size-mh-magazine-lite-small wp-post-image" alt="" loading="lazy" srcset="https://thocaca.com/wp-content/uploads/2022/08/Bien-di-to-hop-la-gi-Dac-diem-Vai-tro-80x60.jpg 80w, https://thocaca.com/wp-content/uploads/2022/08/Bien-di-to-hop-la-gi-Dac-diem-Vai-tro-326x245.jpg 326w" sizes="(max-width: 80px) 100vw, 80px" />							</a>
						</figure>
						<div class="mh-custom-posts-header">
							<p class="mh-custom-posts-small-title">
								<a href="https://thocaca.com/blog/2022/08/23/sinh-hoc-12-chuong-1-co-che-di-truyen-va-bien-di/" title="Sinh học 12: Chương 1 Cơ chế di truyền và biến dị">
									Sinh học 12: Chương 1 Cơ chế di truyền và biến dị								</a>
							</p>
							<div class="mh-meta mh-custom-posts-meta">
								<span class="mh-meta-date updated"><i class="fa fa-clock-o"></i>23 Tháng Tám, 2022</span>
<span class="mh-meta-comments"><i class="fa fa-comment-o"></i><a class="mh-comment-count-link" href="https://thocaca.com/blog/2022/08/23/sinh-hoc-12-chuong-1-co-che-di-truyen-va-bien-di/#mh-comments">0</a></span>
							</div>
						</div>
					</li>					<li class="post-4297 mh-custom-posts-item mh-custom-posts-small mh-clearfix">
						<figure class="mh-custom-posts-thumb">
							<a href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-11/" title="[SÁCH]: Công phá toán 11"><img width="80" height="60" src="https://thocaca.com/wp-content/uploads/2022/08/cong-pha-toan-2_FB-80x60.png" class="attachment-mh-magazine-lite-small size-mh-magazine-lite-small wp-post-image" alt="" loading="lazy" srcset="https://thocaca.com/wp-content/uploads/2022/08/cong-pha-toan-2_FB-80x60.png 80w, https://thocaca.com/wp-content/uploads/2022/08/cong-pha-toan-2_FB-326x245.png 326w" sizes="(max-width: 80px) 100vw, 80px" />							</a>
						</figure>
						<div class="mh-custom-posts-header">
							<p class="mh-custom-posts-small-title">
								<a href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-11/" title="[SÁCH]: Công phá toán 11">
									[SÁCH]: Công phá toán 11								</a>
							</p>
							<div class="mh-meta mh-custom-posts-meta">
								<span class="mh-meta-date updated"><i class="fa fa-clock-o"></i>22 Tháng Tám, 2022</span>
<span class="mh-meta-comments"><i class="fa fa-comment-o"></i><a class="mh-comment-count-link" href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-11/#mh-comments">0</a></span>
							</div>
						</div>
					</li>					<li class="post-4293 mh-custom-posts-item mh-custom-posts-small mh-clearfix">
						<figure class="mh-custom-posts-thumb">
							<a href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-10/" title="[SÁCH]: Công phá toán 10"><img width="80" height="60" src="https://thocaca.com/wp-content/uploads/2022/08/212209510374-80x60.png" class="attachment-mh-magazine-lite-small size-mh-magazine-lite-small wp-post-image" alt="" loading="lazy" srcset="https://thocaca.com/wp-content/uploads/2022/08/212209510374-80x60.png 80w, https://thocaca.com/wp-content/uploads/2022/08/212209510374-326x245.png 326w" sizes="(max-width: 80px) 100vw, 80px" />							</a>
						</figure>
						<div class="mh-custom-posts-header">
							<p class="mh-custom-posts-small-title">
								<a href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-10/" title="[SÁCH]: Công phá toán 10">
									[SÁCH]: Công phá toán 10								</a>
							</p>
							<div class="mh-meta mh-custom-posts-meta">
								<span class="mh-meta-date updated"><i class="fa fa-clock-o"></i>22 Tháng Tám, 2022</span>
<span class="mh-meta-comments"><i class="fa fa-comment-o"></i><a class="mh-comment-count-link" href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-10/#mh-comments">0</a></span>
							</div>
						</div>
					</li>					<li class="post-4290 mh-custom-posts-item mh-custom-posts-small mh-clearfix">
						<figure class="mh-custom-posts-thumb">
							<a href="https://thocaca.com/blog/2022/08/21/hoa-hoc-12-chuong-1-este-lipit/" title="Hóa học 12: Chương 1 Este &#8211; Lipit"><img width="80" height="60" src="https://thocaca.com/wp-content/uploads/2022/08/1441272647Este-80x60.jpg" class="attachment-mh-magazine-lite-small size-mh-magazine-lite-small wp-post-image" alt="" loading="lazy" srcset="https://thocaca.com/wp-content/uploads/2022/08/1441272647Este-80x60.jpg 80w, https://thocaca.com/wp-content/uploads/2022/08/1441272647Este-300x225.jpg 300w, https://thocaca.com/wp-content/uploads/2022/08/1441272647Este-768x576.jpg 768w, https://thocaca.com/wp-content/uploads/2022/08/1441272647Este-678x509.jpg 678w, https://thocaca.com/wp-content/uploads/2022/08/1441272647Este-326x245.jpg 326w, https://thocaca.com/wp-content/uploads/2022/08/1441272647Este.jpg 960w" sizes="(max-width: 80px) 100vw, 80px" />							</a>
						</figure>
						<div class="mh-custom-posts-header">
							<p class="mh-custom-posts-small-title">
								<a href="https://thocaca.com/blog/2022/08/21/hoa-hoc-12-chuong-1-este-lipit/" title="Hóa học 12: Chương 1 Este &#8211; Lipit">
									Hóa học 12: Chương 1 Este &#8211; Lipit								</a>
							</p>
							<div class="mh-meta mh-custom-posts-meta">
								<span class="mh-meta-date updated"><i class="fa fa-clock-o"></i>21 Tháng Tám, 2022</span>
<span class="mh-meta-comments"><i class="fa fa-comment-o"></i><a class="mh-comment-count-link" href="https://thocaca.com/blog/2022/08/21/hoa-hoc-12-chuong-1-este-lipit/#mh-comments">0</a></span>
							</div>
						</div>
					</li>					<li class="post-4282 mh-custom-posts-item mh-custom-posts-small mh-clearfix">
						<figure class="mh-custom-posts-thumb">
							<a href="https://thocaca.com/blog/2022/08/05/toan-10-sach-giao-khoa-giai-bai-tap-toan-10-file-loai-sach-moi/" title="Toán 10: Sách giáo khoa + giải bài tập toán 10 (file loại sách mới)"><img width="80" height="60" src="https://thocaca.com/wp-content/uploads/2022/08/1-80x60.png" class="attachment-mh-magazine-lite-small size-mh-magazine-lite-small wp-post-image" alt="" loading="lazy" srcset="https://thocaca.com/wp-content/uploads/2022/08/1-80x60.png 80w, https://thocaca.com/wp-content/uploads/2022/08/1-678x509.png 678w, https://thocaca.com/wp-content/uploads/2022/08/1-326x245.png 326w" sizes="(max-width: 80px) 100vw, 80px" />							</a>
						</figure>
						<div class="mh-custom-posts-header">
							<p class="mh-custom-posts-small-title">
								<a href="https://thocaca.com/blog/2022/08/05/toan-10-sach-giao-khoa-giai-bai-tap-toan-10-file-loai-sach-moi/" title="Toán 10: Sách giáo khoa + giải bài tập toán 10 (file loại sách mới)">
									Toán 10: Sách giáo khoa + giải bài tập toán 10 (file loại sách mới)								</a>
							</p>
							<div class="mh-meta mh-custom-posts-meta">
								<span class="mh-meta-date updated"><i class="fa fa-clock-o"></i>5 Tháng Tám, 2022</span>
<span class="mh-meta-comments"><i class="fa fa-comment-o"></i><a class="mh-comment-count-link" href="https://thocaca.com/blog/2022/08/05/toan-10-sach-giao-khoa-giai-bai-tap-toan-10-file-loai-sach-moi/#mh-comments">0</a></span>
							</div>
						</div>
					</li>        	</ul></div>		</div>
	</div>
	<aside class="mh-widget-col-1 mh-sidebar" itemscope="itemscope" itemtype="http://schema.org/WPSideBar"><div id="search-3" class="mh-widget widget_search"><form role="search" method="get" class="search-form" action="https://thocaca.com/">
				<label>
					<span class="screen-reader-text">Tìm kiếm cho:</span>
					<input type="search" class="search-field" placeholder="Tìm kiếm &hellip;" value="" name="s" />
				</label>
				<input type="submit" class="search-submit" value="Tìm kiếm" />
			</form></div><div id="text-10" class="mh-widget widget_text">			<div class="textwidget"><p>&nbsp;</p>
<p><img loading="lazy" class="size-medium wp-image-3510 aligncenter" src="https://thocaca.com/wp-content/uploads/2021/09/23232-300x217.jpg" alt="" width="300" height="217" srcset="https://thocaca.com/wp-content/uploads/2021/09/23232-300x217.jpg 300w, https://thocaca.com/wp-content/uploads/2021/09/23232.jpg 594w" sizes="(max-width: 300px) 100vw, 300px" /><br />
Xin chào các bạn, mình là Thỏ, 18 tuổi lần thứ 8. Hiện là công chức nhà nước và blogger. Cảm ơn các bạn đã ghé qua blog của Thỏ nha! Nếu cần liên lạc gì với mình, xin vui lòng click: <a href="https://www.facebook.com/thocaca247" target="_blank" rel="noopener noreferrer">TẠI ĐÂY!</a></p>
</div>
		</div><div id="text-13" class="mh-widget widget_text"><h4 class="mh-widget-title"><span class="mh-widget-title-inner">TÀI LIỆU THEO KHỐI LỚP</span></h4>			<div class="textwidget"><p><strong><em>      <a href="https://thocaca.com/?s=l%E1%BB%9Bp+10">LỚP 10</a>   </em></strong>                <em><strong> <a href="https://thocaca.com/?s=l%E1%BB%9Bp+11">LỚP 11</a>   </strong> </em>            <em><strong>    <a href="https://thocaca.com/?s=l%E1%BB%9Bp+12">LỚP 12</a></strong></em></p>
</div>
		</div><div id="custom_html-2" class="widget_text mh-widget widget_custom_html"><div class="textwidget custom-html-widget"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4236244253293148"
     crossorigin="anonymous"></script>
<!-- quảng cáo sibar -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4236244253293148"
     data-ad-slot="8084651530"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script></div></div>
<div id="wpp-3" class="mh-widget popular-posts">
<h4 class="mh-widget-title"><span class="mh-widget-title-inner">Bài viết nổi bật trong ngày</span></h4>


<ul class="wpp-list wpp-list-with-thumbnails">
<li>
<a href="https://thocaca.com/blog/2020/12/14/review-giao-vien-toan-online/" target="_self"><img src="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/1997-featured-75x75.jpg" width="75" height="75" alt="" class="wpp-thumbnail wpp_featured wpp_cached_thumb" loading="lazy" /></a>
<a href="https://thocaca.com/blog/2020/12/14/review-giao-vien-toan-online/" class="wpp-post-title" target="_self">Review một số giáo viên dạy Toán online nổi tiếng thời điểm hiện tại</a>
 <span class="wpp-meta post-stats"><span class="wpp-views">792 views</span></span>
</li>
<li>
<a href="https://thocaca.com/blog/2021/07/31/tai-lieu-van-full-tac-pham-sach-xanh-cua-co-tran-thuy-duong/" target="_self"><img src="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3038-featured-75x75.png" srcset="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3038-featured-75x75.png, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3038-featured-75x75@1.5x.png 1.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3038-featured-75x75@2x.png 2x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3038-featured-75x75@2.5x.png 2.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3038-featured-75x75@3x.png 3x"  width="75" height="75" alt="" class="wpp-thumbnail wpp_featured wpp_cached_thumb" loading="lazy" /></a>
<a href="https://thocaca.com/blog/2021/07/31/tai-lieu-van-full-tac-pham-sach-xanh-cua-co-tran-thuy-duong/" class="wpp-post-title" target="_self">Tài liệu Văn full tác phẩm + Sách xanh của cô Trần Thùy Dương</a>
 <span class="wpp-meta post-stats"><span class="wpp-views">731 views</span></span>
</li>
<li>
<a href="https://thocaca.com/blog/2021/07/25/review-mot-so-thay-vat-ly-online-noi-tieng-thoi-diem-hien-tai/" target="_self"><img src="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/2989-featured-75x75.jpg" srcset="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/2989-featured-75x75.jpg, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/2989-featured-75x75@1.5x.jpg 1.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/2989-featured-75x75@2x.jpg 2x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/2989-featured-75x75@2.5x.jpg 2.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/2989-featured-75x75@3x.jpg 3x"  width="75" height="75" alt="" class="wpp-thumbnail wpp_featured wpp_cached_thumb" loading="lazy" /></a>
<a href="https://thocaca.com/blog/2021/07/25/review-mot-so-thay-vat-ly-online-noi-tieng-thoi-diem-hien-tai/" class="wpp-post-title" target="_self">Review một số thầy Vật lý online nổi tiếng thời điểm hiện tại</a>
 <span class="wpp-meta post-stats"><span class="wpp-views">671 views</span></span>
</li>
<li>
<a href="https://thocaca.com/blog/2021/08/04/ngu-van-mot-lo-tai-lieu-cua-trang-thuong-thuc-sach-tts/" target="_self"><img src="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3119-featured-75x75.jpg" srcset="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3119-featured-75x75.jpg, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3119-featured-75x75@1.5x.jpg 1.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3119-featured-75x75@2x.jpg 2x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3119-featured-75x75@2.5x.jpg 2.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3119-featured-75x75@3x.jpg 3x"  width="75" height="75" alt="" class="wpp-thumbnail wpp_featured wpp_cached_thumb" loading="lazy" /></a>
<a href="https://thocaca.com/blog/2021/08/04/ngu-van-mot-lo-tai-lieu-cua-trang-thuong-thuc-sach-tts/" class="wpp-post-title" target="_self">Ngữ văn: Một lố tài liệu của trang Thưởng thức sách (TTS)</a>
 <span class="wpp-meta post-stats"><span class="wpp-views">579 views</span></span>
</li>
<li>
<a href="https://thocaca.com/blog/2021/09/05/ngu-van-tai-lieu-thuong-thuc-sach-part-2/" target="_self"><img src="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3348-featured-75x75.jpg" srcset="https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3348-featured-75x75.jpg, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3348-featured-75x75@1.5x.jpg 1.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3348-featured-75x75@2x.jpg 2x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3348-featured-75x75@2.5x.jpg 2.5x, https://thocaca.com/wp-content/uploads/wordpress-popular-posts/3348-featured-75x75@3x.jpg 3x"  width="75" height="75" alt="" class="wpp-thumbnail wpp_featured wpp_cached_thumb" loading="lazy" /></a>
<a href="https://thocaca.com/blog/2021/09/05/ngu-van-tai-lieu-thuong-thuc-sach-part-2/" class="wpp-post-title" target="_self">Ngữ văn: Tài liệu Thưởng thức sách (PART 2)</a>
 <span class="wpp-meta post-stats"><span class="wpp-views">553 views</span></span>
</li>
</ul>

</div>
<div id="custom_html-3" class="widget_text mh-widget widget_custom_html"><div class="textwidget custom-html-widget"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4236244253293148"
     crossorigin="anonymous"></script>
<!-- quảng cáo sibar 2 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4236244253293148"
     data-ad-slot="5128149850"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script></div></div></aside></div>
<footer class="mh-footer" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
<div class="mh-container mh-container-inner mh-footer-widgets mh-row mh-clearfix">
<div class="mh-col-1-4 mh-widget-col-1 mh-footer-4-cols  mh-footer-area mh-footer-1">

		<div id="recent-posts-3" class="mh-footer-widget widget_recent_entries">
		<h6 class="mh-widget-title mh-footer-widget-title"><span class="mh-widget-title-inner mh-footer-widget-title-inner">Bài viết gần đây</span></h6>
		<ul>
											<li>
					<a href="https://thocaca.com/blog/2022/08/23/sinh-hoc-11-chuong-1-chuyen-hoa-vat-chat-va-nang-luong/">Sinh học 11: Chương 1 Chuyển hóa vật chất và năng lượng!</a>
									</li>
											<li>
					<a href="https://thocaca.com/blog/2022/08/23/sinh-hoc-12-chuong-1-co-che-di-truyen-va-bien-di/">Sinh học 12: Chương 1 Cơ chế di truyền và biến dị</a>
									</li>
											<li>
					<a href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-11/">[SÁCH]: Công phá toán 11</a>
									</li>
											<li>
					<a href="https://thocaca.com/blog/2022/08/22/sach-cong-pha-toan-10/">[SÁCH]: Công phá toán 10</a>
									</li>
											<li>
					<a href="https://thocaca.com/blog/2022/08/21/hoa-hoc-12-chuong-1-este-lipit/">Hóa học 12: Chương 1 Este &#8211; Lipit</a>
									</li>
											<li>
					<a href="https://thocaca.com/blog/2022/08/05/toan-10-sach-giao-khoa-giai-bai-tap-toan-10-file-loai-sach-moi/">Toán 10: Sách giáo khoa + giải bài tập toán 10 (file loại sách mới)</a>
									</li>
											<li>
					<a href="https://thocaca.com/blog/2022/06/20/bo-15-de-toan-tri-sai-ngu-nhom-pi/">Bộ 15 đề toán trị sai ngu &#8211; nhóm Pi</a>
									</li>
					</ul>

		</div></div>
<div class="mh-col-1-4 mh-widget-col-1 mh-footer-4-cols  mh-footer-area mh-footer-2">
<div id="text-4" class="mh-footer-widget widget_text"><h6 class="mh-widget-title mh-footer-widget-title"><span class="mh-widget-title-inner mh-footer-widget-title-inner">Thông tin liên hệ</span></h6>			<div class="textwidget"><p>Mọi đóng góp, ý kiến phản hồi, đề nghị liên hệ theo gmail hoặc Facebook cá nhân của mình như sau:</p>
<p>Email: thocaca.com@gmail.com</p>
<p>Facebook: <a href="https://www.facebook.com/thocaca247/">Thỏ Ca Ca</a></p>
<p>Bản thân mình đi sưu tầm tài liệu trên các trang mạng xã hội do mọi người đăng tải công khai. Chính vì thế, mình cũng không thể biết được hết những tài liệu nào có bản quyền hay không. Nếu mình có đăng những tài liệu bản quyền, mọi người liên hệ mình ngay để mình xóa nhé!</p>
</div>
		</div></div>
<div class="mh-col-1-4 mh-widget-col-1 mh-footer-4-cols  mh-footer-area mh-footer-3">
<div id="text-9" class="mh-footer-widget widget_text"><h6 class="mh-widget-title mh-footer-widget-title"><span class="mh-widget-title-inner mh-footer-widget-title-inner">Lưu ý bạn đọc</span></h6>			<div class="textwidget"><p>Mình là người đi sưu tầm tài liệu. Không phải là người soạn thảo hoặc chủ sở hữu của tài liệu. Vậy nên mọi người chú ý những nội dung sau:</p>
<ol>
<li>Mình không đăng tải những tài liệu bản quyền. Nếu có thì do khách quan nhầm lẫn!</li>
<li>Những tài liệu mà mọi người thấy hay, đề nghị mọi người tải về máy của mình ngay. Mình không biết bao giờ chủ sở hữu của nó sẽ xóa đâu!</li>
<li>Cần tài liệu gì mọi người có thể liên hệ trực tiếp mình qua facebook cá nhân. Mình sẽ tìm và đăng lên web hoặc gửi riêng tin nhắn!</li>
</ol>
</div>
		</div></div>
<div class="mh-col-1-4 mh-widget-col-1 mh-footer-4-cols  mh-footer-area mh-footer-4">
<div id="text-5" class="mh-footer-widget widget_text"><h6 class="mh-widget-title mh-footer-widget-title"><span class="mh-widget-title-inner mh-footer-widget-title-inner">Lời kết</span></h6>			<div class="textwidget"><p>Những ngày tháng đi tìm tài liệu cho đứa em họ đã cho mình một trải nghiệm khá là vất vả. Bởi lẽ muốn xin được tài liệu, phải ngồi xem quảng cáo, bình luận, like, share đủ trò thì người ta mới cho. Thậm chí làm xong mấy thứ trên vẫn không cho cơ. Thành ra mình nghĩ ngay đến việc xây dựng một trang web chia sẻ tài liệu, giúp các bạn học sinh có thể tìm tài liệu một cách dễ dàng và hoàn toàn miễn phí. Và hơn hơn hết, mình sẽ là cầu nối, giúp các bạn đến gần hơn với cảnh cổng Đại học. Chúc các bạn thành công trong kì thi sắp tới. Mình tin các bạn sẽ làm được điều đó!</p>
</div>
		</div></div>
</div>
</footer>

</div><!-- .mh-container-outer -->
<script type='text/javascript' src='https://thocaca.com/wp-includes/js/wp-embed.min.js?ver=5.5.10' id='wp-embed-js'></script>
<script type='text/javascript' src='https://cdn.onesignal.com/sdks/OneSignalSDK.js?ver=5.5.10' async='async' id='remote_sdk-js'></script>
<script>!function(){window.advanced_ads_ready_queue=window.advanced_ads_ready_queue||[],advanced_ads_ready_queue.push=window.advanced_ads_ready;for(var d=0,a=advanced_ads_ready_queue.length;d<a;d++)advanced_ads_ready(advanced_ads_ready_queue[d])}();</script></body>
</html>