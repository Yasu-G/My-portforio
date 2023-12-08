$(function() {

  // カーセル*****************************
  $('#main-img').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed:1000,
    cssEase: 'linear',
    dots: false,
  });

  $('.work-slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: true,
    speed:1000,
    cssEase: 'linear',
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
  });



  // メニューへのマウスオーバーでメイン画像の切り替え*****************************
  // logo
  $('#home-btn').on('mouseover', function(){
    $('#main-img').slick('slickGoTo',0);
  });
  
  //WORKS
  $('#works-btn').on('mouseover', function(){
    $('#main-img').slick('slickGoTo',1); 
  });

  // SKILL
  $('#skill-btn').on('mouseover', function(){
    $('#main-img').slick('slickGoTo',2);   
  });

  // ABOUT
  $('#about-btn').on('mouseover', function(){
    $('#main-img').slick('slickGoTo',3);   
  });

  // CONTACT
    $('#contact-btn').on('mouseover', function(){
      $('#main-img').slick('slickGoTo',4);   
    });

  //ページ切り替えを関数として定義
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
    // $('#works-btn-link').style.backgroundColor= 'rgba(255,255,255, 1)';
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