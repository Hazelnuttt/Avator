
// $(function(){
//     var banOffTop=$(".navbar-default").offset().top;//获取到距离顶部的垂直距离
//     var scTop=0;//初始化垂直滚动的距离
//     $(document).scroll(function(){
//         scTop=$(this).scrollTop();//获取到滚动条拉动的距离
//         //console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
//         if(scTop>=banOffTop){
//             //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
//             $(".navbar-default").addClass("fixtop");
//         }else{
//             $(".navbar-default").removeClass("fixtop");
//         }
//
//     })
// })

$(function () {
    $('.donghua a').mouseenter(function () {
        $(this).find('i').animate({top:'-25px',opacity:'0'},300,function () {
            $(this).css({top: '10px'});
            $(this).animate({top:'30px',opacity: '1'},20)
        })
    })

})

