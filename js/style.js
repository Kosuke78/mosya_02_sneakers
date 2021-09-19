// 動画のコントロールバーを非表示
jQuery(function($){
    var movie = document.getElementById("back_video");
    movie.controls = false;
    });

// 画面幅に画像を表示（縦）
$(document).ready(function () {
    header_h = document.getElementById("header_inner").clientHeight;
    hsize = $(window).height() - header_h;
    $('div[class*="margin"]').css("height", header_h + "px");
    $('div[class*="fv"]').css("height", hsize + "px");
  });
  $(window).resize(function () {
    header_h = document.getElementById("header_inner").clientHeight;
    hsize = $(window).height() - document.getElementById("header_inner").clientHeight;
    $('div[class*="margin"]').css("height", header_h + "px");
    $('div[class*="fv"]').css("height", hsize + "px");
    8;
  }); 

  // 画像をふわっと表示させる
  $(function () {
    $(window).scroll(function () {
      $('.feature_item_img').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 150) {
          $(this).addClass('view');
        }
      });
    });
  });

  // スライダー
  $(function() {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      arrows:false,
      responsive: [{
        breakpoint: 600,settings: { 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:'15%',
        }
        },]
    });
  });

// ハンバーガーメニュー
$(".openbtn7").click(function () {
  $(this).toggleClass('active');
});
$(".modal").click(function () {
  $(".openbtn7").removeClass('active');
});

// サイドメニューをクリックした時にモーダルを閉じる
function OnLinkClick() {
  let element = document.getElementById('sidemenu');
  element.checked = false;
  // xボタンをハンバーガーにする
  $(".openbtn7").removeClass('active');
}

// スムーズスクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
     // 位置を調整
     var adjust = -100; 
     // スクロールの速度
     var speed = 400; // ミリ秒
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得
     var position = target.offset().top - 100;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
});
