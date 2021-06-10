// ==UserScript==
// @name         Goddamn it DDG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  You want to use DuckDuckGo because you love them, but their search sucks sometimes and you have to use the evil empire because their search sucks slightly less
// @author       Randy Kaelber (tungstencarbide@github)
// @include      https://duckduckgo.com/?q*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var gdiDDGButton = document.createElement("BUTTON");
    gdiDDGButton.textContent = "Goddamn it, DDG!";
    gdiDDGButton.onclick = function() {document.location.href = "https://google.com/search?q=" + document.getElementById("search_form_input").value};
    document.getElementsByClassName("header__search-wrap")[0].appendChild(gdiDDGButton);
})();