    $(".plans").click(function(){
        if($(".part_one").hasClass("hide")){
            $(".part_one").removeClass("hide");
            $(".rb1_content").addClass("hidden")
            $(".rb2_content").addClass("hidden")
            $(".rb22_content").addClass("hidden")
        } else {
            $(".plans").prop('checked', false)
            $(".part_one").addClass("hide");
            $(".part_one").prop('checked', false);
            $(".part_two").addClass("hide2");
            $(".part_two").prop('checked', false);
            $(".part_three").addClass("hide3");
            $(".part_three").prop('checked', false);
            $(".part_four").addClass("hide4");
            $(".part_four").prop('checked', false);
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    $(".add").click(function(){
        if($(".part_two").hasClass("hide2")){
            $(".part_two").removeClass("hide2");
            $(".rb6_content").addClass("hidden")
            $(".rb7_content").addClass("hidden")
        } else {
            $(".part_two").addClass("hide2");
            $(".part_two").prop('checked', false);
            $(".part_three").addClass("hide3");
            $(".part_three").prop('checked', false);
            $(".part_four").addClass("hide4");
            $(".part_four").prop('checked', false);
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    $(".new_add").click(function(){
        if($(".part_three").hasClass("hide3")){
            $(".part_three").removeClass("hide3");
            $(".rb9_content").addClass("hidden")
        } else {
            $(".part_three").addClass("hide3");
            $(".part_three").prop('checked', false);
            $(".part_four").addClass("hide4");
            $(".part_four").prop('checked', false);
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    $(".SoB").click(function(){
        if($(".part_four").hasClass("hide4")){
            $(".part_four").removeClass("hide4");
            $('#option_4').text("267036007 |Dyspnea (finding)|")
            $("#option_4").css("display","unset");
            $('.textInput').val("")
        } else {
            $("#option_4, #option_5, #option_6").text("");
            $(".part_four").addClass("hide4");
            $(".part_four").prop('checked', false);
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    $(".other").click(function(){
        if($("#search").hasClass("hide5")){
            $("#search").removeClass("hide5");
            $("#search").css("display","unset");
        } else {
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    $("#rb1").click(function(){
        $('#option_1').text("Patient Details")
        if($(".rb1_content").hasClass("hidden")){
            $(".rb1_content").removeClass("hidden")
            $(".rb22_content").addClass("hidden")
            $(".rb2_content").addClass("hidden")
        } else {
            $(".rb1_content").addClass("hidden")
        }
    })

    $("#rb2").click(function(){
        $('#option_1').text("Patient Warnings")
        if($(".rb2_content").hasClass("hidden")){
            $(".rb2_content").removeClass("hidden")
            $(".rb1_content").addClass("hidden")
            $(".rb22_content").addClass("hidden")
        } else {
            $(".rb2_content").addClass("hidden")
        }
    })

    $("#rb22").click(function(){
        $('#option_1').text("Allergies and Adverse Reactions")
        if($(".rb22_content").hasClass("hidden")){
            $(".rb22_content").removeClass("hidden")
            $(".rb1_content").addClass("hidden")
            $(".rb2_content").addClass("hidden")
        } else {
            $(".rb22_content").addClass("hidden")
        }
    })

    $("#rb6").click(function(){
        $('#option_1').text("Active Care Plans")
        if($(".rb6_content").hasClass("hidden")){
            $(".rb6_content").removeClass("hidden")
            $(".rb7_content").addClass("hidden")
        } else {
            $(".rb6_content").addClass("hidden")
        }
    })

    $("#rb7").click(function(){
        $('#option_1').text("Closed Care Plans")
        if($(".rb7_content").hasClass("hidden")){
            $(".rb6_content").addClass("hidden")
            $(".rb7_content").removeClass("hidden")
        } else {
            $(".rb7_content").addClass("hidden")
        }
    })

    $("#rb9").click(function(){
        $('#option_1').text("Post Procedure Care")
        if($(".rb9_content").hasClass("hidden")){
            $(".rb9_content").removeClass("hidden")
        } else {
            $(".rb9_content").addClass("hidden")
        }
    })

    $("#rb10").click(function(){
        $(".part_four").addClass("hide4");
        $('#option_4').text("73430006 |Sleep apnea|")
        $("#option_4").css("display","unset");
        $("#option_5").css("display","none");
        $("#option_5").val("");
        $(".part_four").prop('checked', false);
    })

    $("#rb11").click(function(){
        $(".part_four").addClass("hide4");
        $('#option_4').text("68052005 |Pulmonary aspiration|")
        $("#option_4").css("display","unset");
        $("#option_5").css("display","none");
        $("#option_5").val("");
        $(".part_four").prop('checked', false);
    })

    $("#rb13").click(function(){
        $(".part_four").addClass("hide4");
        $('#option_4').text("67750007 |Ineffective airway clearance|")
        $("#option_4").css("display","unset");
        $("#option_5").css("display","none");
        $("#option_5").val("");
        $(".part_four").prop('checked', false);
    })

    $("#rb14").click(function(){
        $(".part_four").addClass("hide4");
        $('#option_4').text("127339009 |Acute metabolic disorder|")
        $("#option_4").css("display","unset");
        $("#option_5").css("display","none");
        $("#option_5").val("");
        $(".part_four").prop('checked', false);
    })

    $("#rb15").click(function(){
        $('#option_5').text("281239006 |Exacerbation of asthma|")
        $("#option_5").css("display","unset");
    })

    $("#rb16").click(function(){
        $('#option_5').text("50043002 |Disorder of respiratory system|")
        $("#option_5").css("display","unset");
    })

    $("#rb17").click(function(){
        $('#option_5').text("275498002 |Respiratory tract infection|")
        $("#option_5").css("display","unset");
    })

    $("#rb18").click(function(){
        $('#option_5').text("36118008 |Pneumothorax|")
        $("#option_5").css("display","unset");
    })

    $("#rb19").click(function(){
        $('#option_5').text("60046008 |Pleural effusion|")
        $("#option_5").css("display","unset");
    })

    $("#rb20").click(function(){
        $('#option_5').text("271737000 |Anemia|")
        $("#option_5").css("display","unset");
    })