$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
    if(event.which == 13) {
        var item = $(this).val();
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+ item + "</li>");
        $("input").val("");
    }
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});