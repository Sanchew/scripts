// ==UserScript==
// @name         Shopify Extends
// @namespace    https://github.com/sanchew
// @version      0.1
// @description  Fix shopify UI and Features
// @include      /^https?://[^\/]*?cemarose[^\/]*?\/.*?orders.*/
// @author       sanchew
// @license      MIT
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

$(function(){
    $('.next-input--number').val(0);
});
