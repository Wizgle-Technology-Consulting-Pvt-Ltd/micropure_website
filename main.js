$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $(".change").removeClass("transparent");
        document.getElementById("logo").src = "assests/micorpure_logo.svg";

    } else {
        $(".change").addClass("transparent");
        document.getElementById("logo").src = "assests/micorpure_logo_white.svg";
    }
});