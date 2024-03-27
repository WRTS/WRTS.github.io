$(document).ready(function() {
    $('.patient-details').click(function() {
        $('#section1').removeClass("hidden")
        $('#section2').addClass("hidden")
        $('.patient-details').addClass("active")
        $('.Histopathology').removeClass("active")
    })

    $('.Histopathology').click(function() {
        $('#section2').removeClass("hidden")
        $('#section1').addClass("hidden")
        $('.Histopathology').addClass("active")
        $('.patient-details').removeClass("active")
    })

    var now = new Date();
    var formattedDataTime = now.toISOString().slice(0, 16);
    $('#datetime').val(formattedDataTime);

    // Histopathology - Specimen Search
    $('#searchSpecimen').on('input', function(){
        $('.para-1').addClass('hidden');
        var query = $(this).val();
        if (query.length > 2) {
            $.getJSON('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<<258415003OR<<309050000OR<<258541006OR<<258548000OR<<309048008OR<<309502007OR<<119333000OR<<309051001OR<<309049000OR<<309114009OR<<258589002OR<<705054005OR<<309104000OR<<258603007OR<<258433009OR<<309072003OR<<363311008OR<<430220009OR<<734307008OR<<430214008OR<<608852006OR<<119403008OR<<399411006OR<<430232008OR<<430246008OR<<119295008OR<<440674008OR<<445405002&filter=' + query, function(data){
                $('#resultsSpecimen').empty();
                var total = data.expansion.total
                $('#resultsSpecimen').append('<li class="list-group-item">SNOMED CT Results: ' + total + '</li>');
                
                if (total >= 1) {
                    $.each(data.expansion.contains, function(index, item){
                        var itemText = item.display.replace(new RegExp('(' + query + ')', 'gi'), '<span class="highlight">$1</span>');
                        $('#resultsSpecimen').append('<li class="list-group-item specimen-result" data-code="' + item.code + '">' + itemText + '</li>');
                    });
                } else {
                    $('#resultsSpecimen').append('<li class="list-group-item specimen-result" data-code="uncoded">' + query + '</li>');
                }
                
            });
        } else {
            $('#resultsSpecimen').empty();
        }

        // Click functionality
        $(document).on('click', '.specimen-result', function(){
            var selectedItem = $(this).text();
            var selectedCode = $(this).data('code') // Get the code attribute
            $('#searchSpecimen').val(selectedItem);
            $('#resultsSpecimen').empty();
            $('#selectedSpecimenDisplay').text(selectedItem);
            $('#selectedSpecimenCode').text(selectedCode);
            $('.para-1').removeClass('hidden');
        })
    })

    // Histopathology - Procedures Search
    $('#searchProcedures').on('input', function(){
        $('.para-2').addClass('hidden');
        var query = $(this).val();
        if (query.length > 2) {
            $.getJSON('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/<362958002OR<<410751007&filter=' + query, function(data){
                $('#resultsProcedures').empty();
                var total = data.expansion.total
                $('#resultsProcedures').append('<li class="list-group-item">SNOMED CT Results: ' + total + '</li>');
                if (total >= 1) {
                    $.each(data.expansion.contains, function(index, item){
                        var itemText = item.display.replace(new RegExp('(' + query + ')', 'gi'), '<span class="highlight">$1</span>');
                        $('#resultsProcedures').append('<li class="list-group-item procedure-result" data-code="' + item.code + '">' + itemText + '</li>');
                    });
                } else {
                    $('#resultsProcedures').append('<li class="list-group-item procedure-result" data-code="uncoded">' + query + '</li>');
                }
            });
        } else {
            $('#resultsProcedures').empty();
        }

        // Click functionality
        $(document).on('click', '.procedure-result', function(){
            var selectedItem = $(this).text();
            var selectedCode = $(this).data('code') // Get the code attribute
            $('#searchProcedures').val(selectedItem);
            $('#resultsProcedures').empty();
            $('#selectedProcedureDisplay').text(selectedItem);
            $('#selectedProcedureCode').text(selectedCode);
            $('.para-2').removeClass('hidden');
        })
    })

    // Histopathology - Body Site Search
    $('#searchBodySite').on('input', function(){
        $('.para-3').addClass('hidden');
        var query = $(this).val();
        if (query.length > 2) {
            $.getJSON('https://termservtestmaster.wales.nhs.uk/fhir/ValueSet/Histopathology-BodySite/$expand?filter=' + query, function(data){
                $('#resultsBodySite').empty();
                var total = data.expansion.total
                $('#resultsBodySite').append('<li class="list-group-item">Results: ' + total + '</li>');
                if (total >= 1) {
                    $.each(data.expansion.contains, function(index, item){
                        var itemText = item.display.replace(new RegExp('(' + query + ')', 'gi'), '<span class="highlight">$1</span>');
                        $('#resultsBodySite').append('<li class="list-group-item BodySite-result" data-code="' + item.code + '">' + itemText + '</li>');
                    });
                } else {
                    $('#resultsBodySite').append('<li class="list-group-item BodySite-result" data-code="uncoded">' + query + '</li>');
                }
            });
        } else {
            $('#resultsBodySite').empty();
        }

        // Click functionality
        $(document).on('click', '.BodySite-result', function(){
            var selectedItem = $(this).text();
            var selectedCode = $(this).data('code') // Get the code attribute
            $('#searchBodySite').val(selectedItem);
            $('#resultsBodySite').empty();
            $('#selectedSiteDisplay').text(selectedItem);
            $('#selectedSiteCode').text(selectedCode);
            $('.para-3').removeClass('hidden');
        })
    })

    // Hover effect for search results
    $(document).on('mouseenter', '.list-group-item', function(){
        $(this).addClass('active')
    })

    // Hover effect for search results
    $(document).on('mouseleave', '.list-group-item', function(){
        $(this).removeClass('active')
    })
})