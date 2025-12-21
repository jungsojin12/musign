//1.gnb 마우스오버, 포커스시 밑줄 => span.bar
// gnb 마우스오버 / 포커스 시 밑줄(span.bar) 이동
$(function () {

    $('.gnb li a').on('mouseenter focus', function () {
        var bar = $(this).position().left;   // 메뉴 a의 부모 기준 left 위치
        var widNum = $(this).outerWidth();    // 메뉴 a의 너비

        $('span.bar').css({
            left: bar,
            width: widNum,
            opacity: 1
        });
    });

    $('.gnb li a').on('mouseleave blur', function () {
        $('span.bar').css({
            left: 0,
            width: 0,
            opacity: 0
        });
    });

});



//circleBox SVG길이구하기
$(function(){
   $('.svgAni').find('path').each(function(i, path){
      var length = path.getTotalLength(); 
      // alert(length);
   }); 
});



//3.스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:true, //모바일버전시 활성화
        once:true, //스크롤시 딱 한번만 하고 싶을 땐 true
    });
});



//5.햄버거 메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});