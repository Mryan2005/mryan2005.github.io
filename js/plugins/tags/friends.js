const FriendsJS={requestAPI:(a,o,s)=>{let i=5;function l(){return new Promise((t,e)=>{let r=0;let n=setTimeout(()=>{if(r===0){r=2;n=null;e("请求超时");if(i==0){s()}}},5e3);fetch(a).then(function(e){if(r!==2){clearTimeout(n);t(e);n=null;r=1}if(e.ok){return e.json()}throw new Error("Network response was not ok.")}).then(function(e){i=0;o(e)}).catch(function(e){if(i>0){i-=1;setTimeout(()=>{l()},5e3)}else{s()}})})}l()},layout:a=>{const r=a.el;FriendsJS.requestAPI(a.api,function(e){r.querySelector(".loading-wrap").remove();const t=e.content;var n="";t.forEach((e,t)=>{var r='<div class="user-card">';r+='<a class="card-link" target="_blank" rel="external noopener noreferrer"';r+=' href="'+e.url+'">';r+='<img alt="'+e.title+'" src="'+(e.avatar||a.avatar)+'" onerror="errorImgAvatar(this)">';r+='<div class="name"><span>'+e.title+"</span></div>";r+="</a>";r+="</div>";n+=r});r.querySelector(".group-body").innerHTML=n},function(){try{r.querySelector(".loading-wrap svg").remove();r.querySelector(".loading-wrap p").innerText("加载失败，请稍后重试。")}catch(e){}})},start:()=>{const e=document.getElementsByClassName("friendsjs-wrap");for(var t=0;t<e.length;t++){const n=e[t];const a=n.getAttribute("api");if(a==null){continue}var r=new Object;r.el=n;r.api=a;r.class=n.getAttribute("class");r.avatar=volantis.GLOBAL_CONFIG.default.avatar;FriendsJS.layout(r)}}};FriendsJS.start();document.addEventListener("pjax:complete",function(){FriendsJS.start()});