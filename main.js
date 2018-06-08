var json = mydata;

$(document).ready(function(){
    $('.tabs').tabs();
    getAge();
    getProj();
});

function getAge(){
    var today = new Date();
    var month = today.getMonth();
    var year = today.getFullYear();
    var age;
    if(month > 0){
        age = year-1998;
    }else{
        age = year-1999;
    }
    $("#age").text(age);
}

function getProj(){
    for(let x = 0; x < json.cards.length; x++){
        var newCard = $(".modelCard").clone().appendTo("#projectsCard .row");
        $(newCard).find(".card-image .card-title").text(json.cards[x].title);
        $(newCard).find(".card-image img").attr("src", json.cards[x].img);
        $(newCard).find(".card-content p").text(json.cards[x].desc);
        for(let y = 0; y < json.cards[x].buttons.length; y++){
            $(newCard).find(".card-action").append(`<a target="_blank" href=${json.cards[x].buttons[y].link}>${json.cards[x].buttons[y].name}</a>`);
        }
        $(newCard).removeClass("modelCard");
    }
}