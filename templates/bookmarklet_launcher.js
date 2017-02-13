/**
 * Created by dnay2 on 2017-02-11.
 */
(function () {
    if (window.myBookmarklet !== undefined){
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).
            src='http://127.0.0.1:8000/static/js/bookmarklet.js?r='+Math.
        floor(Math.random()*99999999999999999999);
    }
})();
