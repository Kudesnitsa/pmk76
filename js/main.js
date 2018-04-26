
jQuery(document).ready(function () {
    jQuery('.icon_nav').on('click', function () {
        jQuery('.menu_mob').toggleClass('mob');
    });
    jQuery('.select .sub_btn').click(function () {
        var chosen = jQuery('.select .chosen');
        chosen.html(jQuery(this).html());
        jQuery(this).html(chosen.html());
    });











});
