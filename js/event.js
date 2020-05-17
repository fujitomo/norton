// ↓この書き方だとWordPressでエラーになるので、
// $ (function () {

// ↓こうかくとエラーにならない
jQuery (function ($) {
  //ページトップに戻る処理
  $ ('#page_top').on ('click', function () {
    // スクロールの速度
    var speed = 500; // ミリ秒
    $ ('html, body').animate ({scrollTop: 0}, speed, 'swing');
    return true;
  });
  $ ('#linebox_dlete').on ('click', function () {
    //$('#linebox').css({ display: 'none' });
    $ ('#linebox').fadeOut ('slow');
    return true;
  });

  // var body = document.body;
  // var hamburger = document.getElementById ('js-hamburger');
  // var blackBg = document.getElementById ('js-black-bg');

  // hamburger.addEventListener ('click', function () {
  //   body.classList.toggle ('nav-open');
  // });
  // blackBg.addEventListener ('click', function () {
  //   body.classList.remove ('nav-open');
  // });

  // //変数定義
  // var navigationOpenFlag = false;
  // var navButtonFlag = true;
  // var focusFlag = false;

  // //ハンバーガーメニュー
  // $ (function () {
  //   $ (document).on ('click', '.el_humburger', function () {
  //     if (navButtonFlag) {
  //       spNavInOut.switch ();
  //       //一時的にボタンを押せなくする
  //       setTimeout (function () {
  //         navButtonFlag = true;
  //       }, 200);
  //       navButtonFlag = false;
  //     }
  //   });
  //   $ (document).on ('click touchend', function (event) {
  //     if (
  //       !$ (event.target).closest ('.bl_header,.el_humburger').length &&
  //       $ ('body').hasClass ('open') &&
  //       focusFlag
  //     ) {
  //       focusFlag = false;
  //       //scrollBlocker(false);
  //       spNavInOut.switch ();
  //     }
  //   });
  // });

  //ナビ開く処理
  // function spNavIn () {
  //   $ ('body').removeClass ('js_humburgerClose');
  //   $ ('body').addClass ('js_humburgerOpen');
  //   setTimeout (function () {
  //     focusFlag = true;
  //   }, 200);
  //   setTimeout (function () {
  //     navigationOpenFlag = true;
  //   }, 200);
  // }

  // //ナビ閉じる処理
  // function spNavOut () {
  //   $ ('body').removeClass ('js_humburgerOpen');
  //   $ ('body').addClass ('js_humburgerClose');
  //   setTimeout (function () {
  //     $ ('.uq_spNavi').removeClass ('js_appear');
  //     focusFlag = false;
  //   }, 200);
  //   navigationOpenFlag = false;
  // }

  // //ナビ開閉コントロール
  // var spNavInOut = {
  //   switch: function () {
  //     if ($ ('body.spNavFreez').length) {
  //       return false;
  //     }
  //     if ($ ('body').hasClass ('js_humburgerOpen')) {
  //       spNavOut ();
  //     } else {
  //       spNavIn ();
  //     }
  //   },
  // };

  //ハンバーガーメニュー処理
  //var body = $ ('body');
  var body = $ ('#gnav');
  var menuBtn = $ ('#menu-btn');
  var gnav = $ ('#gnav');
  var classToAssign = 'is-active-gnav';
  var open = 'nav-open';

  function manipulateGnav () {
    if (body.hasClass (classToAssign)) {
      body.removeClass (classToAssign);
      menuBtn.removeClass (open);
      //gnav.fadeOut ();
    } else {
      menuBtn.addClass ();
      body.addClass (classToAssign);
      menuBtn.addClass (open);
      //gnav.fadeIn ();
    }
  }
  menuBtn.on ('click', manipulateGnav);

  //→ボタン
  $ ('#right_btn').on ('click', function () {
    //$('#linebox').css({ display: 'none' });
    $ ('#right_col').removeClass ('package-list-sp__table__col--none');
    $ ('#left_col').addClass ('package-list-sp__table__col--none');
    $ ('#cursor').css ('left', '78px');
    $ ('#bar4').removeClass ('package-list-sp__swich__bar--none');
    $ ('#left_col').addClass ('package-list-sp__table__col--none');
    $ ('#bar1').addClass ('package-list-sp__swich__bar--none');
    $ ('#right_btn').addClass ('package-list-sp__swich__icon--none');
    $ ('#right_btn').removeClass ('package-list-sp__swich__icon');
    $ ('#left_btn').addClass ('package-list-sp__swich__icon');
    $ ('#left_btn').removeClass ('package-list-sp__swich__icon--none');
    $ ('[id^="left_col_"]').addClass ('package-list-sp__table__row__col--none');
    $ ('[id^="right_col_"]').removeClass (
      'package-list-sp__table__row__col--none'
    );
  });

  //←ボタン
  $ ('#left_btn').on ('click', function () {
    //$('#linebox').css({ display: 'none' });
    $ ('#left_col').removeClass ('package-list-sp__table__col--none');
    $ ('#right_col').addClass ('package-list-sp__table__col--none');
    $ ('#cursor').css ('left', '58px');
    $ ('#bar1').removeClass ('package-list-sp__swich__bar--none');
    $ ('#right_col').addClass ('package-list-sp__table__col--none');
    $ ('#bar4').addClass ('package-list-sp__swich__bar--none');
    $ ('#right_btn').addClass ('package-list-sp__swich__icon');
    $ ('#right_btn').removeClass ('package-list-sp__swich__icon--none');
    $ ('#left_btn').addClass ('package-list-sp__swich__icon--none');
    $ ('#left_btn').removeClass ('package-list-sp__swich__icon');
    $ ('[id^="right_col_"]').addClass (
      'package-list-sp__table__row__col--none'
    );
    $ ('[id^="left_col_"]').removeClass (
      'package-list-sp__table__row__col--none'
    );
  });
});

//////////////////////////////////////////////////
// ナビのjQuery私ならこうかきますというをご紹介させてください。
// CSS設計に関わる部分なのでチェックさせていただきました！
//
// ともひろさんの方法：
// - ナビが閉じている時のクラス .js_humburgerClose
// - ナビが開いている時のクラス .js_humburgerOpen
// を付け替えるような設計をされていますが、通常はこのようにします
//
// おすすめの方法：
// - ナビが閉じている時は、特別なクラスなし
// - ナビが開く時のみ、jQueryで<body>にクラスをつける　例）.is-active-gnav / .is-open-gnav等
//
// クラスつけはずしの例のjQueryつくってみました。
// 参考） https://jsfiddle.net/Gita_mw/qs5pvy4m/33/
//
