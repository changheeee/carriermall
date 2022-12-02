
$(document).ready(function () {

    $('.my_sub').hide();

    $('.my_ico').mouseenter(function () {
        $('.my_sub').slideDown()

    })

    $('.my_sub').mouseleave(function () {
        $('.my_sub').slideUp()

    })

    $('.mobmn').hide();

    $('.user').click(function () {
        $('.mobmn').fadeIn()
    })

    $('.moclose').click(function () {
        $('.mobmn').fadeOut();

    })
    // -------------맨위로 버튼 보이고 안보이고-----------------------
    var headerHeight = $('#header').height();

    $('#sct').hide();

    $(window).scroll(function () {
        var rollIt = $(this).scrollTop() >= headerHeight;

        if (rollIt) {
            $('#sct').fadeIn();
        }
        else {
            $('#sct').fadeOut();
        }

    })
    // -----------------누르면 맨위로------------------------
    $('#sct').click(function () {
        $('html').animate({ scrollTop: 0 }, '300');
    })



})