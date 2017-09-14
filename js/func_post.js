// 定数
// フキダシの引数
const face1 = "js/img/リーマンアイコン.png";
const face2 = "js/img/カジノディーラーのイラスト2.png";
const face3 = "js/img/男子学生アイコン2.png";
const face4 = "js/img/女子高生のフリーアイコン15.png";
const face5 = "js/img/社長のアイコン.png";
const color1 = "#adc9f7";
const color2 = "#f7b1ad";
const color3 = "#aef7ad";
const color4 = "#c8adf7";
const color5 = "#f2f7ad";
const color6 = "#f7d9ad";
const color7 = "#dff7ad";
const color8 = "#f7f7f7";
const color9 = "#c3c5c9";

// 右側フキダシ
// color:フキダシ等の色。引数用定数かカラーコード
// face:表示する顔。引数用定数か画像パス
// txt:フキダシのセリフ。改行は<br>で。
var Rballoon = function(color,face,txt) {
    document.write('<div class="balloonR"><div class="faceiconR"><img src="');
    document.write(face);
    document.write('" alt="" width="194" height="259" class="alignnone size-full wp-image-3092" style="border-color:')
    document.write(color);
    document.write('" /></div><div class="chattingR"><div class="saysR" style="background:')
    document.write(color);
    document.write('; border-right-color:');
    document.write(color);
    document.write(';"><p>');
    document.write(txt);
    document.write('</p></div></div></div>');
}

// 左側フキダシ
// color:フキダシ等の色。引数用定数かカラーコード
// face:表示する顔。引数用定数か画像パス
// txt:フキダシのセリフ。改行は<br>で。
var Lballoon = function(color,face,txt) {
    document.write('<div class="balloonL"><div class="faceiconL"><img src="');
    document.write(face);
    document.write('" alt="" width="194" height="259" class="alignnone size-full wp-image-3092" style="border-color:')
    document.write(color);
    document.write('" /></div><div class="chattingL"><div class="saysL" style="background:')
    document.write(color);
    document.write('; border-left-color:');
    document.write(color);
    document.write(';"><p>');
    document.write(txt);
    document.write('</p></div></div></div>');
}

// 枠付きリンク
// url:飛ばす先
// title:飛ばす記事のタイトル
// suitename:そのサイトの名前
var Bdlink = function(url,title,suitename){
    document.write('<div class="link"><div class="linkmarg"><div class="linktitle"><a href="');
    document.write(url);
    document.write('" target="_blank">');
    document.write(title);
    document.write('</a></div><div class="linksuite"><p>');
    document.write(suitename);
    document.write('</p></div></div></div>');
}

// 引用
// txt:引用するテキスト
// url:引用元url
// title:ページタイトル
var Inyou = function(txt,url,title){
    document.write('<blockquote>');
    document.write(txt);
    document.write('<br>引用元:<a href="');
    document.write(url);
    document.write('" target="_blank">');
    document.write(title);
    document.write('</a></blockquote>');
}