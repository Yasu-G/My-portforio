
$(function(){
  
  // カーセル*****************************
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    speed:1500,
  });

  // メニューへのマウスオーバーでnaviの色変えとメイン画像の切り替え*****************************
  // logo
  $('#logo').on('mouseover', function(){
    $('.carousel').slick('slickGoTo',0);
    $(this).animate({ opacity: 0.5,}, 100);
  });
  $('#logo').on('mouseout', function(){
    $(this).animate({ opacity: 1.0,}, 100);
  });
  
  //ABOUT 
  $('#navi-about').on('mouseover', function(){
    $('.carousel').slick('slickGoTo',1); 
    $(this).animate({ opacity: 0.5,}, 100);
  });
  $('#navi-about').on('mouseout', function(){
    $(this).animate({ opacity: 1.0,}, 100);
  });

  // WORKS
  $('#navi-works').on('mouseover', function(){
    $('.carousel').slick('slickGoTo',2);   
    $(this).animate({ opacity: 0.5,}, 100);
  });
  $('#navi-works').on('mouseout', function(){
    $(this).animate({ opacity: 1.0,}, 100);
  });

  // ScrollでTOPを表示*****************************
  $(window).scroll(function(){ 

    const scrollValue = $(window).scrollTop()

    if (scrollValue >= 100) {
      $('#top-btn').fadeIn(500);
    } else {
      $('#top-btn').fadeOut(500);
    }    

  });

  //ページ内リンク移動をスムーズにさせる*****************************
  
  $('a[href^="#"]').click(function () {
    const speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //スクロールしたときにセクションをフェードインさせる*****************************
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();

    $('.scroll-fade').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollValue > targetPosition - windowHeight + 300) {
        $(this).addClass("is-fadein");
      }else{
        $(this).removeClass("is-fadein");
      }
    });
  });

  //モーダルで拡大表示*****************************

  $('ul li a').click(function(){
  // $('.works-image').click(function(){ ?????なぜ

    var imgSrc = $(this).children().attr('src');
    console.log(imgSrc);
    $('.bigimg').children().attr('src',imgSrc);


    $('.modal').fadeIn();
    $('body,html').css('overflow-y','hidden');
    $('#top-btn').fadeOut(500);
    return false
  });

  $('.close-btn').click(function(){
    $('.modal').fadeOut();
    $('body,html').css('overflow-y','visible');
    $('#top-btn').fadeIn(500);
    return false
  });

});
