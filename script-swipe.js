$(function() {

  // Home-Swiper**********************************************************
    const swiperHome = new Swiper('.slider1',{
      effect: 'fade',
      loop: true,
      // autoplay: { 
      //   delay: 2000, 
      //   disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      // },
      speed: 1000,
      preventInteractionOnTransition: true,
      initialSlide: 0,
      
    });

  // メニューへのマウスオーバーでメイン画像の切り替え*****************************
  $('#home-btn').on('mouseover', function(){
    swiperHome.slideTo(0);
  });
  
  //WORKS
  $('#works-btn').on('mouseover', function(){
    swiperHome.slideTo(1);
  });

  // SKILL
  $('#skill-btn').on('mouseover', function(){
    swiperHome.slideTo(2);   
  });

  // ABOUT
  $('#about-btn').on('mouseover', function(){
    swiperHome.slideTo(3);
  });

  // CONTACT
  $('#contact-btn').on('mouseover', function(){
    swiperHome.slideTo(4);   
  });


  // work-Swiper**********************************************************
  var windowWidth = $(window).width();
  var windowSm = 767;
  if (windowWidth > windowSm) {
    
    //PCの場合の処理
    const swiperWork = new Swiper('.slider2',{
      // effect: slide,fade,cube,coverflow,flip,card,creative,
      effect: 'slide',
      slidesPerView: 2.5,
      centeredSlides: true,
      spaceBetween: '2%',
      // loop: true,
      // autoplay: { 
      //   delay: 2000, 
      // },
      speed: 1000,
      preventInteractionOnTransition: true,
      initialSlide: 1,
  
      //矢印ボタン
      navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
  } else {
    //スマホの場合の処理
    const swiperWork = new Swiper('.slider2',{
      effect: 'cube',
      slidesPerView: 1,
      loop: true,
      autoplay: { 
        delay: 2000, 
      },
      speed: 1000,
      preventInteractionOnTransition: true,

      //矢印ボタン
      navigation: { 
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  };


  //ページ切り替えを関数として定義*****************************
  // Home
  function homeClick(){
    $('#works').hide(hideTime);
    $('#skill').hide(hideTime);
    $('#about').hide(hideTime);
    $('#contact').hide(hideTime);
    $('#home-message').fadeIn(fadeTime);

    $('#page-left-btn').hide(hideTime);
    $('#page-right-btn').fadeIn(hideTime);
    $('#navi-page').addClass("navi-page-home");
  };
  //WORKS
  function workClick(){
    $('#home-message').hide(hideTime);
    $('#skill').hide(hideTime);
    $('#about').hide(hideTime);
    $('#contact').hide(hideTime);
    $('#works').fadeIn(fadeTime);

    $('#page-left-btn').fadeIn(hideTime);
    $('#page-right-btn').fadeIn(hideTime);
    $('#navi-page').removeClass("navi-page-home");
  };
  // SKILL
  function skillClick(){
    $('#home-message').hide(hideTime);
    $('#works').hide(hideTime);
    $('#about').hide(hideTime);
    $('#contact').hide(hideTime);
    $('#skill').fadeIn(fadeTime);

    $('#page-left-btn').fadeIn(hideTime);
    $('#page-right-btn').fadeIn(hideTime);
    $('#navi-page').removeClass("navi-page-home");
  };

  // ABOUT
  function aboutClick(){
    $('#home-message').hide(hideTime);
    $('#works').hide(hideTime);
    $('#skill').hide(hideTime);
    $('#contact').hide(hideTime);
    $('#about').fadeIn(fadeTime);

    $('#page-left-btn').fadeIn(hideTime);
    $('#page-right-btn').fadeIn(hideTime);
    $('#navi-page').removeClass("navi-page-home");
  };

  // CONTACT
  function contactClick(){
    $('#home-message').hide(hideTime);
    $('#works').hide(hideTime);
    $('#skill').hide(hideTime);
    $('#about').hide(hideTime);
    $('#contact').fadeIn(fadeTime);

    $('#page-left-btn').fadeIn(hideTime);
    $('#page-right-btn').hide(hideTime);
    $('#navi-page').removeClass("navi-page-home");
  };
  
  // メニューへの”Click”でsectionを切り替え*****************************
  
  const fadeTime = 1000;
  const hideTime = 0;


  $('#home-btn').click(function(){
    homeClick();});
  $('#works-btn').click(function(){
    workClick();});
  $('#skill-btn').click(function(){
    skillClick();});
  $('#about-btn').click(function(){
    aboutClick();});    
  $('#contact-btn').click(function(){
    contactClick();});

  // 三角ボタンでページ送り

    var pageNumber = 0;

  $('#page-right-btn').click(function(){
  
    pageNumber = pageNumber +1;

    switch(pageNumber){
      case 0:
        homeClick();
        break;
      case 1:
        workClick();
        break;
      case 2:
        skillClick();
        break;
      case 3:
        aboutClick();
        break;
      case 4:
        contactClick();
        break;
    }
  });

  $('#page-left-btn').click(function(){
  
    pageNumber = pageNumber -1;

    switch(pageNumber){
      case 0:
        homeClick();
        break;
      case 1:
        workClick();
        break;
      case 2:
        skillClick();
        break;
      case 3:
        aboutClick();
        break;
      case 4:
        contactClick();
        break;
    }
  });

// スクロールエフェクト
  AOS.init();

});