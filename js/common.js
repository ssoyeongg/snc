// 헤더 영역
$(function () {
  $("#header").hover(function () {
    $("#header").addClass("active");
    $(".depth2").show();
  }, function () {
    $("#header").removeClass("active");
    $(".depth2").hide();
  });
  $(".lang_area > li > button").click(function () {
    $(".lang_list").slideToggle();
  });
  $(".xi-globus").click(function () {
    $(".lang_list").slideToggle();
  });
  // 연혁
  AOS.init({
    duration: 1500,
  });
  // 서브페이지 공통: 탭메뉴
  AOS.init();
  // // 데스크탑_사이트맵
  $("button.menu").click(function () {
    $("#site_map").slideToggle();
  });
  $(".xi-close").click(function () {
    $("#site_map").slideToggle();
  });
  // 메인 섹션2:제품 영역
  $(".product_inner li .on").hide();
  $(".product_inner li .on").eq(0).show();
  $(".product_inner li .off").eq(0).hide();

  $(".product_inner div ul li").click(function () {
    $(".product_inner div ul li").removeClass("active");
    $(this).addClass("active");

    $(".product_inner div ul li span").removeClass("active");
    $(this).children("span").addClass("active");

    $(".product_inner li .on").eq(0).hide();
    $(".product_inner li .off").eq(0).show();
    $(".product_inner li .on").hide();
    $(".product_inner li .off").show();
    $(this).children("img").eq(0).show();

    var con_id = $(this).data("title");
    $(".pro_info_inner").hide();
    $("#" + con_id).show();
  });
  // 서브01-3:연혁
  $(".history_tab li").click(function(){
    $(".history_tab li").removeClass("on");
    $(this).addClass("on");
    var year_cont=$(this).data("title");
    $(".h_container .history_cont").hide();
    $("#" + year_cont).show();
  });
});
//서브03_용융아연도금_도금공정_스와이퍼
$(function () {
  var process_slide = new Swiper(".process_slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    delay: 2500,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 60,
    },

    breakpoints: {
      712: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  //서브03: 용융아연도금_생산설비_탭(제작,도금,품질/시험)
  $(".sub_menu01").on("click", function () {
    $(".facilities01").fadeIn();
    $(".facilities02").hide();
    $(".facilities03").hide();
  });

  $(".sub_menu02").on("click", function () {
    $(".facilities02").fadeIn();
    $(".facilities01").hide();
    $(".facilities03").hide();
  });

  $(".sub_menu03").on("click", function () {
    $(".facilities03").fadeIn();
    $(".facilities02").hide();
    $(".facilities01").hide();
  });

  $("#sub_container .sub_menu_list li").click(function () {
    $("#sub_container .sub_menu_list li").removeClass("on");
    $(this).addClass("on");
  });

  //연혁 슬라이더
  var process_slide = new Swiper(".history_slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    autoplay: false,
    delay: 8000,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 60,
    },

    breakpoints: {
      712: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      
    },
  });
});