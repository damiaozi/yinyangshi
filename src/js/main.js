
//banner=============================================================
//    轮播1
$(function() {
    var i = 0;
    var clone = $(".banner-ss .img li").first().clone();
    $(".banner-ss .img").append(clone);
    //添加小圆点
    var size = $(".banner-ss .img li").size();
    for (var j = 0; j < size - 1; j++) {
        $(".banner-ss .num").append("<li></li>");
    }
    $(".banner-ss .num li").first().addClass("on");

    //鼠标滑入圆点
    $(".banner-ss .num li").hover(function() {
        var index = $(this).index();
        i = index;

        $(".banner-ss .img").stop().animate({
            left: -index * 360
        }, 360);
        $(this).addClass("on").siblings().removeClass("on");

    });
    //自动轮播
    var t = setInterval(moveRR, 3000);

    //对banner-ss定时器操作

    $(".banner-ss").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(moveRR, 3000);
    });

    function moveRR() {
        i++;
        if (i == size) {
            i = 1;
            $(".banner-ss .img").css("left", "0px");
        }
        $(".banner-ss .img").stop().animate({
            left: -i * 360
        }, 500);
        if (i == size - 1) {
            $(".banner-ss .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".banner-ss .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }

    function moveLL() {
        i--;
        if (i == -1) {
            i = size - 2;
            $(".banner-ss .img").css("left", -(size - 1) * 360);
        }

        $(".banner-ss .img").stop().animate({
            left: -i * 360
        }, 500);
        $(".banner-ss .num li").eq(i).addClass("on").siblings().removeClass("on");
    }
});

//  淡入淡出

$(function() {
    $(".download-a").click(function() {
        $(".download").animate({
            right: -400
        }, 500);
        $(".down-s").fadeIn(1000).css("display", "block");

    });
    $(".down-s").click(function() {
        $(".download").animate({
            right: 0
        }, 500);
        $(".down-s").css("display", "none");
    });
});

$(function() {
    $(".icon7").hover(function() {
        $(".icon7-z").stop().slideToggle(500);
    });
});

//shishen========================================================================
$(function() {
    //式神、主角点击效果

    //nav
    $("#yys-shishen .shishen").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("#yys-shishen .shishen-container").css("display", "block").siblings().css("display", "none");
    });
    $("#yys-shishen .zhujue").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("#yys-shishen .zhujue-container").css("display", "block").siblings().css("display", "none");
    });

    //主角内容部分效果
    $(".zhujue-tab").click(function() {
        $(this).addClass("cur").siblings().removeClass("cur");
    });

    $(".zj-qm").click(function() {
        $(".qm-main").addClass("show").siblings().removeClass("show");
    });
    $(".zj-sy").click(function() {
        $(".sy-main").addClass("show").siblings().removeClass("show");
    });
    $(".zj-yby").click(function() {
        $(".yby-main").addClass("show").siblings().removeClass("show");
    });
    $(".zj-bbbqn").click(function() {
        $(".bbbqn-main").addClass("show").siblings().removeClass("show");
    });

    //式神左右切换按钮
    var i = 0;
    $("#yys-shishen .next").click(function() {
        moveL();
        if (i == 4) {
            $("#yys-shishen .next").css("display", "none");
        }
    });
    $("#yys-shishen .prev").click(function() {
        moveR();
        $("#yys-shishen .next").css("display", "block");
    });

    function moveL() {
        i++;
        if (i == 5) {
            i = 0;
            $(".temp-wrap .shishen-list").css("left", "0");
        } else {
            $(".temp-wrap .shishen-list").animate({
                left: i * -828
            }, 500);
        }
        if (i == 0) {
            $("#yys-shishen .prev").css("display", "none");
        } else {
            $("#yys-shishen .prev").css("display", "block");
        }
    }

    function moveR() {
        i--;
        $(".temp-wrap .shishen-list").animate({
            left: i * -828
        }, 500);
        if (i == 0) {
            $("#yys-shishen .prev").css("display", "none");
        } else {
            $("#yys-shishen .prev").css("display", "block");
        }
    }

    //式神all、ssr、sr等点击效果
    $("#yys-shishen .shishen-tabs span").click(function() {
        $(this).addClass("cur").siblings().removeClass("cur");
    });

    //全部式神点击效果
    $("#yys-shishen .all").click(function() {
        $("#yys-shishen .temp-wrap").css("display", "block").siblings().css("display", "none");
        $("#yys-shishen .next").css("display", "block");
        if (i != 0) {
            $("#yys-shishen .prev").css("display", "block");
        } else {
            $("#yys-shishen .prev").css("display", "none");
        }
    });
    //ssr点击效果
    $("#yys-shishen .ssr").click(function() {
        $("#yys-shishen .temp-ssr").css("display", "block").siblings().css("display", "none");
        $("#yys-shishen .shishenlist-container>span").css("display", "none");
    });
    //sr点击效果
    $("#yys-shishen .sr").click(function() {
        $("#yys-shishen .temp-sr").css("display", "block").siblings().css("display", "none");
        $("#yys-shishen .shishenlist-container>span").css("display", "none");
    });
    //r点击效果
    $("#yys-shishen .r").click(function() {
        $("#yys-shishen .temp-r").css("display", "block").siblings().css("display", "none");
        $("#yys-shishen .shishenlist-container>span").css("display", "none");
    });
    //n点击效果
    $("#yys-shishen .n").click(function() {
        $("#yys-shishen .temp-n").css("display", "block").siblings().css("display", "none");
        $("#yys-shishen .shishenlist-container>span").css("display", "none");
    });
});

