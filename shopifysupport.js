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
    var clear = $('<button type="button" class="btn btn-xs">清空</button>');
    clear.click(function(){
        $('.next-input--number').val(0);
    });
    var all = $('<button type="button" class="btn btn-xs">全选</button>');
    all.click(function(){
        $('.next-input--number').each(function(){
            $(this).val($(this).attr('max'));
        });
    });
    var reverse = $('<button type="button" class="btn btn-xs">反选</button>');
    reverse.click(function(){
        $('.next-input--number').each(function(){
            if($(this).val() === '0'){
                $(this).val($(this).attr('max'));
            }else{
                $(this).val(0);
            }
        });
    });
    $([clear,all,reverse]).each(function(){
        $(this).css({height:'30px','line-height':'30px',margin:'0 5px',padding:'0 5px'});
    });
    $('.ui-layout__section--primary .next-card__header').append([clear,all,reverse]);
});
