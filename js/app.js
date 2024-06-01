document.addEventListener("DOMContentLoaded",function(){volantis.requestAnimationFrame(()=>{VolantisApp.init(),VolantisApp.subscribe(),VolantisFancyBox.init(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push(()=>{VolantisApp.pjaxReload(),VolantisFancyBox.init(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL()},"app.js"),volantis.pjax.send(()=>{volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()},"app.js")})});const locationHash=()=>{if(window.location.hash){var t=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-");let e=document.getElementById(t);e&&setTimeout(()=>{window.location.hash.startsWith("#fn")?volantis.scroll.to(e,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant",observer:!0}):volantis.scroll.to(e,{addTop:5,behavior:"instant",observer:!0})},1e3)}},VolantisApp=(Object.freeze(locationHash),(()=>{const s={};let o=80,e=(s.init=()=>{volantis.dom.header&&(o=volantis.dom.header.clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(s.setGlobalHeaderMenuEvent(),s.setHeader(),s.setHeaderSearch())},volantis.scroll.push(s.scrollEventCallBack,"scrollEventCallBack")},s.event=()=>{volantis.dom.$(document.getElementById("scroll-down"))?.on("click",function(){s.scrolltoElement(volantis.dom.bodyAnchor)});var e=document.querySelector("#l_side");e&&!e.querySelectorAll("section").length&&document.querySelector("#l_main").classList.add("no_sidebar"),(volantis.GLOBAL_CONFIG.sidebar.for_page.includes("webinfo")||volantis.GLOBAL_CONFIG.sidebar.for_post.includes("webinfo"))&&(e=volantis.GLOBAL_CONFIG.sidebar.webinfo.lastupd,document.getElementById("last-update-show"))&&e.enable&&e.friendlyShow&&(document.getElementById("last-update-show").innerHTML=s.utilTimeAgo(volantis.GLOBAL_CONFIG.lastupdate)),document.getElementById("webinfo-runtime-count")&&(e=new Date(volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.data),e=(new Date).getTime()-e.getTime(),e=Math.floor(e/864e5),document.getElementById("webinfo-runtime-count").innerHTML=e+" "+volantis.GLOBAL_CONFIG.sidebar.webinfo.runtime.unit),document.body.oncopy=function(){s.messageCopyright()}},s.restData=()=>{o=volantis.dom.header?volantis.dom.header.clientHeight+16:80},s.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},s.scrolltoElement=(e,t=o)=>{volantis.scroll.to(e,{top:e.offsetTop-t})},s.scrollEventCallBack=()=>{var e=volantis.dom.bodyAnchor.offsetTop-o,t=volantis.scroll.getScrollTop();volantis.dom.topBtn&&(t>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),0<volantis.scroll.del?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(-1<t-e?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(0<volantis.scroll.del&&100<t?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList)&&volantis.dom.mPhoneList.forEach(function(e){volantis.dom.$(e).hide()})},s.setScrollAnchor=()=>{volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click(e=>{e.preventDefault(),e.stopPropagation(),s.scrolltoElement(volantis.dom.bodyAnchor),e.stopImmediatePropagation()})},s.setHeader=()=>{pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(document.title.split(" - ")[0]),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click(e=>{e.preventDefault(),e.stopPropagation(),s.scrolltoElement(volantis.dom.commentTarget),e.stopImmediatePropagation()}):volantis.dom.comment.style.display="none",volantis.isMobile)&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click(e=>{e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")}),volantis.dom.$(document).click(function(e){e.stopPropagation(),volantis.dom.tocTarget&&volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")})):volantis.dom.toc.style.display="none")},s.setHeaderMenuSelection=()=>{volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach(e=>{var t=volantis.dom.$(e).find("li a.active"),t=(t&&t.removeClass("active"),volantis.dom.$(e).find("div a.active"));t&&t.removeClass("active")});var t=location.pathname.replace(/\/|%|\./g,""),e=(t=0==t.length?"home":t).match(/page\d{0,}$/g),e=(e&&(e=e[0],t=t.split(e)[0]),t.match(/index.html/));e&&(e=e[0],t=t.split(e)[0]),(t=t.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach(e=>{e=e.querySelector("[active-action=action-"+t+"]");e&&volantis.dom.$(e).addClass("active")})},s.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach(function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click(function(e){e.stopPropagation();let t="";if(Array.from(e.currentTarget.children).some(e=>{e.classList.contains("s-menu")?t="menu":e.classList.contains("menuitem")&&(t="item")}),"item"===t){e.currentTarget.parentElement.childNodes.forEach(function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach(function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()})});var o=e.currentTarget.children;for(let e=0;e<o.length;e++){var n=o[e];"menu"===volantis.dom.$(n).title?volantis.dom.$(n).style.display="flex":volantis.dom.$(n).show()}}else{e=document.querySelector(".switcher .menu-phone");"none"===window.getComputedStyle(e).display?volantis.dom.$(e).show():(volantis.dom.$(e).hide(),document.querySelector(".switcher .menu-phone").childNodes.forEach(function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach(function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()})}))}},0)}):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach(function(e){volantis.dom.$(e.parentElement).click(function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach(function(e){volantis.dom.$(e).hide()})},0)}),s.setPageHeaderMenuEvent()},s.setPageHeaderMenuEvent=()=>{volantis.isMobile&&volantis.dom.$(document).click(function(e){volantis.dom.mPhoneList.forEach(function(e){volantis.dom.$(e).hide()})})},s.setHeaderSearch=()=>{volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click(function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")},!1),volantis.dom.$(document).click(function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")},!1),volantis.dom.search.click(function(e){e.stopPropagation()},!1))},s.setTabs=()=>{var e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach(function(e){e.querySelectorAll("a").forEach(function(e){volantis.dom.$(e).on("click",e=>{e.preventDefault(),e.stopPropagation();var t=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(e.target.className).addClass("active"),!1})})})},s.footnotes=()=>{let o=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");o.forEach(function(e,t){o[t].click=()=>{},volantis.dom.$(e).on("click",e=>{e.stopPropagation(),e.preventDefault();e=decodeURI(e.target.hash.split("#")[1]).replace(/\ /g,"-"),e=document.getElementById(e);e&&volantis.scroll.to(e,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"})})})},s.utilCopyCode=e=>{document.querySelectorAll(e).forEach(n=>{n.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fa-solid fa-copy"></i><span>COPY</span></button>');const a=n.previousSibling;a.onclick=e=>{e.stopPropagation();const t=a.querySelector("i"),o=a.querySelector("span");n.focus();e=new Range,e.selectNodeContents(n),document.getSelection().removeAllRanges(),document.getSelection().addRange(e),e=document.getSelection().toString();s.utilWriteClipText(e).then(()=>{s.messageCopyright(),a.classList.add("copied"),t.classList.remove("fa-copy"),t.classList.add("fa-check-circle"),o.innerText="COPIED",setTimeout(()=>{t.classList.remove("fa-check-circle"),t.classList.add("fa-copy"),o.innerText="COPY"},2e3)}).catch(e=>{VolantisApp.message("系统提示",e,{icon:"fa fa-exclamation-circle red"}),a.classList.add("copied-failed"),t.classList.remove("fa-copy"),t.classList.add("fa-exclamation-circle"),o.innerText="COPY FAILED",setTimeout(()=>{t.classList.remove("fa-exclamation-circle"),t.classList.add("fa-copy"),o.innerText="COPY"})})}})},s.utilWriteClipText=n=>navigator.clipboard.writeText(n).then(()=>Promise.resolve()).catch(e=>{var t=document.createElement("textarea");t.setAttribute("readonly","readonly"),document.body.appendChild(t),t.innerHTML=n,t.select();try{var o=document.execCommand("copy");return document.body.removeChild(t),o&&"unsuccessful"!==o?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(t),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}),s.utilTimeAgo=e=>{var t=(new Date).getTime()-e,o=t/6e4,n=t/36e5,a=t/864e5,s=t/6048e5,i=t/2592e6;return result=t<0?"":1<=i&&i<7?" "+parseInt(i)+" 月前":1<=s&&s<4?" "+parseInt(s)+" 周前":1<=a&&a<7?" "+parseInt(a)+" 天前":1<=n&&n<24?" "+parseInt(n)+" 小时前":1<=o&&o<60?" "+parseInt(o)+" 分钟前":0<=t&&t<=6e4?"刚刚":((i=new Date).setTime(e),s=i.getFullYear(),a=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1,n=i.getDate()<10?"0"+i.getDate():i.getDate(),i.getHours()<10?i.getHours():i.getHours(),i.getMinutes()<10?i.getMinutes():i.getMinutes(),i.getSeconds()<10?i.getSeconds():i.getSeconds(),s+"-"+a+"-"+n)},s.message=(e,t,o={},n=null)=>{function a(e,t,o,n){var{icon:o,time:a,position:s,transitionIn:i,transitionOut:l,messageColor:r,titleColor:c,backgroundColor:d,zindex:m,displayMode:u}=o;iziToast.show({layout:"2",icon:"Fontawesome",closeOnEscape:"true",displayMode:u||"replace",transitionIn:i||volantis.GLOBAL_CONFIG.plugins.message.transitionIn,transitionOut:l||volantis.GLOBAL_CONFIG.plugins.message.transitionOut,messageColor:r||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:c||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:d||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:m||volantis.GLOBAL_CONFIG.plugins.message.zindex,icon:o||volantis.GLOBAL_CONFIG.plugins.message.icon.default,timeout:a||volantis.GLOBAL_CONFIG.plugins.message.time.default,position:s||volantis.GLOBAL_CONFIG.plugins.message.position,title:e,message:t,onClosed:()=>{n&&n()}})}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,()=>{a(e,t,o,n)})):a(e,t,o,n)},s.question=(e,t,o={},n=null,a=null,s=null)=>{function i(e,t,o,n,a,s){const{icon:i,time:l,transitionOut:r,messageColor:c,titleColor:d,backgroundColor:m,zindex:u}=o;iziToast.question({id:"question",icon:"Fontawesome",close:!1,overlay:!0,displayMode:"once",position:"center",messageColor:c||volantis.GLOBAL_CONFIG.plugins.message.messageColor,titleColor:d||volantis.GLOBAL_CONFIG.plugins.message.titleColor,backgroundColor:m||volantis.GLOBAL_CONFIG.plugins.message.backgroundColor,zindex:u||volantis.GLOBAL_CONFIG.plugins.message.zindex,icon:i||volantis.GLOBAL_CONFIG.plugins.message.icon.quection,timeout:l||volantis.GLOBAL_CONFIG.plugins.message.time.quection,title:e,message:t,buttons:[["<button><b>是</b></button>",(e,t)=>{e.hide({transitionOut:r||"fadeOut"},t,"button"),n&&n(e,t)}],["<button><b>否</b></button>",(e,t)=>{e.hide({transitionOut:r||"fadeOut"},t,"button"),a&&a(e,t)}]],onClosed:(e,t,o)=>{s&&s(e,t,o)}})}"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,()=>{i(e,t,o,n,a,s)})):i(e,t,o,n,a,s)},s.hideMessage=(e=null)=>{const t=document.querySelector(".iziToast");function o(e){iziToast.hide({},t),e&&e()}t?"undefined"==typeof iziToast?(volantis.css(volantis.GLOBAL_CONFIG.plugins.message.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.message.js,()=>{o(e)})):o(e):e&&e()},0);return s.messageCopyright=()=>{volantis.GLOBAL_CONFIG.plugins.message.enable&&volantis.GLOBAL_CONFIG.plugins.message.copyright.enable&&e<1&&(e++,VolantisApp.message(volantis.GLOBAL_CONFIG.plugins.message.copyright.title,volantis.GLOBAL_CONFIG.plugins.message.copyright.message,{icon:volantis.GLOBAL_CONFIG.plugins.message.copyright.icon,transitionIn:"flipInX",transitionOut:"flipOutX",displayMode:1}))},{init:()=>{s.init(),s.event()},subscribe:()=>{s.setIsMobile(),s.setHeader(),s.setHeaderMenuSelection(),s.setGlobalHeaderMenuEvent(),s.setHeaderSearch(),s.setScrollAnchor(),s.setTabs(),s.footnotes()},pjaxReload:()=>{s.event(),s.restData(),s.setHeader(),s.setHeaderMenuSelection(),s.setPageHeaderMenuEvent(),s.setScrollAnchor(),s.setTabs(),s.footnotes(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach(function(e){e.removeAttribute("style")}),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),e=0},utilCopyCode:s.utilCopyCode,utilWriteClipText:s.utilWriteClipText,utilTimeAgo:s.utilTimeAgo,message:s.message,question:s.question,hideMessage:s.hideMessage,messageCopyright:s.messageCopyright,scrolltoElement:s.scrolltoElement}})()),VolantisFancyBox=(Object.freeze(VolantisApp),(()=>{const o={loadFancyBox:e=>{volantis.css(volantis.GLOBAL_CONFIG.plugins.fancybox.css),volantis.js(volantis.GLOBAL_CONFIG.plugins.fancybox.js).then(()=>{e&&e()})},init:(e=!0,t=o.groupBind)=>{!document.querySelector(".md .gallery img, .fancybox")&&e||("undefined"==typeof Fancybox?o.loadFancyBox(t):t())},elementHandling:(e,o)=>{document.querySelectorAll(e).forEach(e=>{var t;e.hasAttribute("fancybox")||(e.setAttribute("fancybox",""),(t=document.createElement("a")).setAttribute("href",e.src),t.setAttribute("data-caption",e.alt),t.setAttribute("data-fancybox",o),t.classList.add("fancybox"),t.append(e.cloneNode()),e.replaceWith(t))})},bind:e=>{o.init(!1,()=>{Fancybox.bind(e,{groupAll:!0,Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(e,t,o){return o.$trigger.alt||null}})})},groupBind:(e=null)=>{const t=new Set;document.querySelectorAll(".gallery").forEach(e=>{e.querySelector("img")&&t.add(e.getAttribute("data-group")||"default")}),e&&t.add(e);for(const o of t)Fancybox.unbind('[data-fancybox="'+o+'"]'),Fancybox.bind('[data-fancybox="'+o+'"]',{Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1}})}};return{init:o.init,bind:o.bind,groupBind:(e,t="default")=>{try{o.elementHandling(e,t),o.init(!1,()=>{o.groupBind(t)})}catch(e){console.error(e)}}}})()),highlightKeyWords=(Object.freeze(VolantisFancyBox),(()=>{let c={markNum:0,markNextId:-1,startFromURL:()=>{var e=decodeURI(new URL(location.href).searchParams.get("keyword")),e=e?e.split(" "):[],t=document.querySelector("#l_main");1==e.length&&"null"==e[0]||(c.start(e,t),c.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:()=>{volantis.cleanContentVisibility(),c.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(c.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:e=>{e=e||(c.markNextId+1)%c.markNum;c.markNextId=parseInt(e);let t=document.getElementById("keyword-mark-"+c.markNextId);return t||(c.markNextId=(c.markNextId+1)%c.markNum,t=document.getElementById("keyword-mark-"+c.markNextId)),t&&volantis.scroll.to(t,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),t},scrollToPrevHighlightKeywordMark:e=>{e=e||(c.markNextId-1+c.markNum)%c.markNum;c.markNextId=parseInt(e);let t=document.getElementById("keyword-mark-"+c.markNextId);return t||(c.markNextId=(c.markNextId-1+c.markNum)%c.markNum,t=document.getElementById("keyword-mark-"+c.markNextId)),t&&volantis.scroll.to(t,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),t},start:(o,e)=>{if(c.markNum=0,o.length&&e&&(1!=o.length||"null"!=o[0])){console.log(o);for(var t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),n=[];t.nextNode();)t.currentNode.parentNode.matches("button, select, textarea")||n.push(t.currentNode);n.forEach(e=>{var[t]=c.getIndexByWord(o,e.nodeValue);t.length&&(t=c.mergeIntoSlice(0,e.nodeValue.length,t),c.highlightText(e,t,"keyword"),c.highlightStyle())})}},getIndexByWord:(e,a,s=!1)=>{const i=[],l=new Set;return e.forEach(t=>{var e=document.createElement("div"),o=(e.innerText=t,(t=e.innerHTML).length);if(0!==o){let e=0;var n;for(s||(a=a.toLowerCase(),t=t.toLowerCase());-1<(n=a.indexOf(t,e));)i.push({position:n,word:t}),l.add(t),e=n+o}}),i.sort((e,t)=>e.position!==t.position?e.position-t.position:t.word.length-e.word.length),[i,l]},mergeIntoSlice:(e,t,o)=>{var n;let{position:a,word:s}=o[0];for(var i=[],l=new Set;a+s.length<=t&&0!==o.length;){l.add(s),i.push({position:a,length:s.length});var r=a+s.length;for(o.shift();0!==o.length&&(n=o[0],a=n.position,s=n.word,r>a);)o.shift()}return{hits:i,start:e,end:t,count:l.size}},highlightText:(t,e,o)=>{var n=t.nodeValue;let a=e.start;var s,i,l=[];for({position:s,length:i}of e.hits){var r=document.createTextNode(n.substring(a,s));a=s+i;let e=document.createElement("mark");e.className=o,(e=c.highlightStyle(e)).appendChild(document.createTextNode(n.substr(s,i))),l.push(r,e)}t.nodeValue=n.substring(a,e.end),l.forEach(e=>{t.parentNode.insertBefore(e,t)})},highlightStyle:e=>{if(e)return e.id="keyword-mark-"+c.markNum,c.markNum++,e.style.background="transparent",e.style["border-bottom"]="1px dashed #ff2a2a",e.style.color="#ff2a2a",e.style["font-weight"]="bold",e},cleanHighlightStyle:()=>{document.querySelectorAll(".keyword").forEach(e=>{e.style.background="transparent",e.style["border-bottom"]=null,e.style.color=null,e.style["font-weight"]=null})}};return{start:(e,t)=>{c.start(e,t)},startFromURL:()=>{c.startFromURL()},scrollToNextHighlightKeywordMark:e=>{c.scrollToNextHighlightKeywordMark(e)},scrollToPrevHighlightKeywordMark:e=>{c.scrollToPrevHighlightKeywordMark(e)},cleanHighlightStyle:()=>{c.cleanHighlightStyle()}}})()),DOMController=(Object.freeze(highlightKeyWords),{visible:(e,t=!0)=>{e&&(e.style.display=!0===t?"block":"none")},remove:e=>{document.querySelectorAll(e).forEach(e=>{e.remove()})},removeList:e=>{e.forEach(e=>{DOMController.remove(e)})},setAttribute:(e,t,o)=>{document.querySelectorAll(e).forEach(e=>{e.setAttribute(t,o)})},setAttributeList:e=>{e.forEach(e=>{DOMController.setAttribute(e[0],e[1],e[2])})},setStyle:(e,t,o)=>{document.querySelectorAll(e).forEach(e=>{e.style[t]=o})},setStyleList:e=>{e.forEach(e=>{DOMController.setStyle(e[0],e[1],e[2])})},fadeIn:e=>{if(e)return e.style.visibility="visible",e.style.opacity=1,e.style.display="block",e.style.transition="all 0.5s linear",e},fadeOut:e=>{if(e)return e.style.visibility="hidden",e.style.opacity=0,e.style.display="none",e.style.transition="all 0.5s linear",e},fadeToggle:e=>{if(e)return e="hidden"==e.style.visibility?DOMController.fadeIn(e):DOMController.fadeOut(e)},fadeToggleList:e=>{e.forEach(e=>{DOMController.fadeToggle(e)})},hasClass:(e,t)=>{if(e)return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:(e,t)=>{if(e)return e.classList.add(t),e},removeClass:(e,t)=>{if(e)return e.classList.remove(t),e},toggleClass:(e,t)=>{if(e)return DOMController.hasClass(e,t)?DOMController.removeClass(e,t):DOMController.addClass(e,t),e},toggleClassList:e=>{e.forEach(e=>{DOMController.toggleClass(e[0],e[1])})}}),VolantisRequest=(Object.freeze(DOMController),{timeoutFetch:(t,e,o)=>{const n=new AbortController;o.signal?.addEventListener("abort",()=>n.abort());let a=fetch(t,{...o,signal:n.signal});if(0<e){const s=setTimeout(()=>n.abort(),e);a.finally(()=>{clearTimeout(s)})}return a=a.catch(e=>{throw"AbortError"===(e||{}).name?new Error("Fetch timeout: "+t):e})},Fetch:async(e,t,o=15e3)=>{o=await VolantisRequest.timeoutFetch(e,o,t);if(!o.ok)throw new Error(`Fetch error: ${e} | `+o.status);t=await o.json();if(t.success)return t;throw t},POST:async(e,t)=>{var o={method:"POST"};if(t){const n=new FormData;Object.keys(t).forEach(e=>n.append(e,String(t[e]))),o.body=n}return(await VolantisRequest.Fetch(e,o)).data},Get:async(e,t)=>{await VolantisRequest.Fetch(e+(t?"?"+new URLSearchParams(t):""),{method:"GET"})}});Object.freeze(VolantisRequest);