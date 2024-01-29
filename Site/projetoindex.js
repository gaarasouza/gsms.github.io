function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInUp");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutDown");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInUp");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutDown");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
