$(document).ready(function() {
    $(document).scroll(function() {
        var value = $("body").scrollTop();
        if (value < 660) {
            $("a[href=#events]").removeClass("nav__item--current");
            $("a[href=#home]").addClass("nav__item--current");
        }
        if (value >= 660) {
            $("a[href=#home]").removeClass("nav__item--current");
            $("a[href=#events]").addClass("nav__item--current");
        }
    });

    $(document).on("click", "a.nav__item", function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
        }, 500);
    });

    $(document).on("click", ".events-nav__item", function(event){
        event.preventDefault();

        $(".events-nav__item--current").removeClass("events-nav__item--current");
        $(this).addClass("events-nav__item--current");

        $(".event_year.current").toggleClass("current");
        $($.attr(this, "href")).toggleClass("current");
    });
});
