$ (function () {
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

  var body = document.body;
  var hamburger = document.getElementById ('js-hamburger');
  var blackBg = document.getElementById ('js-black-bg');

  hamburger.addEventListener ('click', function () {
    body.classList.toggle ('nav-open');
  });
  blackBg.addEventListener ('click', function () {
    body.classList.remove ('nav-open');
  });

  //変数定義
  var navigationOpenFlag = false;
  var navButtonFlag = true;
  var focusFlag = false;

  //ハンバーガーメニュー
  $ (function () {
    $ (document).on ('click', '.el_humburger', function () {
      if (navButtonFlag) {
        spNavInOut.switch ();
        //一時的にボタンを押せなくする
        setTimeout (function () {
          navButtonFlag = true;
        }, 200);
        navButtonFlag = false;
      }
    });
    $ (document).on ('click touchend', function (event) {
      if (
        !$ (event.target).closest ('.bl_header,.el_humburger').length &&
        $ ('body').hasClass ('open') &&
        focusFlag
      ) {
        focusFlag = false;
        //scrollBlocker(false);
        spNavInOut.switch ();
      }
    });
  });

  //ナビ開く処理
  function spNavIn () {
    $ ('body').removeClass ('js_humburgerClose');
    $ ('body').addClass ('js_humburgerOpen');
    setTimeout (function () {
      focusFlag = true;
    }, 200);
    setTimeout (function () {
      navigationOpenFlag = true;
    }, 200);
  }

  //ナビ閉じる処理
  function spNavOut () {
    $ ('body').removeClass ('js_humburgerOpen');
    $ ('body').addClass ('js_humburgerClose');
    setTimeout (function () {
      $ ('.uq_spNavi').removeClass ('js_appear');
      focusFlag = false;
    }, 200);
    navigationOpenFlag = false;
  }

  //ナビ開閉コントロール
  var spNavInOut = {
    switch: function () {
      if ($ ('body.spNavFreez').length) {
        return false;
      }
      if ($ ('body').hasClass ('js_humburgerOpen')) {
        spNavOut ();
      } else {
        spNavIn ();
      }
    },
  };

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
