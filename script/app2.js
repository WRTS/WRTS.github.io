$( document ).ready(function() {
    $("#myText1").attr("disabled", true);
    $("#myText2").attr("disabled", true);
    $("#myText3").attr("disabled", true);
    $("#myText3").attr("disabled", true);
    $("#myText4").attr("disabled", true);
    $("#myText5").attr("disabled", true);
    $("#myText6").attr("disabled", true);
    $("#myText7").attr("disabled", true);
    $("#myText8").attr("disabled", true);
    $("#myText9").attr("disabled", true);
    $("#myText10").attr("disabled", true);
    $("#myText11").attr("disabled", true);
    $("#myText12").attr("disabled", true);
    $("#CommsEvalText").attr("disabled", true);
    $("#BreathingEvalText").attr("disabled", true);
    $("#NutritionEvalText").attr("disabled", true);
    $("#MobilityEvalText").attr("disabled", true);
    $(".addComms").attr("disabled", true);
    $(".addBreathing").attr("disabled", true);
    $(".addNutrition").attr("disabled", true);
    $(".addMobility").attr("disabled", true);
    $("#text01").attr("disabled", true);
    $("#text02").attr("disabled", true);
    $("#text03").attr("disabled", true);
    $("#text04").attr("disabled", true);
});

$('#slideCheckbox01').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#myText1").attr("disabled", false);
        $("#myText2").attr("disabled", false);
        $("#myText3").attr("disabled", false);
        $("#text01").attr("disabled", false);
    }
    else{ 
        $("#myText1").attr("disabled", true);
        $('#snomed-dropdown01').empty();
        $('#myText1').val('');
        $('#myText1').attr('placeholder', 'Text here');

        $("#myText2").attr("disabled", true);
        $('#snomed-dropdown02').empty();
        $('#myText2').val('');
        $('#myText2').attr('placeholder', 'Text here');

        $("#myText3").attr("disabled", true);
        $('#snomed-dropdown03').empty();
        $('#myText3').val('');
        $('#myText3').attr('placeholder', 'Text here');

        $(".chosen01").remove();
        $(".chosen02").remove();
        $(".chosen03").remove();

        $(".addComms").attr("disabled", true);
        $(".addBreathing").attr("disabled", true);
        $(".addNutrition").attr("disabled", true);
        $(".addMobility").attr("disabled", true);
        $("#text01").attr("disabled", true);
        $('#text01').val('');
    }
})

$('#slideCheckbox04').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#myText4").attr("disabled", false);
        $("#myText5").attr("disabled", false);
        $("#myText6").attr("disabled", false);
        $("#text02").attr("disabled", false);
    }
    else{ 
        $("#myText4").attr("disabled", true);
        $('#snomed-dropdown04').empty();
        $('#myText4').val('');
        $('#myText4').attr('placeholder', 'Text here');

        $("#myText5").attr("disabled", true);
        $('#snomed-dropdown05').empty();
        $('#myText5').val('');
        $('#myText5').attr('placeholder', 'Text here');

        $("#myText6").attr("disabled", true);
        $('#snomed-dropdown06').empty();
        $('#myText6').val('');
        $('#myText6').attr('placeholder', 'Text here');

        $(".chosen04").remove();
        $(".chosen05").remove();
        $(".chosen06").remove();

        $(".addComms").attr("disabled", true);
        $(".addBreathing").attr("disabled", true);
        $(".addNutrition").attr("disabled", true);
        $(".addMobility").attr("disabled", true);
        $("#text02").attr("disabled", true);
        $('#text02').val('');
    }
})

$('#slideCheckbox07').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#myText7").attr("disabled", false);
        $("#myText8").attr("disabled", false);
        $("#myText9").attr("disabled", false);
        $("#text03").attr("disabled", false);
    }
    else{ 
        $("#myText7").attr("disabled", true);
        $('#snomed-dropdown07').empty();
        $('#myText7').val('');
        $('#myText7').attr('placeholder', 'Text here');

        $("#myText8").attr("disabled", true);
        $('#snomed-dropdown08').empty();
        $('#myText8').val('');
        $('#myText8').attr('placeholder', 'Text here');

        $("#myText9").attr("disabled", true);
        $('#snomed-dropdown09').empty();
        $('#myText9').val('');
        $('#myText9').attr('placeholder', 'Text here');

        $(".chosen07").remove();
        $(".chosen08").remove();
        $(".chosen09").remove();

        $(".addComms").attr("disabled", true);
        $(".addBreathing").attr("disabled", true);
        $(".addNutrition").attr("disabled", true);
        $(".addMobility").attr("disabled", true);
        $("#text03").attr("disabled", true);
        $('#text03').val('');
    }
})

$('#slideCheckbox10').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#myText10").attr("disabled", false);
        $("#myText11").attr("disabled", false);
        $("#myText12").attr("disabled", false);
        $("#text04").attr("disabled", false);
    }
    else{ 
        $("#myText10").attr("disabled", true);
        $('#snomed-dropdown10').empty();
        $('#myText10').val('');
        $('#myText10').attr('placeholder', 'Text here');

        $("#myText11").attr("disabled", true);
        $('#snomed-dropdown11').empty();
        $('#myText11').val('');
        $('#myText11').attr('placeholder', 'Text here');

        $("#myText12").attr("disabled", true);
        $('#snomed-dropdown12').empty();
        $('#myText12').val('');
        $('#myText12').attr('placeholder', 'Text here');

        $(".chosen10").remove();
        $(".chosen11").remove();
        $(".chosen12").remove();

        $("#text04").attr("disabled", true);
        $('#text04').val('');
    }
})

$('#slideCheckbox03').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#CommsEvalText").attr("disabled", false);
    }
    else {
        $("#CommsEvalText").attr("disabled", true);
        $('#CommsEvalText').val('');
        $('#CommsEvalText').attr('placeholder', 'Your message.');
    }
})

$('#slideCheckbox06').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#BreathingEvalText").attr("disabled", false);
    }
    else {
        $("#BreathingEvalText").attr("disabled", true);
        $('#BreathingEvalText').val('');
        $('#BreathingEvalText').attr('placeholder', 'Your message.');
    }
})

$('#slideCheckbox09').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#NutritionEvalText").attr("disabled", false);
    }
    else {
        $("#NutritionEvalText").attr("disabled", true);
        $('#NutritionEvalText').val('');
        $('#NutritionEvalText').attr('placeholder', 'Your message.');
    }
})

$('#slideCheckbox12').on('click', function(){
    isChecked = $(this).is(':checked')
    if(isChecked){ 
        $("#MobilityEvalText").attr("disabled", false);
    }
    else {
        $("#MobilityEvalText").attr("disabled", true);
        $('#MobilityEvalText').val('');
        $('#MobilityEvalText').attr('placeholder', 'Your message.');
    }
})

$(".addComms").click(function(){
    $("#myText3").attr("disabled", false);
    $('#frequencyOption01').attr("disabled", false);
    $('#frequencyOption01').prop('selectedIndex',0);
    $("#myText3").val('');
    $('#myText3').attr('placeholder', 'Text here');
})

$(".addBreathing").click(function(){
    $("#myText6").attr("disabled", false);
    $("#myText6").val('');
    $('#myText6').attr('placeholder', 'Text here');
})

$(".addNutrition").click(function(){
    $("#myText9").attr("disabled", false);
    $("#myText9").val('');
    $('#myText9').attr('placeholder', 'Text here');
})

$(".addMobility").click(function(){
    $("#myText12").attr("disabled", false);
    $("#myText12").val('');
    $('#myText12').attr('placeholder', 'Text here');
})

