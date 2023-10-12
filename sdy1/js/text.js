function hello(){
    var rnd1 = Math.floor(Math.random()*20);
    var rnd2 = Math.floor(Math.random()*40);
    var rnd3 = Math.floor(Math.random()*3) + 100;

    $(".hello").css({
        "bottom" : rnd1, "left" : rnd2
});
//배경 확대
$(".hello .text").css({"background-size" : rnd3 + "%"});
}
//0.01초 마다 hello()함수가 호출된다.
setInterval(hello,10);