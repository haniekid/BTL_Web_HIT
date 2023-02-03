$(document).ready(function () {
    $('.tab_content .item').hide();
    $('.tab_content .item:first-child').fadeIn();
    $('.tab_header .item').click(function () {
        $('.item').removeClass('active');
        $(this).addClass('active');
        let id = $(this).children('a').attr('href');
        $('.tab_content .item').hide();
        $(id).fadeIn();
        return false;
    });
});
