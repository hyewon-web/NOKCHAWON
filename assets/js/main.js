$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정 : 창 한칸을 모두 차지 하기
    $('#content .main_visual').css('height', winHei); 
  });
  $(window).trigger('resize');


  //본문1 슬라이더
  var mySwiper1 = new Swiper('#cnt1 .swiper-container', {
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //본문3 신제품 -> color 4가지

    var cntHei = $('.color_wrap').height();
    var stickyTop = $('.sticky_content').offset().top;
    //console.log(cntHei, stickyTop);
  
    $(window).on('scroll', function () {
      var scrollY = $(this).scrollTop();
      //console.log(scrollY); //스크롤바의 수직 이동 거리
      console.log( $('#cnt3 .sticky_content').offset().top );
      /*  스크롤바가 이동하는 거리가 아래 크기보다 더 커질경우 불투명도 제어
      5개의 색상 div에서 반복 : 시작위치 + 윈도우 높이 x 인덱스번호
        $('반복할 대상 선택자').each(function (인덱스번호, 엘리먼트) {
          코드;
        }); 
      */
      $('.color_wrap div').each(function (idx) {
        if (scrollY > stickyTop + cntHei * idx) {
          $(this).addClass('opa1').siblings().removeClass('opa1');
        }
      });
    });

  //본문4 슬라이더
  var mySwiper2 = new Swiper('#cnt4 .swiper-container', {
    slidesPerView: 1.3 , //한 화면에 보여질 슬라이더 개수 기본1
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,    //스크롤바를 직접 드래그해서 이동가능
    },
    a11y: {
      //prevSlideMessage: '이전 슬라이드',
      //nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    }
  })
  //본문5 슬라이더
  var mySwiper1 = new Swiper('#cnt5 .swiper-container', {
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});