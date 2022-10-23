// ==UserScript==
// @name         sm号跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      *://www.bilibili.com/video/*
// @include      *://www.bilibili.com/medialist*
// @description  try to take over the world!
// @author       Liang
// @match        *://www.bilibili.com/video/*
// @include      *://www.bilibili.com/medialist*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {


    var smNum;
    var a = document.querySelector('#arc_toolbar_report').id;

    if(a){

        for(var i = 1;i <= 10; i += 1){

            setTimeout(()=>{
                sm2nico();
            }, i*1000);


            console.log('执行完毕');
        }
    }


    function sm2nico(){
        smNum = document.querySelector("a[href*='acg.tv/sm']").innerHTML;
        document.querySelector("a[href*='acg.tv/sm']").classList.add("smLink");
        document.querySelector(".smLink").setAttribute("href","https://www.nicovideo.jp/watch/"+smNum);
        document.querySelector(".smLink").innerHTML = "跳转" + smNum;
    }

})();
