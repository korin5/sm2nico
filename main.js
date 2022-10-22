// ==UserScript==
// @name         sm号跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      *://www.bilibili.com/*
// @description  try to take over the world!
// @author       Liang
// @match        *://www.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    var smNum;


    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 2000);

    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 3000);
    
    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 4000);
    
    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 5000);

    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 6000);

    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 7000);

    setTimeout(()=>{
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }, 8000);

})();
