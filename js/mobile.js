function rem(psdWidth){
    var docEl = document.documentElement,
            w = docEl.clientWidth;
    docEl.style.fontSize = 100 * (w / psdWidth) + 'px';
}
rem(720);
window.onresize = function(){rem(720)}
    
