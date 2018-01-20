$(document).ready(function() {
    $(".filter").click(function() {
        $(".filters").show();
        $(".projects").hide();
    });
});
$(document).ready(function() {
    $(".project").click(function() {
        $(".filters").hide();
        $(".projects").show();
    });
});
$(document).ready(function() {
    $(".inbox-item").click(function() {
        $(".inbox").show();
        $(".today").hide();
        $(".plus-seven-days").hide();
    });
});
$(document).ready(function() {
    $(".calendar-item1").click(function() {
        $(".today").show();
        $(".plus-seven-days").hide();
        $(".inbox").hide();
    });
});
$(document).ready(function() {
    $(".calendar-item2").click(function() {
        $(".plus-seven-days").show();
        $(".inbox").hide();
        $(".today").hide();
    });
});