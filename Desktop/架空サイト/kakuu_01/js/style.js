// スクロールして画面が表示されるとクラスが追加される
$(function(){
    　$(window).scroll(function (){
        $('.bar1').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    　});
    });
$(function(){
    $(window).scroll(function (){
        $('.bar2').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.bar3').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.solution_img').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll2');
            }
        });
    });
});

/*******************************
 * スクロールでヘッダーを表示・非表示
 ******************************/

// ヘッダーを取得
const header = document.getElementById("header_inner");
// ヘッダーの高さを取得
const hH = header.clientHeight;
// 現在地を示す変数を定義
let pos = 0;
// 最後のスクロール位置を定義
var lastPos = 0;

// トップ画面幅の高さを取得
const fv = document.getElementById("fv");
const fH = fv.clientHeight;

// 画面を読み込んだときにヘッダーを表示するかしないか
$(document).ready(function(){
    
    const lH = $(window).scrollTop();
    if(lH > fH) {
        header.classList.add('header--unpinned');
    }
    
});

const onScroll = () => {
  if(pos > hH && pos > lastPos) {
    header.classList.add('header--unpinned');
  }
  // スクロール位置がヘッダーの高さ分より小さいか
  // またはスクロール位置が最後のスクロール位置より小さい場合はclass名を削除
  if(pos < hH || pos < lastPos) {
        header.classList.remove('header--unpinned');
  }
  if(pos>fH){
    header.classList.add('add_bgcolor');
  } else {
    header.classList.remove('add_bgcolor');

  }
	// 最後のスクロール位置を保存
	lastPos = pos;
};
  
  window.addEventListener("scroll", () => {
      // スクロールするごとにpos（現在地）の値を更新
  pos = window.scrollY;
    onScroll();
  });