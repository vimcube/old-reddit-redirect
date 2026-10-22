// ==UserScript==
// @name         Old Reddit Redirect
// @version      1.0
// @description  Redirects Reddit to old.reddit.com
// @author       vimcube
// @match        *://www.reddit.com/*
// @match        *://reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

location.replace('https://old.reddit.com' + location.pathname + location.search + location.hash);
