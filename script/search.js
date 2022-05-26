$(function () {
    //Initiate type ahead function
    $("#myText1").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown01").removeClass("hide");
        } else {
            $('#snomed-dropdown01').empty();
        };
    });

    $("#myText2").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown02").removeClass("hide");
        } else {
            $('#snomed-dropdown02').empty();
        };
    });

    $("#myText3").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown03").removeClass("hide");
        } else {
            $('#snomed-dropdown03').empty();
        };
    });

    $("#myText4").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown04").removeClass("hide");
        } else {
            $('#snomed-dropdown04').empty();
        };
    });

    $("#myText5").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown05").removeClass("hide");
        } else {
            $('#snomed-dropdown05').empty();
        };
    });

    $("#myText6").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown06").removeClass("hide");
        } else {
            $('#snomed-dropdown06').empty();
        };
    });

    $("#myText7").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown07").removeClass("hide");
        } else {
            $('#snomed-dropdown07').empty();
        };
    });

    $("#myText8").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown08").removeClass("hide");
        } else {
            $('#snomed-dropdown08').empty();
        };
    });

    $("#myText9").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown09").removeClass("hide");
        } else {
            $('#snomed-dropdown09').empty();
        };
    });

    $("#myText10").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown10").removeClass("hide");
        } else {
            $('#snomed-dropdown10').empty();
        };
    });

    $("#myText11").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown11").removeClass("hide");
        } else {
            $('#snomed-dropdown11').empty();
        };
    });

    $("#myText12").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown12").removeClass("hide");
        } else {
            $('#snomed-dropdown12').empty();
        };
    });

    $("#myText13").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown013").removeClass("hide");
        } else {
            $('#snomed-dropdown13').empty();
        };
    });

    $("#myText14").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown14").removeClass("hide");
        } else {
            $('#snomed-dropdown14').empty();
        };
    });

    $("#myText15").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown15").removeClass("hide");
        } else {
            $('#snomed-dropdown15').empty();
        };
    });

    //SEARCH 1 | Nursing Problem | 404684003 |Clinical finding (finding)|
    let dropdown01 = $('#snomed-dropdown01');
    dropdown01.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown01.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown01 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown01.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText1').val(pft)
                dropdown01.empty();
                $('#selectedCommsNursing').html('<span class="chosen01">'+pft+'<span class="minus"></span></span>')
                $("#myText1").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen01").remove();
                    $("#myText1").attr('disabled', false);
                    $("#myText1").val('');
                    $('#myText1').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText1").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 2 | Secondary To | 404684003 |Clinical finding (finding)|
    let dropdown02 = $('#snomed-dropdown02');
    dropdown02.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown02.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown02 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown02.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText2').val(pft)
                dropdown02.empty();
                $('#selectedCommsSecond').html('<span class="chosen02">'+pft+'<span class="minus"></span></span>')
                $("#myText2").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen02").remove();
                    $("#myText2").attr('disabled', false);
                    $("#myText2").val('');
                    $('#myText2').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText2").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 3 | Nursing Intervention | 71388002 |Procedure (procedure)|
    let dropdown03 = $('#snomed-dropdown03');
    dropdown03.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<71388002&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown03.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown03 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown03.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText3').val(pft)
                dropdown03.empty();
                $(".addComms").attr("disabled", false);
                $('#selectedCommsIntervention').append('<span class="chosen03">'+pft+'<select class="frequency01"><option default>Frequency</option><option>Hourly</option><option>Every two hours</option><option>Every two hours</option><option>Every four hours</option><option>Every six hours</option><option>Every eight hours</option><option>Every ten hours</option><option>Every twelve hours</option><option>Every eighteen hours</option><option>Every twenty four hours</option></select><span class="minus"></span><br></span>')
                $("#myText3").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen03").remove();
                    $("#myText3").attr('disabled', false);
                    $("#myText3").val('');
                    $('#myText3').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText3").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 4 | Nursing Problem | 404684003 |Clinical finding (finding)|
    let dropdown04 = $('#snomed-dropdown04');
    dropdown04.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown04.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown04 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown04.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText4').val(pft)
                dropdown04.empty();

                $('#selectedBreathingNursing').html('<span class="chosen04">'+pft+'<span class="minus"></span></span>')
                $("#myText4").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen04").remove();
                    $("#myText4").attr('disabled', false);
                    $("#myText4").val('');
                    $('#myText4').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText4").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 5 | Secondary To | 404684003 |Clinical finding (finding)|
    let dropdown05 = $('#snomed-dropdown05');
    dropdown05.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown05.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown05 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown05.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText5').val(pft)
                dropdown05.empty();
                $('#selectedBreathingSecond').html('<span class="chosen05">'+pft+'<span class="minus"></span></span>')
                $("#myText5").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen05").remove();
                    $("#myText5").attr('disabled', false);
                    $("#myText5").val('');
                    $('#myText5').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText5").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 6 | Nursing Intervention | 71388002 |Procedure (procedure)|
    let dropdown06 = $('#snomed-dropdown06');
    dropdown06.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<71388002&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown06.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown06 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown06.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText6').val(pft)
                dropdown06.empty();

                $(".addBreathing").attr("disabled", false);
                $('#selectedBreathingIntervention').append('<span class="chosen06">'+pft+'<select class="frequency02"><option default>Frequency</option><option>Hourly</option><option>Every two hours</option><option>Every two hours</option><option>Every four hours</option><option>Every six hours</option><option>Every eight hours</option><option>Every ten hours</option><option>Every twelve hours</option><option>Every eighteen hours</option><option>Every twenty four hours</option></select><span class="minus"></span><br></span>')
                $("#myText6").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen06").remove();
                    $("#myText6").attr('disabled', false);
                    $("#myText6").val('');
                    $('#myText6').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText6").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 7 | Nursing Problem | 404684003 |Clinical finding (finding)|
    let dropdown07 = $('#snomed-dropdown07');
    dropdown07.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown07.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown07 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown07.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText7').val(pft)
                dropdown07.empty();

                $('#selectedNutritionNursing').html('<span class="chosen07">'+pft+'<span class="minus"></span></span>')
                $("#myText7").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen07").remove();
                    $("#myText7").attr('disabled', false);
                    $("#myText7").val('');
                    $('#myText7').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText7").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 8 | Secondary To | 404684003 |Clinical finding (finding)|
    let dropdown08 = $('#snomed-dropdown08');
    dropdown08.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown08.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown08 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown08.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText8').val(pft)
                dropdown08.empty();

                $('#selectedNutritionSecond').html('<span class="chosen08">'+pft+'<span class="minus"></span></span>')
                $("#myText8").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen08").remove();
                    $("#myText8").attr('disabled', false);
                    $("#myText8").val('');
                    $('#myText8').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText8").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 9 | Nursing Intervention | 71388002 |Procedure (procedure)|
    let dropdown09 = $('#snomed-dropdown09');
    dropdown09.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<71388002&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown09.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown09 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown09.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText9').val(pft)
                dropdown09.empty();

                $(".addNutrition").attr("disabled", false);
                $('#selectedNutritionIntervention').append('<span class="chosen09">'+pft+'<select class="frequency03"><option default>Frequency</option><option>Hourly</option><option>Every two hours</option><option>Every two hours</option><option>Every four hours</option><option>Every six hours</option><option>Every eight hours</option><option>Every ten hours</option><option>Every twelve hours</option><option>Every eighteen hours</option><option>Every twenty four hours</option></select><span class="minus"></span><br></span>')
                $("#myText9").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen09").remove();
                    $("#myText9").attr('disabled', false);
                    $("#myText9").val('');
                    $('#myText9').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText9").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 10 | Nursing Problem | 404684003 |Clinical finding (finding)|
    let dropdown10 = $('#snomed-dropdown10');
    dropdown10.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown10.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown10 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown10.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText10').val(pft)
                dropdown10.empty();

                $('#selectedMobilityNursing').html('<span class="chosen10">'+pft+'<span class="minus"></span></span>')
                $("#myText10").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen10").remove();
                    $("#myText10").attr('disabled', false);
                    $("#myText10").val('');
                    $('#myText10').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText10").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 11 | Secondary To | 404684003 |Clinical finding (finding)|
    let dropdown11 = $('#snomed-dropdown11');
    dropdown11.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown11.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown11 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown11.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText11').val(pft)
                dropdown11.empty();

                $('#selectedMobilitySecond').html('<span class="chosen11">'+pft+'<span class="minus"></span></span>')
                $("#myText11").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen11").remove();
                    $("#myText11").attr('disabled', false);
                    $("#myText11").val('');
                    $('#myText11').attr('placeholder', 'Text here');
                })
            });
        });
    }

    $("#myText11").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 12 | Nursing Intervention | 71388002 |Procedure (procedure)|
    let dropdown12 = $('#snomed-dropdown12');
    dropdown12.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<71388002&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown12.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown12 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown12.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText12').val(pft)
                dropdown12.empty();

                $(".addMobility").attr("disabled", false);
                $('#selectedMobilityIntervention').append('<span class="chosen12">'+pft+'<select class="frequency04"><option default>Frequency</option><option>Hourly</option><option>Every two hours</option><option>Every two hours</option><option>Every four hours</option><option>Every six hours</option><option>Every eight hours</option><option>Every ten hours</option><option>Every twelve hours</option><option>Every eighteen hours</option><option>Every twenty four hours</option></select><span class="minus"></span><br></span>')
                $("#myText12").attr('disabled', true)

                $(".minus").click(function(){
                    $(this).closest(".chosen12").remove();
                    $("#myText12").attr('disabled', false);
                    $("#myText12").val('');
                    $('#myText12').attr('placeholder', 'Text here');
                })
				
            });
        });
    }

    $("#myText12").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 13 | Nursing Problem | 404684003 |Clinical finding (finding)|
    let dropdown13 = $('#snomed-dropdown13');
    dropdown13.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown13.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown13 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown13.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText13').val(pft)
                dropdown13.empty();
            });
        });
    }

    $("#myText13").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 14 | Secondary To | 404684003 |Clinical finding (finding)|
    let dropdown14 = $('#snomed-dropdown14');
    dropdown14.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown14.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown14 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown14.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText14').val(pft)
                dropdown14.empty();
            });
        });
    }

    $("#myText14").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 15 | Nursing Intervention | 71388002 |Procedure (procedure)|
    let dropdown15 = $('#snomed-dropdown15');
    dropdown15.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<71388002&count=5&filter="
        $.getJSON(api + request.term, function (data){
            dropdown15.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
            $("#snomed-dropdown15 > li").first().focus();
            $.each(data.expansion.contains, function(i,value){
                dropdown15.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                '))
            });

            $(".name").click(function(){
                var pft = $(this).val(".name").text();
                var code = $(this).parent().val();
                $('#myText15').val(pft)
                dropdown15.empty();
            });
        });
    }

    $("#myText15").autocomplete({
        source: getData,
        minLength: 3
    });




});
