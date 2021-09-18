$(document).ready(function(){

    $('body').fadeIn(2500).css('display', 'block');

    $('#arendt .links').hover(function(){
        $(this).css('background-color', '#111111');
        $(this).css('color', '#dcdcdc');
    }, function(){
        $(this).css('color', '#111111');
        $(this).css('background-color', '#dcdcdc');
    });

    $('#ricoeur .links').hover(function(){
        $(this).css('color', '#111111');
        $(this).css('background-color', '#dcdcdc');
    }, function(){
        $(this).css('background-color', '#111111');
        $(this).css('color', '#dcdcdc');
    });

    setTimeout(function() {
        $('.topnav').fadeTo(2000, 1);
    }, 500);

    setTimeout(function() {
        $('#home p').fadeTo(2000, 1);
    }, 1250);

    $(window).scroll(function(){
        var light_pos = $('#arendt').offset().top;
        var light_height = $('#arendt').height();
        var menu_pos = $('.topnav').offset().top;
        var menu_height = $('.topnav').height();
        var scroll = $(window).scrollTop();
        console.log('light',light_pos);
        console.log('menu',menu_pos);
        console.log('scroll',scroll);

        if(menu_pos+50 > light_pos && menu_pos+50 < (light_pos + light_height)) {
            $('.topnav a').addClass('black');
            $('.topnav a').removeClass('white');
            $('.topnav a').addClass('blackline');
            $('.topnav a').removeClass('whiteline');
        }
        else {
            $('.topnav a').removeClass('black');
            $('.topnav a').addClass('white');
            $('.topnav a').addClass('whiteline');
            $('.topnav a').removeClass('blackline');
        }

    });
});