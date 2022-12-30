$(function(){
    //서브메뉴
    $('.sub, .sub_bg').hide();
    $('nav').mouseover(function(){
        $('.sub, .sub_bg').stop().slideDown();
    }).mouseout(function(){
        $('.sub, .sub_bg').stop().slideUp();
    });
    $('.m_menu').click(function(){
        $('nav').toggleClass('on');
    })
    //이미지 슬라이드
    $("ul.slide li").eq(0).siblings().hide();

    var slideIndex = 0;
    setInterval(function(){
        if(slideIndex<2){
            slideIndex++;
        }else{
            slideIndex=0;
        };
        $("ul.slide li").eq(slideIndex).siblings().fadeOut();
        $("ul.slide li").eq(slideIndex).fadeIn();
    },5000);
    //탭메뉴
    $(function(){
        $(".tabmenu>li>a").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        });
    });
    //팝업
    $('.notice li:first').click(function(){
        $('.modalwrap').addClass("active");
    });
    $('.btn').click(function(){
        $('.modalwrap').removeClass("active");
    });
});