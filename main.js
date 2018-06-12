$(document).ready(function(){
    $('.tabs').tabs();
    getAge();
    getProj();
    getEdu();
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

    var json = projdata;

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

function getEdu(){

    var json = edudata;

    for(let x = 0; x < json.info.length; x++){
        var newInfo = $(".modelInfo").clone().appendTo("#academicCard .container");
        $(newInfo).find(".header a").text(json.info[x].title);
        $(newInfo).find(".header a").attr("href", json.info[x].link);
        $(newInfo).find("h5").text(json.info[x].subtitle);
        for(let y = 0; y < json.info[x].icons.length; y++){
            $(newInfo).find(".icons").append(`<i class="devicons devicons-${json.info[x].icons[y]}"></i>`);
        }
        $(newInfo).removeClass("modelInfo");
    }

}