$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".goTop").fadeIn();
        }
        else{
            $(".goTop").fadeOut();
        }
    })

    $(".goTop").click(function(){scroll(0,0)});
});