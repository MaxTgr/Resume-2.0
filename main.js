$(".email-button").hover(function(){
    $(this).children().toggleClass("fa-envelope")
    $(this).children().text("raranmariano@hotmail.com")
    $(this).children().css({
        fontSize: "1rem",
        textTransform: "lowercase"
    })
},function(){
    $(this).children().toggleClass("fa-envelope")
    $(this).children().text("")
    $(this).children().css({
        fontSize: "1.6rem",
        textTransform: "lowercase"
    })
})