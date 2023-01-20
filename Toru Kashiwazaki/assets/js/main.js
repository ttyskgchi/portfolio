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

// スライダー
$(function () {
    $('.slider').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
});

// マウスカーソルデザイン
$(function () {
    var
        cursor = $(".cursor"),
        follower = $(".follower"),
        cWidth = 8,
        fWidth = 20,
        delay = 10,
        mouseX = 0,
        mouseY = 0,
        posX = 0,
        posY = 0;

    //カーソルの遅延アニメーション
    TweenMax.to({}, .001, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / delay;
            posY += (mouseY - posY) / delay;

            TweenMax.set(follower, {
                css: {
                    left: posX - (fWidth / 2),
                    top: posY - (fWidth / 2)
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX - (cWidth / 2),
                    top: mouseY - (cWidth / 2)
                }
            });
        }
    });

    //マウス座標を取得
    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $("a").on({
        "mouseenter": function () {
            cursor.addClass("is-active");
            follower.addClass("is-active");
        },
        "mouseleave": function () {
            cursor.removeClass("is-active");
            follower.removeClass("is-active");
        }
    });
});

// 画像表示アニメーション
$(function () {
    $(window).scroll(function () {
        $(".anime_wrap").each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var wHeight = $(window).height();

            if (scroll > offset - wHeight + wHeight / 2) {
                $(this).addClass("show");
            }
        });
    });

    $(window).on('load', function () {
        $("#first-view").addClass("show");
    });
});

// モーダルウィンドウ
$(function () {
    $(".gallery").modaal({
        type: 'image',
        overlay_close: true,
        before_open: function () {
            $('html').css('overflow-y', 'hidden');
        },
        after_close: function () {
            $('html').css('overflow-y', 'scroll');
        }
    });
});

// FOUT対策
setTimeout(function () {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 3000);