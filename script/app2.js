    // Patient Details
    $("#rb1").click(function(){
        if($(".rb1_content").hasClass("hidden")){
            $(".rb1_content").removeClass("hidden")
            // Patient Warnings
            $(".rb2_content").addClass("hidden")
            // Allergies
            $(".rb22_content").addClass("hidden")
            //Care Plan
            $(".part_one").addClass("hide");
            //Add Care Plan
            $(".part_two").addClass("hide2");
            //Active Care Plans
            $(".rb6_content").addClass("hidden")
            //Closed Care Plans
            $(".rb7_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb1_content").addClass("hidden")
        }
    })

    // Patient Warnings
    $("#rb2").click(function(){
        if($(".rb2_content").hasClass("hidden")){
            $(".rb2_content").removeClass("hidden")
            // Patient Details
            $(".rb1_content").addClass("hidden")
            // Allergies
            $(".rb22_content").addClass("hidden")
            //Care Plan
            $(".part_one").addClass("hide");
            //Add Care Plan
            $(".part_two").addClass("hide2");
            //Active Care Plans
            $(".rb6_content").addClass("hidden")
            //Closed Care Plans
            $(".rb7_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb2_content").addClass("hidden")
        }
    })

    // Allergies
    $("#rb22").click(function(){
        if($(".rb22_content").hasClass("hidden")){
            $(".rb22_content").removeClass("hidden")
            // Patient Details
            $(".rb1_content").addClass("hidden")
            // Patient Warnings
            $(".rb2_content").addClass("hidden")
            //Care Plan
            $(".part_one").addClass("hide");
            //Add Care Plan
            $(".part_two").addClass("hide2");
            //Active Care Plans
            $(".rb6_content").addClass("hidden")
            //Closed Care Plans
            $(".rb7_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb22_content").addClass("hidden")

        }
    })
    
    //Care Plan
    $(".plans").click(function(){
        if($(".part_one").hasClass("hide")){
            $(".part_one").removeClass("hide");
            // Patient Details
            $(".rb1_content").addClass("hidden")
            // Patient Warnings
            $(".rb2_content").addClass("hidden")
            // Allergies
            $(".rb22_content").addClass("hidden")
            //Add Care Plan
            $(".part_two").addClass("hide2");
            //Active Care Plans
            $(".rb6_content").addClass("hidden")
            //Closed Care Plans
            $(".rb7_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".part_one").addClass("hide");
            $(".part_two").addClass("hide2");
            $(".part_three").addClass("hide3");
            $(".part_four").addClass("hide4");
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    //Add Care Plan
    $(".add").click(function(){
        if($(".part_two").hasClass("hide2")){
            $(".part_two").removeClass("hide2");
            //Active Care Plans
            $(".rb6_content").addClass("hidden")
            //Closed Care Plans
            $(".rb7_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".part_two").addClass("hide2");
            $(".part_three").addClass("hide3");
            $(".part_four").addClass("hide4");
            $("#search").addClass("hide5");
            $("#search").css("display","none");
            $('#snomed-dropdown03').empty();
            $('.textInput').val('');
        }
    });

    //Active Care Plans
    $("#rb6").click(function(){
        $('#option_1').text("Active Care Plans")
        if($(".rb6_content").hasClass("hidden")){
            $(".rb6_content").removeClass("hidden")
            //Add Care Plan
            $(".part_two").addClass("hide2");
            //Closed Care Plans
            $(".rb7_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb6_content").addClass("hidden")
        }
    })

    //Closed Care Plans
    $("#rb7").click(function(){
        $('#option_1').text("Closed Care Plans")
        if($(".rb7_content").hasClass("hidden")){
            $(".rb6_content").addClass("hidden")
            //Add Care Plan
            $(".part_two").addClass("hide2");
            //Active Care Plans
            $(".rb6_content").addClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb7_content").addClass("hidden")
        }
    })

    //New Nursing Care Plan
    $(".new_add2").click(function(){
        if($(".part_five").hasClass("hide6")){
            $(".part_five").removeClass("hide6");
            //Post Procedure Care
            $(".rb9_content").addClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".part_five").addClass("hide6");
        }
    });

    //Post Procedure Care
    $("#rb9").click(function(){
        if($(".rb9_content").hasClass("hidden")){
            $(".rb9_content").removeClass("hidden")
            //New Nursing Care Plan
            $(".part_five").addClass("hide6");
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb9_content").addClass("hidden")
            
        }
    })

    //Communication
    $("#rb81").click(function(){
        if($(".rb81_content").hasClass("hidden")){
            $(".rb81_content").removeClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb81_content").addClass("hidden")

        }
    })

    //Breathing
    $(".new_add").click(function(){
        if($(".part_three").hasClass("hide3")){
            $(".part_three").removeClass("hide3");
            //Communication
            $(".rb81_content").addClass("hidden")
            //Nutrition
            $(".rb83_content").addClass("hidden")
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
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

    //Nutrition
    $("#rb83").click(function(){
        if($(".rb83_content").hasClass("hidden")){
            $(".rb83_content").removeClass("hidden")
            //Communication
            $(".rb81_content").addClass("hidden")
            //Breathing
            $(".part_three").addClass("hide3");
            //Other
            $('#option_4').text("");
            $("#option_4").css("display","none");
        } else {
            $(".rb83_content").addClass("hidden")
        }
    })

    //Other
    $("#rb84").click(function(){
        $('#option_4').text("XxXxXxXxX |Other|");
        $("#option_4").css("display","unset");
        //Communication
        $(".rb81_content").addClass("hidden")
        //Breathing
        $(".part_three").addClass("hide3");
        //Nutrition
        $(".rb83_content").addClass("hidden")
    })

    //SoB
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

    //Other
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

    //User Selection
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