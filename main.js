// ==UserScript==
// @name         sm号跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      *://www.bilibili.com/*
// @description  try to take over the world!
// @author       Liang
// @match        *://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function() {


    for(var i = 1;i < 5;i += 1){
        
        setTimeout(()=>{
            var smnum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
            document.querySelector("a[href*='acg.tv/sm']").classList.add("smnum");
            
            document.querySelector(".smnum").setAttribute("href","https://www.nicovideo.jp/watch/"+smnum);
            document.querySelector(".smnum").innerHTML = "跳转" + smnum;
        }, 2000);
    }
    console.log("运行完毕");

})();