var page = 1;
$(document).ready(function(){
$(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        page++;
        $.ajax({
            url: '/topdeals?page='+page
        }).done(function(data) {
            $("#dealsContent").append(data);
        }).fail(function() {
            $("#dealsContent").append('<div class="alert alert-danger" role="alert">Sorry, something went wrong!!</div>');
        });                 
    }
});
});