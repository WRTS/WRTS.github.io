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
