$(document).ready(function(){

    // ValueSet Expand Response
    $.getJSON('https://termservdhew.wales.nhs.uk/fhir/ValueSet/DSW-WECDSplaceOfInjury/$expand', function(data){
        $('#apiResponse').empty();
        $('#apiResponse').append('<h3><i>DSW-WECDSplaceOfInjury</i></h3>')
        $.each(data.expansion.contains, function(index, item){
            var query = "home"
            var itemText = item.display.replace(new RegExp('(' + query + ')', 'gi'), '<span class="highlight">$1</span>');
            $('#apiResponse').append('<li class="values">' + itemText + '</li>');
        });
    })

    // Typeahead fucntion
    $('#typeaheadInput').on('input', function(){
        var query = $(this).val();
        if (query.length > 3) {
            $.getJSON('https://termservdhew.wales.nhs.uk/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/MemberOf991291000000101&filter=' + query, function(data){
                $('#typeaheadResults').empty();
                $.each(data.expansion.contains, function(index, item){
                    var itemText = item.display.replace(new RegExp('(' + query + ')', 'gi'), '<span class="highlight">$1</span>');
                    $('#typeaheadResults').append('<li class="list-group-item" data-code="' + item.code + '">' + itemText + '</li>');
                });
            });
        } else {
            $('#typeaheadResults').empty();
        }
    })

    // Hover effect for search results
    $(document).on('mouseenter', '.list-group-item', function(){
        $(this).addClass('active')
    })

    // Hover effect for search results
    $(document).on('mouseleave', '.list-group-item', function(){
        $(this).removeClass('active')
    })

    // Click functionality
    $(document).on('click', '.list-group-item', function(){
        var selectedItem = $(this).text();
        var selectedCode = $(this).data('code') // Get the code attribute
        $('#typeaheadInput').val(selectedItem);
        $('#typeaheadResults').empty();
        $('#selectedCode').text(selectedItem);

        $.getJSON('https://termservdhew.wales.nhs.uk/fhir/ValueSet/DSW-WECDSplaceOfInjury/$validate-code?code=' + selectedCode + '&system=http://snomed.info/sct', function(data){
            validator = (data.parameter[0].valueBoolean)
            $('#validator').empty()
            if (validator === true) {
                $('#validator').append('You have selected: <span class="selected">' + selectedItem + '</span>, which has an concept Id of: <span class="selected">' + selectedCode + '</span>. This concept <span class="selected">can</span> be found within the validation ValueSet.')
                if ($('.hidden').is(':hidden')) {
                    $('.hidden').show();
                } else {
                    $('.hidden').hide();
                }
            } else {
                $('#validator').append('You have selected: <span class="selected">' + selectedItem + '</span>, which has an concept Id of: <span class="selected">' + selectedCode + '</span>. This concept <span class="selected">can not</span> be found within the validation ValueSet.')
                if ($('.hidden').is(':hidden')) {
                    return;
                } else {
                    $('.hidden').hide();
                }
            }
        })

        function matchingFunction() {
            $('#apiResponse li').each(function() {
                var listItemText = $(this).text()
                if (selectedItem == listItemText) {
                    $(this).addClass('highlight2');
                    $(this).removeClass('notAmatch');
                } else {
                    $(this).addClass('notAmatch');
                    $(this).removeClass('highlight2');
                }
            })
        }
        matchingFunction();
    })

})