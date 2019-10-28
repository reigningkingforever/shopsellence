"use strict";function yp_visible_function(e,t,n,c){var r=window;if(!(e.length<1)){var l=1<e.length?e.eq(0):e,o=l,i=window.innerWidth,a=window.innerHeight,s=(c=c||"both",!0!==n||o.offsetWidth*o.offsetHeight);if("function"==typeof o.getBoundingClientRect){var d=o.getBoundingClientRect(),u=0<=d.top&&d.top<a,_=0<d.bottom&&d.bottom<=a,f=0<=d.left&&d.left<i,m=0<d.right&&d.right<=i,p=t?u||_:u&&_,g=t?f||m:f&&m;if("both"===c)return s&&p&&g;if("vertical"===c)return s&&p;if("horizontal"===c)return s&&g}else{var h=r.scrollTop,y=h+a,w=r.scrollLeft,v=w+i,S=l.offsetTop,b=S+parseFloat(getComputedStyle(l,null).height.replace("px","")),k=l.offsetLeft,A=k+parseFloat(getComputedStyle(l,null).width.replace("px","")),N=!0===t?b:S,q=!0===t?S:b,M=!0===t?A:k,E=!0===t?k:A;if("both"===c)return!!s&&q<=y&&h<=N&&E<=v&&w<=M;if("vertical"===c)return!!s&&q<=y&&h<=N;if("horizontal"===c)return!!s&&E<=v&&w<=M}}}function yp_add_class(e,t){-1==e.className.split(" ").indexOf(t)&&(e.className+=" "+t)}function get_all_selectors(e){return""!=e&&((e=e.replace(/\}\}/g,"}")).split("{").length==e.split("}").length&&array_cleaner((e=e.toString().replace(/\}\,/g,"}")).replace(/\{(.*?)\}/g,"|BREAK|").split("|BREAK|")))}function get_minimized_css(e,t){return 0==e||1==e?"":(e=filter_bad_queries(e=(e=(e=(e=e.replace(/(\r\n|\n|\r)/g,"").replace(/\t/g,"")).replace(/\/\*(.*?)\*\//g,"")).replace(/\}\s+\}/g,"}}").replace(/\s+\{/g,"{")).replace(/\s+\}/g,"}").replace(/\{\s+/g,"{")),!0===t&&(e=e.replace(/@media(.*?)\}\}/g,"").replace(/@?([a-zA-Z0-9_-]+)?keyframes(.*?)\}\}/g,"").replace(/@font-face(.*?)\}\}/g,"").replace(/@import(.*?)\;/g,"").replace(/@charset(.*?)\;/g,"")),e)}function filter_bad_queries(e){return e.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035\u201C\u201D]/g,"")}function array_cleaner(e){var t,n,c=[];for(t=0;t<e.length;t++)n=e[t],-1===c.indexOf(n)&&c.push(n);return c}function get_css_data(){if(null==document.querySelectorAll("style#yellow-pencil,style#yp-live-preview,link#yp-custom-css"))return!1;var e="";return null==document.querySelector("link#yp-custom-css")?null!=document.querySelector("style#yellow-pencil")&&(e+=document.querySelector("style#yellow-pencil").innerHTML):e=get_custom_CSS(),null!=document.querySelector("style#yp-live-preview")&&(e+=document.querySelector("style#yp-live-preview").innerHTML),e}function get_matches_selectors(e){var t="";0!=window.cachedNormalSelectors&&0!=window.cachedMediaSelectors||(t=get_css_data()),0==window.cachedNormalSelectors&&(window.cachedNormalSelectors=get_all_selectors(get_minimized_css(t,!0)));var n,c=window.cachedNormalSelectors,r=[];for(n=0;n<c.length;n++)(u=c[n]).match(/\}|\{|\;/)||0<=u.indexOf(e)&&""!=u&&r.push(u.replace(e,""));0==window.cachedMediaSelectors&&(window.cachedMediaSelectors=get_minimized_css(t,!1).match(/@media(.*?){(.*?)}}/g));var l=window.cachedMediaSelectors;if(null!=l)for(var o="",i="",a=0;a<l.length;a++){var s=l[a];o=s.match(/@media(.*?){/g).toString().replace(/\{/g,"").replace(/@media /g,"").replace(/@media/g,""),i=get_all_selectors(s.toString().replace(/@media(.*?){/g,""));for(var d=0;d<i.length;d++){var u;(u=i[d]).match(/\}|\{|\;/)||window.matchMedia(o).matches&&0<=u.indexOf(e)&&""!=u&&r.push(u.replace(e,""))}}return r.toString()}function click_detect(){var e,t;if(""==get_matches_selectors(".yp_click"))return!1;t=document.querySelectorAll(get_matches_selectors(".yp_click"));for(var n=0;n<t.length;n++)(e=t[n]).onclick=function(){yp_add_class(e,"yp_click"),"backwards"==e.style.animationFillMode&&e.addEventListener("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){e.className=e.className.replace(/\byp_click\b/g,"")})}}function hover_detect(){var e,t;if(""==get_matches_selectors(".yp_hover"))return!1;t=document.querySelectorAll(get_matches_selectors(".yp_hover"));for(var n=0;n<t.length;n++)(e=t[n]).onmouseenter=function(){yp_add_class(e,"yp_hover"),"backwards"==e.style.animationFillMode&&e.addEventListener("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){e.className=e.className.replace(/\byp_hover\b/g,"")})}}function focus_detect(){var e,t;if(""==get_matches_selectors(".yp_focus"))return!1;t=document.querySelectorAll(get_matches_selectors(".yp_focus"));for(var n=0;n<t.length;n++)(e=t[n]).onfocus=function(){yp_add_class(e,"yp_focus")},e.onblur=function(){"backwards"==e.style.animationFillMode&&(e.className=e.className.replace(/\byp_focus\b/g,""))}}function onscreen_detect(){var e,t;if(""==get_matches_selectors(".yp_onscreen"))return!1;t=document.querySelectorAll(get_matches_selectors(".yp_onscreen"));for(var n=0;n<t.length;n++)yp_visible_function(e=t[n],!0)&&yp_add_class(e,"yp_onscreen")}function setAnimTriggers(){document.addEventListener("DOMContentLoaded",function(){onscreen_detect(),click_detect(),hover_detect(),focus_detect()}),window.onresize=function(){onscreen_detect()},window.onscroll=function(){onscreen_detect()}}function get_custom_CSS(){var e,t,n,c="";for(t=0;t<document.styleSheets.length;t++)if(null!=(e=document.styleSheets[t]).href&&-1!=e.ownerNode.outerHTML.indexOf("yp-custom-css"))for(n=0;n<e.cssRules.length;n++)c+=e.cssRules[n].cssText;return c}window.cachedNormalSelectors=!1,window.cachedMediaSelectors,setAnimTriggers();