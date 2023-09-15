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

    //SEARCH 1
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
                $('.selectedIndications').append('<span class="chosen01">'+pft+'<span class="minus"></span></span>')
                $("#myText1").attr('disabled', true)
                $('.plusIndications').removeClass('hidden')

                $(".minus").click(function(){
                    $(this).closest(".chosen01").remove();
                    $("#myText1").attr('disabled', false);
                    $("#myText1").val('');
                    $('#myText1').attr('placeholder', 'Text here');
                    $('.plusIndications').addClass('hidden')
                })

                $('.plusIndications').click(function(){
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

    //SEARCH 2
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
                $('.selectedFindings').append('<span class="chosen02">'+pft+'<span class="minus2"></span></span>')
                $("#myText2").attr('disabled', true);
                $('.plusFindings').removeClass('hidden');

                $(".minus2").click(function(){
                    $(this).closest(".chosen02").remove();
                    $("#myText2").attr('disabled', false);
                    $("#myText2").val('');
                    $('#myText2').attr('placeholder', 'Text here');
                    $('.plusFindings').addClass('hidden');
                })

                $('.plusFindings').click(function(){
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

    //SEARCH 3
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
                $('.selectedProcedure').append('<span class="chosen03">'+pft+'<span class="minus3"></span></span>')
                $("#myText3").attr('disabled', true)
                $('.plusProcedures').removeClass('hidden')
                $('.plusProcedureSite').removeClass('hidden')
                $('.plusProcedureMethod').removeClass('hidden')
                $('.plusProcedureDevice').removeClass('hidden')

                //Adding attributes ~ Procedure Site
                $.getJSON ('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/' + code + ".<<363704007", function(data) {
                    var ProcedureSiteText = data.expansion.contains[0].display
                    var ProcedureSiteCode = data.expansion.contains[0].code
                    $('.selectedProcedureSite').append('<span class="chosen06">'+ProcedureSiteText+'<span class="minus6"></span></span>')

                    $(".minus6").click(function(){
                        $(this).closest(".chosen06").remove();
                    })
    
                    $('.plusProcedureSite').click(function(){
                        $("#myModal").css("display", "block");

                        $.getJSON("https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<<442083009&count=10&offset=23121", function(data){
                            var dataList = $("#dataList");
                            dataList.empty();
                            var listTotal = $('<li>').text("Displaying sample 10 results of " + data.expansion.total);
                            dataList.append(listTotal);
                            $.each(data.expansion.contains, function(index, item){
                                var listItem = $('<li>').text(item.display);
                                dataList.append(listItem);
                            });

                            $(".scroll-box ul li").click(function(){
                                var pft = $(this).val("<li>").text();
                                $("#myModal").css("display", "none");
                                $('.selectedProcedureSite').append('<span class="chosen09">'+pft+'<span class="minus9"></span></span>')

                                $(".minus9").click(function(){
                                    $(this).closest(".chosen09").remove();
                                })
                            });
                        });

                        $(".close").click(function(){
                            $("#myModal").css("display", "none");
                        });

                        $(window).click(function(event) {
                            if (event.target == $("#myModal")[0]) {
                                $("#myModal").css("display", "none");
                            }
                        });

                    })

                    // Laterality
                    $.getJSON ('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/'+ProcedureSiteCode+'.272741003', function(data) {
                        var total = data.expansion.total
                        if (total == 1) {
                            $(".selectedLaterality").empty();
                            var SelectedLaterality = $(".selectedLaterality");
                            var LateralityDisplay = data.expansion.contains[0].display;
                            SelectedLaterality.append('<span class="chosen09">'+LateralityDisplay+'</span><br><br>');
                        } else {
                            $.getJSON ('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<182353008', function(data) {
                                var LateralityList = $("#LateralityList");
                                $(".selectedLaterality").empty();
                                $("#LateralityList").empty();

                                $.each(data.expansion.contains, function(index, item){
                                    LateralityList.append(
                                        $('<option class="name"></option>').text(item.display)
                                    )
                                });
                                
                                $("select#LateralityList").change(function(){
                                    $(".selectedLaterality").empty();
                                    var SelectedLaterality = $(".selectedLaterality");
                                    var selectedLateralityValue = $(this).children("option:selected").val();
                                    SelectedLaterality.append('<span class="chosen09">'+selectedLateralityValue+'</span><br><br>');
                                    $('#LateralityList').addClass('hidden')
                                });
                            })
                            $('#LateralityList').removeClass('hidden')
                        }
                    })
                })

                //Adding attributes ~ Method
                $.getJSON ('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/' + code + ".260686004", function(data) {
                    var ProcedureMethod = data.expansion.contains[0].display
                    var ProcedureMethodCode = data.expansion.contains[0].code
                    $('.selectedProcedureMethod').append('<span class="chosen07">'+ProcedureMethod+'<span class="minus7"></span></span>')

                    $(".minus7").click(function(){
                        $(this).closest(".chosen07").remove();
                    })

                    $('.plusProcedureMethod').click(function(){
                        $("#myModal2").css("display", "block");
                        $.getJSON("https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<<129264002&count=10", function(data){
                            var dataList2 = $("#dataList2");
                            dataList2.empty();
                            var listTotal = $('<li>').text("Displaying sample 10 results of " + data.expansion.total);
                            dataList2.append(listTotal);
                            $.each(data.expansion.contains, function(index, item){
                                var listItem = $('<li>').text(item.display);
                                dataList2.append(listItem);
                            });

                            $(".scroll-box2 ul li").click(function(){
                                var pft = $(this).val("<li>").text();
                                $("#myModal2").css("display", "none");
                                $('.selectedProcedureMethod').append('<span class="chosen10">'+pft+'<span class="minus10"></span></span>')

                                $(".minus10").click(function(){
                                    $(this).closest(".chosen10").remove();
                                })
                            });
                        });

                        $(".close").click(function(){
                            $("#myModal2").css("display", "none");
                        });

                        $(window).click(function(event) {
                            if (event.target == $("#myModal2")[0]) {
                                $("#myModal2").css("display", "none");
                            }
                        });

                    })
                })

                //Adding attributes ~ Procedure Device
                $.getJSON ('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/' + code + ".<<405815000", function(data) {
                    var ProcedureDeviceText = data.expansion.contains[0].display
                    var ProcedureDeviceCode = data.expansion.contains[0].code
                    $('.selectedProcedureDevice').append('<span class="chosen08">'+ProcedureDeviceText+'<span class="minus8"></span></span>')
                
                    $(".minus8").click(function(){
                        $(this).closest(".chosen08").remove();
                    })

                    $('.plusProcedureDevice').click(function(){
                        $("#myModal3").css("display", "block");
                        $.getJSON("https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<<49062001&count=10", function(data){
                            var dataList3 = $("#dataList3");
                            dataList3.empty();

                            var listTotal = $('<li>').text("Displaying sample 10 results of " + data.expansion.total);
                            dataList3.append(listTotal);

                            $.each(data.expansion.contains, function(index, item){
                                var listItem = $('<li>').text(item.display);
                                dataList3.append(listItem);
                            });

                            $(".scroll-box3 ul li").click(function(){
                                var pft = $(this).val("<li>").text();
                                $("#myModal3").css("display", "none");
                                $('.selectedProcedureDevice').append('<span class="chosen11">'+pft+'<span class="minus11"></span></span>')
                                
                                $(".minus11").click(function(){
                                    $(this).closest(".chosen11").remove();
                                })
                            });
                        });

                        $(".close").click(function(){
                            $("#myModal3").css("display", "none");
                        });

                        $(window).click(function(event) {
                            if (event.target == $("#myModal3")[0]) {
                                $("#myModal3").css("display", "none");
                            }
                        });
                    })
                })

                


                $(".minus3").click(function(){
                    $(this).closest(".chosen03").remove();
                    $("#myText3").attr('disabled', false);
                    $("#myText3").val('');
                    $('#myText3').attr('placeholder', 'Text here');
                    $('.plusProcedures').addClass('hidden')
                })

                $('.plusProcedures').click(function(){
                    $("#myText3").attr('disabled', false);
                    $("#myText3").val('');
                    $('#myText3').attr('placeholder', 'Text here');
                })

            })
        });
    }

    $("#myText3").autocomplete({
        source: getData,
        minLength: 3
    });

    //SEARCH 4
    let dropdown04 = $('#snomed-dropdown04');
    dropdown04.empty();

    var getData = function (request, response){
        var api = "https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/(%3C71388002:363701004=373477003)OR(%3C71388002:363701004=373288007)OR(%3C71388002:363701004=372614000)&count=5&filter="
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
                $(".addComms").attr("disabled", false);
                $('.selectedAnaesthetic').append('<span class="chosen04">'+pft+'<span class="minus4"></span></span>')
                $("#myText4").attr('disabled', true)

                $(".minus4").click(function(){
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
});
