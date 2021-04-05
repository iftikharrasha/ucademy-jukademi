/* sticky header */
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $("header").addClass("stick");
    } else {
        $("header").removeClass("stick");
    }
});