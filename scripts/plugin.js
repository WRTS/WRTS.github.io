$(function  () {
    const toggle = $('#toggle');

    $(".inner-wrap2").addClass("hide");

    //Initiate type ahead function
    $("#myText3").keyup(function(){
        if($(this).val()) {
            $("#snomed-dropdown03").removeClass("hide");
        } else {
            $('#snomed-dropdown03, #toggle').empty();
        }
    });

    let dropdown03 = $('#snomed-dropdown03');
    dropdown03.empty();
    $("#snomed-dropdown03, .inner-wrap").removeClass("hide");

    $.fn.basicFunction3 = function() {
        //SUBSTANCE
        var getData = function (request, response) {
            $('#snomed-dropdown03').empty();
            var api_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/"
            var api_one_SCT = "<105590001 OR <<14423008 OR <80919006 OR <<56242006 OR <<285686007 OR <<84756000"
            var api_part_two = "&filter="
            var api = api_part_one + api_one_SCT + api_part_two
            $.getJSON(api + request.term, function (data){
                var total = data.expansion.total;
                if(total>0){
                    $(toggle).empty();
                    $(toggle).text(api_one_SCT);
                    $("#snomed-dropdown03 > li").first().focus();
                    dropdown03.html('<li>Results: <b>' + total + '</b></li>');
                    $.each(data.expansion.contains, function(i,value) {
                        dropdown03.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h"></i>\
                            </button>\
                        </span>'))
                    })

                    $(".name").click(function(){
                        $(this).namingFunction();
                    })

                    $(".more").click(function(){
                        $(".inner-wrap2").removeClass("hide");
                        var SCTtext = $(this).parent().parent().text();
                        var help = $('#help')
                        help.text(SCTtext);
                        $(this).synonymsFunction();
                        $(this).childFunction();
                        $(this).parentFunction();
                        $(this).excipientFunction();
                        $(this).ingredientsFunction();
                        $(this).relatedProductsFunction();
                    })

                } else {
                    $('#snomed-dropdown03').empty();
                    var api_sequence_two_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/"
                    var api_two_SCT = "<373873005"
                    var api_sequence_two_part_two ="&filter="
                    var api_sequence_two = api_sequence_two_part_one + api_two_SCT + api_sequence_two_part_two
                    $.getJSON(api_sequence_two + request.term, function (data){
                        var total = data.expansion.total;
                        if(total>0){
                            $(toggle).empty();
                            $(toggle).text(api_two_SCT);
                            $("#snomed-dropdown03 > li").first().focus();
                            dropdown03.html('<li>Results: <b>' + total + '</b></li>');
                            $.each(data.expansion.contains, function(i,value) {
                                dropdown03.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                                    <a class="name" href="#">' + value.display + '</a>\
                                    <span class="hidden">' + value.code + '</span>\
                                    <span class="right">\
                                        <button class="more">\
                                            <i class="fa fa-ellipsis-h"></i>\
                                        </button>\
                                    </span>'))
                            })

                            $(".name").click(function(){
                                $(this).namingFunction();
                            })

                            $(".more").click(function(){
                                $(".inner-wrap2").removeClass("hide");
                                var SCTtext = $(this).parent().parent().text();
                                var help = $('#help')
                                help.text(SCTtext);
                                $(this).synonymsFunction();
                                $(this).childFunction();
                                $(this).parentFunction();
                                $(this).excipientFunction();
                                $(this).ingredientsFunction();
                                $(this).relatedProductsFunction();
                            })
                        } else {
                            var api_sequence_three_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/"
                            var api_three_SCT = "<10358901000001101"
                            var api_sequence_three_part_two = "&filter="
                            var api_sequence_three = api_sequence_three_part_one + api_three_SCT + api_sequence_three_part_two
                            $.getJSON(api_sequence_three + request.term, function (data){
                                $('#snomed-dropdown03').empty();
                                var total = data.expansion.total;
                                if(total>0){
                                    $(toggle).empty();
                                    $(toggle).text(api_three_SCT);
                                    $("#snomed-dropdown03 > li").first().focus();
                                    dropdown03.html('<li>Results: <b>' + total + '</b></li>');
                                    $.each(data.expansion.contains, function(i,value) {
                                        dropdown03.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                                            <a class="name" href="#">' + value.display + '</a>\
                                            <span class="hidden">' + value.code + '</span>\
                                            <span class="right">\
                                                <button class="more">\
                                                    <i class="fa fa-ellipsis-h"></i>\
                                                </button>\
                                            </span>'))
                                    })

                                    $(".name").click(function(){
                                        $(this).namingFunction();
                                    })

                                    $(".more").click(function(){
                                        var SCTtext = $(this).parent().parent().text();
                                        var help = $('#help')
                                        help.text(SCTtext);
                                        $(this).synonymsFunction();
                                        $(this).childFunction();
                                        $(this).parentFunction();
                                        $(this).excipientFunction();
                                        $(this).ingredientsFunction();
                                        $(this).relatedProductsFunction();
                                    })

                                } else {
                                    $(toggle).empty();
                                    $('#snomed-dropdown03').empty();
                                    dropdown03.html('<li>Results: <b>' + total + '</b> for "' + request.term + '"</li>Please select <b>' + request.term +  '</b> below to store as free text.');
                                    dropdown03.append($('<li><a class="name" href="#">' + request.term + '</a></li>'));
                                }

                                $(".name").click(function(){
                                    $(this).namingFunction();
                                })
                            })
                        }
                    })
                }
            })
        }
        $("#myText3").autocomplete({
            source: getData,
            minLength: 3
        });
    }

    $.fn.namingFunction = function() {
        var pft = $(this).val(".name").text()
        $('#myText3').val(pft);
        dropdown03.empty();
        $(".inner-wrap2").addClass("hide");
    }

    $.fn.synonymsFunction = function(){
        $(".inner-wrap2").removeClass("hide");
        var api_synonym = 0; 
        var api_synonym_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/";
        var SCTtext = $('#help').text();
        var SCT = SCTtext.trim().split("                                   ").pop();
        var SCTsynonym = SCT.trim().split(" ").pop();
        var api_synonym_part_two = "&includeDesignations=true";
        var api_synonym = api_synonym_part_one + SCTsynonym + api_synonym_part_two;
        let dropdown6 = $('#synonym-snomed-dropdown');
        $.getJSON(api_synonym, function (data){
            dropdown6.empty();
            $.each(data.expansion.contains[0].designation, function(i,value) {
                dropdown6.append(value.value + '<span class="separator">, </span"');
            })
        }); 
    };

    $.fn.parentFunction = function(){
        $(".inner-wrap2").removeClass("hide");
        var api_parent_designations = 0
        var api_parent_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/>!"
        var SCTtext = $('#help').text();
        var SCT = SCTtext.trim().split("                                   ").pop();
        var api_parent_SCT = SCT.trim().split(" ").pop();
        var api_parent_constraint = $("#toggle").text();
        var api_parent_designations = api_parent_part_one + api_parent_SCT + "AND(" + api_parent_constraint + ")"
        let dropdown2 = $('#parents-snomed-dropdown');
        dropdown2.empty();
        $.getJSON(api_parent_designations, function (data){
            var total = data.expansion.total;
            if(total >0){
                dropdown2.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown2.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h">\</i>\
                            </button>\
                        </span>'))
                });
            } else {
                dropdown2.html('<li>Regretfully, the search yielded zero matches.</li>');
            }

            $(".name").click(function(){
                $(this).namingFunction();
            })
    
            $(".more").click(function(){
                $(".inner-wrap2").removeClass("hide");
                var SCTtext = $(this).parent().parent().text();
                var help = $('#help')
                help.text(SCTtext);
                $(this).synonymsFunction();
                $(this).childFunction();
                //$(this).parentFunction();
                $(this).excipientFunction();
                $(this).ingredientsFunction();
                $(this).relatedProductsFunction();
            })
        })
    }

    $.fn.childFunction = function(){
        $(".inner-wrap2").removeClass("hide");
        var api_child_designations = 0
        var api_child_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<!"
        var SCTtext = $('#help').text();
        var SCT = SCTtext.trim().split("                                   ").pop();
        var api_child_SCT = SCT.trim().split(" ").pop();
        var api_child_constraint = $("#toggle").text();
        var api_child_designations = api_child_part_one + api_child_SCT + "AND(" + api_child_constraint + ")"
        let dropdown3 = $('#child-snomed-dropdown');
        dropdown3.empty();
        $.getJSON(api_child_designations, function (data){
            var total = data.expansion.total;
            if(total >0){
                dropdown3.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown3.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>\
                        <span class="right">\
                            <button class="more">\
                                <i class="fa fa-ellipsis-h">\</i>\
                            </button>\
                        </span>'))
                });
            } else {
                dropdown3.html('<li>Regretfully, the search yielded zero matches.</li>');
            }

            $(".name").click(function(){
                $(this).namingFunction();
            })
    
            $(".more").click(function(){
                $(".inner-wrap2").removeClass("hide");
                var SCTtext = $(this).parent().parent().text();
                var help = $('#help')
                help.text(SCTtext);
                $(this).synonymsFunction();
                //$(this).childFunction();
                $(this).parentFunction();
                $(this).excipientFunction();
                $(this).ingredientsFunction();
                $(this).relatedProductsFunction();
            })
        })
    }

    $.fn.excipientFunction = function(){
        $(".inner-wrap2").removeClass("hide");
        var api_excipient = 0;
        var api_excipient_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/("
        var SCTtext = $('#help').text();
        var SCT = SCTtext.trim().split("                                   ").pop();
        var api_excipient_SCT_part_one = SCT.trim().split(" ").pop();
        var api_excipient_SCT_part_two = ". 8653101000001104) MINUS 8653301000001102"
        var api_excipient = api_excipient_part_one + api_excipient_SCT_part_one + api_excipient_SCT_part_two + "&_format=json";
        let dropdown4 = $('#excipient-snomed-dropdown');
        dropdown4.empty();
        $.getJSON(api_excipient, function (data){
            var total = data.expansion.total;
            if(total >0){
                dropdown4.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown4.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>'))
                    });
            } else {
                dropdown4.html('<li>Regretfully, the search yielded zero matches.</li>');
            }

            $(".name").click(function(){
                $(this).namingFunction();
            })

            $(".more").click(function(){
                var SCTtext = $(this).parent().parent().text();
                var help = $('#help')
                help.text(SCTtext);
                $(".inner-wrap2").removeClass("hide");
                $(this).synonymsFunction();
                $(this).childFunction();
                $(this).parentFunction();
                //$(this).excipientFunction();
                $(this).ingredientsFunction();
                $(this).relatedProductsFunction();
            })
        })
    }
    
    $.fn.ingredientsFunction = function(){
        $(".inner-wrap2").removeClass("hide");
        var api_ingredients = 0;
        var api_ingredients_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/"
        var SCTtext = $('#help').text();
        var SCT = SCTtext.trim().split("                                   ").pop();
        var api_ingredients_SCTID = SCT.trim().split(" ").pop();
        var api_ingredients_SCT_part_two = "(<<" + api_ingredients_SCTID + ".<<762951001)OR(<<" + api_ingredients_SCTID + ".10362801000001104)"
        var api_ingredients = api_ingredients_part_one + api_ingredients_SCT_part_two;
        console.log(api_ingredients)
        let dropdown5 = $('#ingredients-snomed-dropdown');
        dropdown5.empty();
        $.getJSON(api_ingredients, function (data){
            var total = data.expansion.total;
            if(total >0){
                dropdown5.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown5.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>'))
                    });
            } else {
                dropdown5.html('<li>Regretfully, the search yielded zero matches.</li>');
            }

            $(".name").click(function(){
                $(this).namingFunction();
            })

            $(".more").click(function(){
                $(".inner-wrap2").removeClass("hide");
                var SCTtext = $(this).parent().parent().text();
                var help = $('#help')
                help.text(SCTtext);
                $(this).synonymsFunction();
                $(this).childFunction();
                $(this).parentFunction();
                $(this).excipientFunction();
                //$(this).ingredientsFunction();
                $(this).relatedProductsFunction();
            })
        })
    }

    $.fn.relatedProductsFunction = function(){
        $(".inner-wrap2").removeClass("hide");
        var api_related = 0;
        var api_related_part_one = "https://nhswales-snomed-dev.app/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<373873005:*="
        var SCTtext = $('#help').text();
        var SCT = SCTtext.trim().split("                                   ").pop();
        var api_related_SCT_part_one = SCT.trim().split(" ").pop();
        var api_related = api_related_part_one + api_related_SCT_part_one;
        let dropdown6 = $('#related-snomed-dropdown');
        dropdown6.empty();
        $.getJSON(api_related, function (data){
            var total = data.expansion.total;
            if(total >0){
                dropdown6.html('<li>Results: <b>' + data.expansion.total + '</b></li>');
                $.each(data.expansion.contains, function(i,value) {
                    dropdown6.append($('<li></li>').attr('value', value.code, 'name', value.display).append('\
                        <a class="name" href="#">' + value.display + '</a>\
                        <span class="hidden">' + value.code + '</span>'))
                    });
            } else {
                dropdown6.html('<li>Regretfully, the search yielded zero matches.</li>');
            }

            $(".name").click(function(){
                $(this).namingFunction();
            })

            $(".more").click(function(){
                $(".inner-wrap2").removeClass("hide");
                var SCTtext = $(this).parent().parent().text();
                var help = $('#help')
                help.text(SCTtext);
                $(this).synonymsFunction();
                $(this).childFunction();
                $(this).parentFunction();
                $(this).excipientFunction();
                $(this).ingredientsFunction();
                //$(this).relatedProductsFunction();
            })
        })
    }
                        
    $(this).basicFunction3();
})