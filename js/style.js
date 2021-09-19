// 動画のコントロールバーを非表示
jQuery(function($){
    var movie = document.getElementById("back_video");
    movie.controls = false;
    });

// 画面幅に画像を表示（縦）
$(document).ready(function () {
    hsize = $(window).height() - document.getElementById("header_inner").clientHeight;
    alert(hsize);
    $('div[class*="fv"]').css("height", hsize + "px");
  });
  $(window).resize(function () {
    hsize = $(window).height() - document.getElementById("header_inner").clientHeight;
    $('div[class*="fv"]').css("height", hsize + "px");
    8;
  }); 
