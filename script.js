test = {}


test.onSubmit = function(){

    // part email
    test.checkInput("email");

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;// regex email
    // test la valeur de l'email
    if (!re.test($("#email")[0].value)){
       test.createError("email", "Entrez un email valide !")
    }else{
        $("#email").addClass("validate");
    }

    // part field text
    test.checkInput("name");

    var relettre= /^[A-z]{1,}/;
    if (!relettre.test($("#name")[0].value)){
        test.createError("name", "Entrez un nom valide !")
     }else{
         $("#name").addClass("validate");
     }


    test.checkInput("firstname");
    if (!relettre.test($("#firstname")[0].value)){
        test.createError("firstname", "Entrez un prénom valide !")
     }else{
         $("#firstname").addClass("validate");
     }

     test.checkInput("username");
    if (!relettre.test($("#username")[0].value)){
        test.createError("username", "Entrez un username valide !")
     }else{
         $("#username").addClass("validate");
     }

     var repassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}/
    test.checkInput("password");
    if (!repassword.test($("#password")[0].value)){
        test.createError("password", "Entrez un password entre 8 et 10 caractères avec au moins 1 majuscule 1 miniscule 1 caractère contenue dans la liste suivante (#$^+=!*@%&)!")
     }else{
         $("#password").addClass("validate");
     }
}

$("#submit").click(function(event)
{
  event.preventDefault(); // cancel default behavior
    test.onSubmit();

});


test.createError = function(inputId, message){
    $("<p id=\"error"+inputId+"\" class=\"error\">"+message+"</p>").insertAfter($("#"+inputId));
    $("#"+inputId).addClass("error");
}

test.checkInput = function(inputId){

    // MAIL PART
    if($("#"+inputId).hasClass("error")){ 
        $("#"+inputId).removeClass("error");
        $("#error"+inputId).remove();
    } // remove par défaut l'erreur précédente

    if($("#"+inputId).hasClass("validate")){
        $("#"+inputId).removeClass("validate");
    }
}