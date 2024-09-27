// ==UserScript==
// @name         Better CYSH Web
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  校網太爛，我來改一下
// @author       Know Scratcher
// @match        https://www.cysh.cy.edu.tw/
// @icon         https://upload.wikimedia.org/wikipedia/zh/3/3d/%E5%98%89%E7%BE%A9%E9%AB%98%E4%B8%ADlogo.png?20211008122218
// @updateURL    https://github.com/KnowScratcher/Better-CYSH-Web/raw/refs/heads/main/BCW.user.js
// @downloadURL  https://github.com/KnowScratcher/Better-CYSH-Web/raw/refs/heads/main/BCW.user.js
// @homepage     https://github.com/KnowScratcher/Better-CYSH-Web
// @homepageURL  https://github.com/KnowScratcher/Better-CYSH-Web
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function () {
        change_icon();
        add_slogan();
        move_announce();
    });


    // banner
    $("#Dyn_head > div > div > div > div > div.top_f.container > div > div.mlogo > h1 > a > img").on("load",function () {
        add_the_fk_instructor();
        
    });

    // news
    $("#Dyn_2_1 > div > div > section > div > div:nth-child(4) > div > div.d-img > a > img").on("load",function() {
        
    });

    function change_icon() {
        $("#Dyn_head > div > div > div > div > div.top_f.container > div > div.mlogo > h1 > a > img").attr("src","https://i.imgur.com/iLSPhQx_d.webp?maxwidth=760&fidelity=grand");
    }

    function add_the_fk_instructor() {
        setTimeout(() => {
            $("#banner > div > div > section > div > div > div.owl-stage-outer > div > div:nth-child(3) > figure > a > img").attr("src","https://i.imgur.com/RlytM0c_d.webp?maxwidth=1520&fidelity=grand");
        },10);
    }

    function add_slogan() {
        $("#Dyn_2_1 > div > div > section > div > div:nth-child(4) > div > div.d-img > a > img").attr("src","https://i.imgur.com/uldkOW8_d.webp?maxwidth=760&fidelity=grand");
        $("#Dyn_2_1 > div > div > section > div > div:nth-child(4) > div > div.d-txt > div > a").attr("href","https://cysh.cywiki.win/index.php/%E8%A8%B1%E5%BA%AD%E7%91%9C%E6%95%99%E5%AE%98");
        $("#Dyn_2_1 > div > div > section > div > div:nth-child(4) > div > div.d-txt > div > a").text("偉大的許主席");
        $("#Dyn_2_1 > div > div > section > div > div:nth-child(4) > div > div.d-txt > div > i").text("2024-09-20");
    }

    function move_announce() {
        $(".row_1").insertBefore(".row_0");
        $(`<img src="https://i.imgur.com/lwI98lv_d.webp?maxwidth=1520&fidelity=grand" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" />`).insertBefore(".row_1");
    }

})();