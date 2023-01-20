// Adobeフォント適用
(function (d) {
    var config = {
        kitId: 'ogd1niu',
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

// スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var adjust = -50;
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

// メインフェードイン
$(function () {
    $(".js-fadeUp").on("inview", function () {
        $(this).addClass("is-inview");
    });
});

// ナビメニュー編集
$(function () {
    if (window.matchMedia('(min-width: 868px)').matches) {
        $("li").removeClass("none");
    };
});

// ハンバーガーメニュー
$(function () {
    $(".hamburger").on('click', function () {
        $(this).toggleClass('active');
        $("#header").toggleClass('open');
    });

    $('#page-link a').on('click', function () {
        $('#header').removeClass('open');
        $('.hamburger').removeClass('active')
    });

    $('#mask').on('click', function () {
        $('#header').removeClass('open');
        $('.hamburger').removeClass('active')
    });
});

// FOUT対策
setTimeout(function () {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 3000);