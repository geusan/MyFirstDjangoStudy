/**
 * Created by dnay2 on 2017-02-11.
 */
var domain = 'http://geusan.pythonanywhere.com/';
(function () {
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).
            src= domain + 'static/js/bookmarklet.js?r='+Math.
        floor(Math.random()*99999999999999999999);
    }
})();
