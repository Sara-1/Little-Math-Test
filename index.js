$(".btn").on("click", function submitted() {

    var firstQuestion = 0;
    var secondQuestion = 0;
    var thirdQuestion = 0;

    var resultString = "a";


    if (document.getElementById("inlineRadio1-1").checked)
        firstQuestion = 1;
    else if (document.getElementById("inlineRadio1-2").checked)
        firstQuestion = 2;
    else if (document.getElementById("inlineRadio1-3").checked)
        firstQuestion = 3;
    else if (document.getElementById("inlineRadio1-4").checked)
        firstQuestion = 4;
    else
        firstQuestion = 5;




    if (document.getElementById("inlineRadio2-1").checked)
        secondQuestion = 1;
    else if (document.getElementById("inlineRadio2-2").checked)
        secondQuestion = 2;
    else if (document.getElementById("inlineRadio2-3").checked)
        secondQuestion = 3;
    else if (document.getElementById("inlineRadio2-4").checked)
        secondQuestion = 4;
    else
        secondQuestion = 5;




    if (document.getElementById("inlineRadio3-1").checked)
        thirdQuestion = 1;
    else if (document.getElementById("inlineRadio3-2").checked)
        thirdQuestion = 2;
    else if (document.getElementById("inlineRadio3-3").checked)
        thirdQuestion = 3;
    else if (document.getElementById("inlineRadio3-4").checked)
        thirdQuestion = 4;
    else
        thirdQuestion = 5;


if (firstQuestion == 3 && secondQuestion == 2 && thirdQuestion == 3){
    resultString = "First question is correct! Second question also correct! All your answers are correct! Congratualtions.";
}else {
    resultString = "Oops sorry try again";
}

alert (resultString);


});
