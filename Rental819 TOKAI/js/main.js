// Adobeフォント適用
(function(d) {
    var config = {
            kitId: 'klb5jns',
            scriptTimeout: 3000,
            async: true
        },
        h = d.documentElement,
        t = setTimeout(function() { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function() {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try { Typekit.load(config) } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s)
})(document);

// スムーススクロール
$(function() {
    $('a[href^="#"]').click(function() {
        var adjust = 200;
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

// メインフェードイン
$(function() {
    $(".js-fadeUp").on("inview", function() {
        $(this).addClass("is-inview");
    });
});

// スクロールで画像拡大表示
$(function() {
    $(".js-zoom").on("inview", function() {
        $(this).addClass("zoomIn");
    });
});

// ローディング画面
//テキストのカウントアップ+バーの設定
$(function() {
    var bar = new ProgressBar.Line(splash_text, {
        easing: 'easeInOut',
        duration: 1500,
        strokeWidth: 0.2, //進捗ゲージの太さ
        color: '#027074', //進捗ゲージのカラー
        trailWidth: 0.2, //ゲージベースの線の太さ
        trailColor: '#bbb', //ゲージベースの線のカラー
        text: {
            style: {
                position: 'absolute',
                left: '50%',
                top: '50%',
                padding: '0',
                margin: '-30px 0 0 0',
                transform: 'translate(-50%,-50%)',
                'font-size': '1rem',
                color: '#027074',
            },
            autoStyleContainer: false
        },
        step: function(state, bar) {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    //アニメーションスタート
    bar.animate(1.0, function() {
        $("#splash_text").fadeOut(10);
        $(".loader_cover-up").addClass("coveranime");
        $(".loader_cover-down").addClass("coveranime");
        $("#splash").fadeOut();
    });
});

// ハンバーガーメニュー
$(function() {
    $(".openbtn5").click(function() {
        $(this).toggleClass('active');
        $("#nav").toggleClass('open');
    })

    $('.gnavi a').on('click', function() {
        $('#nav').removeClass('open');
        $('.openbtn5').removeClass('active')
    });

    $('#mask').on('click', function() {
        $('#nav').removeClass('open');
        $('.openbtn5').removeClass('active')
    });
});

// トップに戻るボタン
$(function() {
    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $('#page-top').removeClass('DownMove');
            $('#page-top').addClass('UpMove');
        } else {
            if ($('#page-top').hasClass('UpMove')) {
                $('#page-top').removeClass('UpMove');
                $('#page-top').addClass('DownMove');
            }
        }
    }

    $(window).scroll(function() {
        PageTopAnime();
    });

    // #page-topをクリックした際の設定
    $('#page-top a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});