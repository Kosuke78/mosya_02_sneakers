

//スクロールでヘッダーを表示・非表示
// ヘッダーを取得
const header = document.getElementById("header_inner");

// ヘッダーの高さを取得
const hH = header.clientHeight;

// 現在地を示す変数を定義
let pos = 0;

// 最後のスクロール位置を定義
var lastPos = 0;

// トップ画面幅の高さを取得
const fv_wrapper = document.getElementById("fv_wrapper");
const fH = fv_wrapper.clientHeight;
console.log(fH);

// 画面を読み込んだときにヘッダーを表示するかしないか
$(document).ready(function(){
    
    const lH = $(window).scrollTop();
    if(lH > fH) {
        header.classList.add('header--unpinned');
    }
    
});

const onScroll = () => {
  if(pos > hH && pos > lastPos) {
      console.log('A');
    header.classList.add('header--unpinned');
  }
  // スクロール位置がヘッダーの高さ分より小さいか
  // またはスクロール位置が最後のスクロール位置より小さい場合はclass名を削除
  if(pos < hH || pos < lastPos) {
        header.classList.remove('header--unpinned');
    console.log('B');
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




