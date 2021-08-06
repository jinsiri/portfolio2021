$(function() {
    var browse = navigator.userAgent.toLowerCase();

    if ((navigator.appName == 'Netscape' && browse.indexOf('trident') != -1) || (browse.indexOf("msie") != -1)) {
        $('.section02, .section03').css({'height':'100vh'});
    }

    //header
    $('.btn--hamburger').on('click', function() {
        $(this).toggleClass('on');
        $('.bg--mobile').toggleClass('on');
        $('.header__nav--gnb').toggleClass('on');
    });

    $('.bg--mobile').on('click', function() {
        $(this).removeClass('on');
        $('.btn--hamburger').removeClass('on');
        $('.header__nav--gnb').removeClass('on');
    });

    var myAOS = function() {
        AOS.init({
            easing: 'ease-out-back',
            duration: 500
        });
    }

    myAOS();

    $(window).scroll(function() {
        var st = $(window).scrollTop();
        if (st >= 100) {
            $('.btn--top').css('opacity', 1);
            $('header').addClass('fixed');
        } else {
            $('.btn--top').css('opacity', 0);
            $('header').removeClass('fixed');
        }
    });

    $('.section06__slide-wrap').slick({
        //autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '125px',
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });

    var activeNum = 0;
    setInterval(function() {
        $('.section04__ul li').removeClass('active');
        $('.section04__ul li:nth-child(' + activeNum + ')').addClass('active');

        if (activeNum > 5) {
            activeNum = 1;
        } else {
            activeNum += 1;
        }
    }, 1000);

    $('.header__nav--gnb button').on('click', function() {
        var selectedTarget = $(this).attr('data-target');
        var targetPosition = $('.' + selectedTarget).offset().top;

        if ($('.header__nav--gnb').hasClass('on')) {
            $('.bg--mobile').removeClass('on');
            $('.btn--hamburger').removeClass('on');
            $('.header__nav--gnb').removeClass('on');
            $('body,html').animate({
                'scrollTop': targetPosition - 90
            });
        } else {
            $('body,html').animate({
                'scrollTop': targetPosition
            });
        }
    });

    $('.header__nav--gnb a').on('click', function() {
        if ($('.header__nav--gnb').hasClass('on')) {
            $('.bg--mobile').removeClass('on');
            $('.btn--hamburger').removeClass('on');
            $('.header__nav--gnb').removeClass('on');
        }
    });

    $('.btn--top').on('click', function() {
        var st = $(window).scrollTop();

        $('body,html').scrollTop(0);
    });
});
