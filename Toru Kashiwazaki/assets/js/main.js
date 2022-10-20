// フォント指定
(function (d) {
    var config = {
        kitId: 'kln8qpc',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement,
        t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try { Typekit.load(config) } catch (e) { }
    };
    s.parentNode.insertBefore(tk, s)
})(document);

// ハンバーガーメニュー動作
$(function () {
    $('.hamburger').on('click', function () {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function () {
        $('#header').removeClass('open');
    });

    // リンクをクリックした時にメニューを閉じる
    $('#navi a').on('click', function () {
        $('#header').removeClass('open');
    });
});