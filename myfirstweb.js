//漢堡選單
$(".hamburger").click(function openmenu() {
    $(this).toggleClass('active');
    $(".menulist").toggleClass('active');
});

$(".menubtn").click(function () {
    $(".hamburger").removeClass('active');
    $(".menulist").removeClass('active');
});

//fade動畫
// 1. 動くきっかけを独自の名前（関数：fadeAnime）で定義
function fadeAnime() {
    //動きの指定
    $('.fadeInTrigger').each(function () { //fadeInTriggerというクラス名が
        var elemPos = $(this).offset().top + 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
        }
    });
}
// 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定
// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動く場合の記述

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動く場合の記述