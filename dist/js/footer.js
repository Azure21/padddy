/**
 * Created by ustb on 14-5-15.
 */
function setFooter() {
    if (window.innerHeight <= ($('#myContainer').height()+350)) {
        $('#footer').removeClass('footerStyle1').addClass('footerStyle2');
        console.log('style2');
    } else {
        $('#footer').removeClass('footerStyle2').addClass('footerStyle1');
        console.log('style1');
    }

}
$(document).ready(function () {
    setFooter();
});

$(window).resize(function () {
    setFooter();
});