//  固定顶部
$(function() {
    $(window).scroll(function() {
        var t = $(this).scrollTop();
        if (t > 58) {
            $(".top-bar").stop().addClass("top-bar-fixed");
            $(".top-left").stop().fadeIn(500).addClass("top-left-visible");
        } else {
            $(".top-bar").stop().removeClass("top-bar-fixed");
            $(".top-left").stop().fadeOut(500).css("display", "none");
        }
        if (t > 1300) {
            $(".yys-back-top").css("display", "block");
        } else {
            $(".yys-back-top").css("display", "none");
        }
    });

    $('.yys-back-top').click(function() {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 700);
    });
});

//蔡雅玲轮播图strategy===================================================

$(function() {
    var i = 0;
    var clone = $(".strategy-banner .img li").first().clone();
    $(".strategy-banner .img").append(clone);
    //添加小圆点
    var size = $(".strategy-banner .img li").size();
    for (var j = 0; j < size - 1; j++) {
        $(".strategy-banner .num").append("<li></li>");
    }
    $(".strategy-banner .num li").first().addClass("on");

    //鼠标滑入圆点
    $(".strategy-banner .num li").hover(function() {
        var index = $(this).index();
        i = index;

        $(".strategy-banner .img").stop().animate({
            left: -index * 368
        }, 1000);
        $(this).addClass("on").siblings().removeClass("on");

    });
    //自动轮播
    var t = setInterval(moveR, 3000);

    //对banner定时器操作

    $(".strategy-banner").hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(moveR, 3000);
    });

    function moveR() {
        i++;
        if (i == size) {
            i = 1;
            $(".strategy-banner .img").css("left", "0px");
        }
        $(".strategy-banner .img").stop().animate({
            left: -i * 368
        }, 500);
        if (i == size - 1) {
            $(".strategy-banner .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".strategy-banner .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }

    function moveL() {
        i--;
        if (i == -1) {
            i = size - 2;
            $(".strategy-banner .img").css("left", -(size - 1) * 368);
        }

        $(".strategy-banner .img").stop().animate({
            left: -i * 368
        }, 500);
        $(".strategy-banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    }

    //点击事件
    $("#yys-strategy .label").click(function() {
        $(this).addClass("qwerty").siblings().removeClass("qwerty");
    });

});

// 图标缩放
$(function() {
    $(window).scroll(function() {
        var t = $(this).scrollTop();
        if (t > 58) {
            $(".logo-animate").css({
                transform: 'scale(0)',
                transition: '1s'
            });

        } else {
            $(".logo-animate").css({
                transform: 'scale(1)',
                transition: '1s'
            });

        }
    });
});

// 同人滑动tongren====================================================

$(function() {
    $("#yys-tongren .tongren1").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").stop().animate({
            left: 0
        });
    });
    $("#yys-tongren .tongren2").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").stop().animate({
            left: -1225
        });
    });
    $("#yys-tongren .tongren3").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").stop().animate({
            left: -2450
        });
    });
    $("#yys-tongren .tongren4").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").stop().animate({
            left: -3675
        });
    });
    $("#yys-tongren .tongren6").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").stop().animate({
            left: -4900
        });
    });
    $("#yys-tongren .tongren5").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").stop().animate({
            left: -6125
        });
    });
    $("#yys-tongren .tongren1").mouseenter(function() {
        $("#yys-tongren .tongren_pics_wrap").animate({
            left: 0
        }, 500);
    });

    $(".tog-tabs li").mouseenter(function() {
        console.log(this);
        $(this).addClass("qqqqqq").siblings().removeClass("qqqqqq");
        $(this).addClass("pppppp").siblings().removeClass("pppppp");
    });
});



// 游戏导航header=====================================================
$(function() {
    $("#yys-header .topBar-xianshi").mouseout(function() {
        $(this).hide();
    });
    $(".topBar-yc").mouseenter(function() {
        $(".topBar-xianshi").stop().slideDown(500);
    });
});

// 青蛙呱呱呱banner==============================================
$(function() {
    $("#yys-banner .qingwa").click(function() {
        $("#banner-pop").css("display", "block");
    });
    $("#yys-banner .pop-close").click(function() {
        $("#banner-pop").css("display", "none");
    });
});

// 视频弹出video====================================================
$(function() {
    $(".yys-video-part img").click(function() {
        $(".yys-videomask").css("display", "block");
    });
    $(".videomask-close").click(function() {
        $(".yys-videomask").css("display", "none");
    });
});
