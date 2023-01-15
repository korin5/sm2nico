// ==UserScript==
// @name         sm号跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      *://www.bilibili.com/video/*
// @include      *://www.bilibili.com/medialist*
// @description  哔哩哔哩的sm号一键跳转到niconico
// @author       Liang
// @match        *://www.bilibili.com/video/*
// @include      *://www.bilibili.com/medialist*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {

    var sm = 0;
    var smNum = 0;

    for(var i = 1;i <= 10; i += 1){

        setTimeout(()=>{
            sm2nico();
        }, i*1000);

    }


    function sm2nico(){

        sm = document.querySelectorAll("a[href*='acg.tv/sm']");
        if(sm != 0){
            for(var i = 0 ; i<(sm.length) ; i+=1){
                smNum = sm[i].innerHTML;
                sm[i].classList.add("smLink");
                sm[i].setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
                sm[i].innerHTML = "跳转" + smNum;
            }
        }

    }

})();
