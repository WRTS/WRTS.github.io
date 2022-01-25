$(function () {
    //Initiate type ahead function
    $("#myText3").keyup(function(){
        if($(this).val()){
            $("#snomed-dropdown03").removeClass("hide");
        } else {
            $('#snomed-dropdown03').empty();
        };
    });

    //SEARCH
    let dropdown03 = $('#snomed-dropdown03');
    dropdown03.empty();
    $("#snomed-dropdown03").removeClass("hide");

    //OTHER | SEARCH
    var getData = function (request, response){
        //var api = "https://termservtestmaster.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<404684003&count=5&filter="
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
                $("#option_5").css("display","unset");
                $('#option_5').text(code + " |" + pft + "|");
                dropdown03.empty();
            });
        });
    }

    $("#myText3").autocomplete({
        source: getData,
        minLength: 3
    });
});
