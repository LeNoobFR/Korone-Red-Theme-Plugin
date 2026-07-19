// ==UserScript==
// @name         Korone Roblox Red Theme
// @namespace    theme
// @version      1.0
// @description  Just a custom theme.
// @author       LeNoob
// @match        https://www.pekora.zip/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";

    const ICON_2017 = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Roblox_icon_-_2017.svg/960px-Roblox_icon_-_2017.svg.png?_=20230528063848";
    const LOGO_2015 = "https://upload.wikimedia.org/wikipedia/commons/0/09/Roblox_logo_2015.png?_=20170112172609";
    const BG_IMAGE = "https://wallpapershome.com/images/pages/pic_h/27659.jpg";

    function applyTheme() {

        document.documentElement.style.setProperty("--background-color", "#9d2c2c");
        document.body.style.setProperty("background-color", "#9d2c2c", "important");
        document.documentElement.style.setProperty("background-color", "#9d2c2c", "important");

        document.querySelectorAll("*").forEach(el => {

            const style = getComputedStyle(el);
            if (el.tagName === "IMG") {

                if (el.src.includes("korone-icon-square1.png")) {
                    el.src = ICON_2017;
                }

                if (el.src.includes("korone1.png")) {
                    el.src = LOGO_2015;
                }

            }

            if (style.backgroundImage.includes("korone-icon-square1.png")) {
                el.style.setProperty("background-image", `url("${ICON_2017}")`, "important");
            }

            if (style.backgroundImage.includes("korone1.png")) {
                el.style.setProperty("background-image", `url("${LOGO_2015}")`, "important");
            }

            if (
                style.backgroundColor === "rgb(255, 255, 255)" ||
                el.getAttribute("style")?.includes("background: #ffffff")
            ) {
                el.style.setProperty("background-image", `url("${BG_IMAGE}")`, "important");
                el.style.setProperty("background-size", "cover", "important");
                el.style.setProperty("background-position", "center", "important");
                el.style.setProperty("background-repeat", "no-repeat", "important");
                el.style.setProperty("background-color", "#9d2c2c", "important");
            }

            if (style.backgroundColor === "rgb(138, 81, 73)") {
                el.style.setProperty("background-color", "#ff0000", "important");
            }

            if (style.color === "rgb(138, 81, 73)") {
                el.style.setProperty("color", "#ff0000", "important");
            }

            if (style.borderColor === "rgb(138, 81, 73)") {
                el.style.setProperty("border-color", "#ff0000", "important");
            }

        });

        document.querySelectorAll(".navbar").forEach(nav => {
            nav.style.setProperty("background-color", "#a43f3f", "important");
        });

        document.querySelectorAll("[class*='alertBg']").forEach(alert => {
            alert.style.setProperty("background-color", "#ff0000", "important");
        });

        document.querySelectorAll(".flex.ps-4.pe-4.pt-4.pb-4").forEach(el => {
            el.style.setProperty("background-color", "#9d2c2c", "important");
        });

document.querySelectorAll("[class*='pagination']").forEach(el => {
    el.style.setProperty("background", "#ff0000", "important");
    el.style.setProperty("background-color", "#ff0000", "important");
    el.style.setProperty("border-color", "#ff0000", "important");
});
        document.querySelectorAll("[class*='iconCard']").forEach(el => {
            el.style.setProperty("background-color", "#9d2c2c", "important");
            el.style.setProperty("border-color", "#ff0000", "important");
        });

        document.querySelectorAll("link[rel*='icon']").forEach(icon => {
            icon.href = ICON_2017;
        });

    }

    applyTheme();

    new MutationObserver(applyTheme).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    setInterval(applyTheme, 1000);

})();
