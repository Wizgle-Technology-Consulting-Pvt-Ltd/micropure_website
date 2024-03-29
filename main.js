// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 300) {
//         $(".change").removeClass("transparent");
//         document.getElementById("logo").src = "assests/micorpure_logo.svg";

//     } else {
//         $(".change").addClass("transparent");
//         document.getElementById("logo").src = "assests/micorpure_logo_white.svg";
//     }
// });

function openMobilePanel() {
    var element = document.querySelector('.navbar-collapse');
    element.classList.add('open');

    var curtain = document.querySelector('.curtain');
    curtain.classList.add('show');
}

function closeMobilePanel() {
    var element = document.querySelector('.navbar-collapse');
    element.classList.remove('open');

    var curtain = document.querySelector('.curtain');
    curtain.classList.remove('show');
}