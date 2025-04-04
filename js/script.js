$(document).ready(function() {

    //const endpoint = "https://termservdhew.wales.nhs.uk/fhir/"
    const endpoint = "https://r4.ontoserver.csiro.au/fhir/"

    $('#reason-for-encounter').parent().prepend('<i class="fas fa-search"></i>');
    $('#diagnosis').parent().prepend('<i class="fas fa-search"></i>');
    $('#medications').parent().prepend('<i class="fas fa-search"></i>');

    $('#nameModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    $('.fas.fa-times.nav').on('click', function() {
        $('#nameModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    // Handle the click event on the names
    $('#nameList li').on('click', function() {
        var selectedJson = ""
        var selectedName = $(this).data('name');
        var selectedJson = "js/" + $(this).data('url');
        $('#nameModal').modal('hide'); // Hide the modal

        /* Reset all */
        $('#medications').val('');
        $('#medications').attr('placeholder', 'Enter your search term here');
        $('#search-results').empty();
        $('#search-results').hide();
        $('#search-results-two').empty();
        $('#search-results-two').hide();
        $('#search-results-three').empty();
        $('#search-results-three').hide();
        $('#selected-results-one').empty();
        $('#selected-results-one').hide();
        $('#selected-results-two').empty();
        $('#selected-results-two').hide();
        $('#selected-results-three').empty();
        $('#selected-results-three').hide();
        $('#reason-for-encounter').prop('disabled', false);
        $('#diagnosis').prop('disabled', false);
        $('#medications').prop('disabled', false);

        // Load demographic data based on the selected name
        loadDemographicData(selectedJson);
    });

    function loadDemographicData(url) {
        if (!url) {
            console.error("No URL provided for loading demographic data.");
            return;
        }
        
        data = ""

        // Fetch the JSON data from the file
        $.getJSON(url)
            .done(function(data) {
                console.info("Successfully loaded JSON data.");
                $('#json_data_fname').text(data.patient_info.fname);
                $('#json_data_lname').text(data.patient_info.lname.toUpperCase());
                $('#json_data_patient_tite').text(data.patient_info.person_title);

                // Function to calculate age
                function calculateAge(patient_info_dob) {
                    var birth = new Date(patient_info_dob);
                    var today = new Date();
                    var age = today.getFullYear() - birth.getFullYear();
                    var m = today.getMonth() - birth.getMonth();
                    // If the birthday hasn't occurred yet this year, subtract 1 from age
                    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
                        age--;
                    }
                    return age
                }
                var age = calculateAge(data.patient_info.dob);
                $('#json_data_dob').text(`${data.patient_info.dob} (${age})`)
                $('#json_data_sex').text(`${data.patient_info.sex}`);
                var formatted_patient_info_patient_no = data.patient_info.patient_no.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
                $('#json_data_id').text(formatted_patient_info_patient_no);
                $('#json_data_street_address').text(data.patient_info.street_address);
                $('#json_data_city').text(data.patient_info.city);
                $('#json_data_postcode').text(data.patient_info.postcode);
                $('#json_data_county').text(data.patient_info.county);
                $('#json_data_country').text(data.patient_info.country);

                $('#allergens-container').empty();

                $.each(data.allergens, function(index, allergen) {
                    var allergenDiv = $('<div></div>');
                    
                    // Create list of manifestations
                    var manifestationsList = allergen.manifestation.map(function(manifestation) {
                        return manifestation.display;
                    });
                    
                    // Combine manifestations into a string
                    var manifestationsStr = manifestationsList.join(', ');
                    if (manifestationsList.length > 1) {
                        manifestationsStr = manifestationsStr.replace(/, ([^,]*)$/, ' and $1');
                    }
                    
                    // Create substanceWithManifestations div with substance display and manifestations
                    if (manifestationsList.length > 1) {
                        //console.log(allergen.substance.system)
                        var substanceWithManifestations = $('<div></div>')
                            .addClass('substance-manifestations')
                            .attr('data-code', allergen.substance.code)
                            .attr('data-namespace', allergen.substance.system)
                            .html('<strong>' + allergen.substance.display + '</strong> (' + manifestationsStr + ')');

                        // Append substanceWithManifestations to allergenDiv
                        allergenDiv.append(substanceWithManifestations);

                        // Append allergenDiv to the container
                        $('#allergens-container').append(allergenDiv);
                    } else {
                        var substanceWithoutManifestations = $('<div></div>')
                            .addClass('substance-withoutManifestations')
                            .attr('data-code', allergen.substance.code)
                            .html('<strong>' + allergen.substance.display + '</strong>');

                        // Append substanceWithManifestations to allergenDiv
                        allergenDiv.append(substanceWithoutManifestations);

                        // Append allergenDiv to the container
                        $('#allergens-container').append(allergenDiv);
                    }
                });
                
                // Initialize the current date and time
                var currentDate = new Date();
                var formattedDate = currentDate.toLocaleString('en-GB', {
                    weekday: 'short', // Abbreviated weekday
                    month: 'short', // Abbreviated month
                    day: '2-digit', // Day of the month
                    year: 'numeric', // Full year
                    hour: '2-digit', // Hour
                    minute: '2-digit', // Minute
                    second: '2-digit', // Second
                    hour12: true // 12-hour clock
                });
                $('#encounter-time').text(formattedDate);

                $("#patient-info-header").html(`Patient: <strong>${data.patient_info.lname.toUpperCase()}</strong>, ${data.patient_info.fname} (${data.patient_info.person_title}) || ${formatted_patient_info_patient_no}`);

            })
            .fail(function() {
                console.error("Failed to load JSON data.");
            });

        $('.icon-container i, .fa-edit, .fa-eye').hover(function() {
            // Get the tooltip text from the data-tooltip attribute
            var tooltipText = $(this).data('tooltip');
            
            // Create the tooltip element if it doesn't exist yet
            var tooltip = $('<div class="tooltip"></div>').text(tooltipText);
            
            // Append the tooltip to the body
            $('body').append(tooltip);
            
            // Get the position of the icon
            var iconOffset = $(this).offset();
            var iconWidth = $(this).outerWidth();
            var iconHeight = $(this).outerHeight();
            
            // Position the tooltip
            tooltip.css({
                top: iconOffset.top + iconHeight + 5 + 'px', // 5px margin below the icon
                left: iconOffset.left + (iconWidth / 2) - (tooltip.outerWidth() / 2) + 'px', // Centered horizontally
                opacity: 1, // Make the tooltip visible
                display: 'block' // Show the tooltip
            });
        }, function() {
            // Remove the tooltip when the mouse leaves the icon
            $('.tooltip').remove();
        });
    }

    let typingTimeout;
    $('#reason-for-encounter').on('input', function () {
        let searchTerm = $(this).val().trim();
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(function () {
            if (searchTerm.length < 3) {
                $('#search-results-one').empty();
                return;
            }
            //let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/MemberOf991401000000107&includeDesignations=true&count=10&filter=${searchTerm}`;
            let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct/83821000000107?fhir_vs=ecl/MemberOf991401000000107&includeDesignations=true&count=10&filter=${searchTerm}`;
            $.ajax({
                url: url,
                method: "GET",
                success: function (response) {
                    if (!response.expansion || !response.expansion.contains) {
                        $('#search-results-one').html(`No results found for <strong>${searchTerm}</strong>`);
                        return;
                    }
                    const total = response.expansion.total;
                    const contains = response.expansion.contains;
                    const formattedResults = contains.map(result => {
                        let displayTerm = result.display;
                        let displayTermCode = result.code
                        displayTerm = displayTerm.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="text-primary">${match}</strong>`);
                        const synonyms = [];
                        if (result.designation) {
                            result.designation.forEach(designation => {
                                if (designation.use.display === 'Synonym') {
                                    let synonym = designation.value;
                                    if (synonym.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        synonym = synonym.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="text-primary">${match}</strong>`);
                                        synonyms.push(synonym);
                                    }
                                }
                            });
                        }
                        if (synonyms.length > 0) {
                            let synonymList = synonyms.join(', ').replace(/,([^,]*)$/, ' and$1');                            
                            return `<div class="result-item"><i class="fas fa-search"></i> <span class="pft">${displayTerm}</span> (${synonymList})</div>`;
                        } else {
                            return `<div class="result-item"><i class="fas fa-search"></i> <span class="pft">${displayTerm}</span></div>`;
                        }
                    }).join('');
                    
                    $('#search-results-one').show();
                    if (formattedResults) {
                        $('#search-results-one').html(`<strong>Total Results:</strong> ${total}<br>${formattedResults}`);
                    } else {
                        $('#search-results-one').html(`No results found for <strong>${searchTerm}</strong>`);
                    }
                },
                error: function () {
                    $('#search-results-one').html(`<span class="text-danger">Error fetching data. Try again later.</span>`);
                }
            });
        }, 200); // 200ms delay (0.2 seconds)
    });

    $(document).on('click', '.result-item', function () {
        var pftValue = $(this).find('.pft').text();
        $('#selected-results-one').append(`
            <span class="selected-result">
                ${pftValue}
                <i class="fas fa-times remove-result" style="cursor: pointer;"></i>
            </span>
        `);

        $('#reason-for-encounter').val('');
        $('#reason-for-encounter').attr('placeholder', 'Enter your search term here');
        $('#search-results-one').empty();
        $('#search-results-one').hide();
        $('#selected-results-one').show()
    });

    $(document).on('click', '.remove-result', function () {
        $(this).parent().remove(); // Remove the result span
        if ($('#selected-results-one').find("span").length === 0) {
            $('#selected-results-one').css("display", "none");
        } else {
            //$('.selected-results').css("background-color", "yellowgreen");
        }
    });

    let typingTimeout2;
    $('#diagnosis').on('input', function () {
        let searchTerm = $(this).val().trim();
        clearTimeout(typingTimeout2);
        typingTimeout2 = setTimeout(function () {
            if (searchTerm.length < 3) {
                $('#search-results-two').empty();
                $('#search-results-two').hide();
                return;
            }

            //let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/MemberOf1382531000000102&includeDesignations=true&count=10&filter=${searchTerm}`;
            let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct/83821000000107?fhir_vs=ecl/MemberOf1382531000000102&includeDesignations=true&count=10&filter=${searchTerm}`;
            $.ajax({
                url: url,
                method: "GET",
                success: function (response) {
                    if (!response.expansion || !response.expansion.contains) {
                        $('#search-results-two').html(`No results found for <strong>${searchTerm}</strong>`);
                        return;
                    }

                    const total = response.expansion.total;
                    const contains = response.expansion.contains;
                    const formattedResults = contains.map(result => {
                        let displayTerm = result.display;
                        displayTerm = displayTerm.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="text-primary">${match}</strong>`);
                        const synonyms = [];
                        if (result.designation) {
                            result.designation.forEach(designation => {
                                if (designation.use.display === 'Synonym') {
                                    let synonym = designation.value;
                                    if (synonym.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        synonym = synonym.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="text-primary">${match}</strong>`);
                                        synonyms.push(synonym);
                                    }
                                }
                            });
                        }

                        if (synonyms.length > 0) {
                            let synonymList = synonyms.join(', ').replace(/,([^,]*)$/, ' and$1');
                            return `<div class="result-item-two"><i class="fas fa-search"></i> <span class="pft">${displayTerm}</span> (${synonymList})</div>`;
                        } else {
                            return `<div class="result-item-two"><i class="fas fa-search"></i> <span class="pft">${displayTerm}</span></div>`;
                        }
                    }).join('');

                    $('#search-results-two').show();
                    if (formattedResults) {
                        $('#search-results-two').html(`<strong>Total Results:</strong> ${total}<br>${formattedResults}`);
                    } else {
                        $('#search-results-two').html(`No results found for <strong>${searchTerm}</strong>`);
                    }
                },
                error: function () {
                    $('#search-results-two').html(`<span class="text-danger">Error fetching data. Try again later.</span>`);
                }
            });
        }, 200); // 200ms delay (0.2 seconds)
    });

    $(document).on('click', '.result-item-two', function () {
        var pftValue = $(this).find('.pft').text();
        $('#selected-results-two').append(`
            <span class="selected-result">
                ${pftValue}
                <i class="fas fa-times remove-result close-pill" style="cursor: pointer;"></i>
            </span>
        `);
        $('#diagnosis').val('');
        $('#diagnosis').attr('placeholder', 'Enter your search term here');
        $('#search-results-two').empty();
        $('#search-results-two').hide();
        $('#selected-results-two').show()
    });

    $(document).on('click', '.close-pill', function () {
        $(this).parent().remove();
        if ($('#selected-results-two').find("span").length === 0) {
            $('#selected-results-two').css("display", "none");
        } else {

        }
    });

    let typingTimeout3;
    $('#medications').on('input', function () {
        let searchTerm = $(this).val().trim();
        clearTimeout(typingTimeout3);
        typingTimeout3 = setTimeout(function () {
            if (searchTerm.length < 3) {
                $('#search-results-three').empty();
                $('#search-results-three').hide();
                return;
            }
            //let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/%3C10363901000001102&includeDesignations=true&count=10&filter=${searchTerm}`;
            let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct/83821000000107?fhir_vs=ecl/%3C10363901000001102&includeDesignations=true&count=10&filter=${searchTerm}`;
            $.ajax({
                url: url,
                method: "GET",
                success: function (response) {
                    if (!response.expansion || !response.expansion.contains) {
                        $('#search-results-three').html(`No results found for <strong>${searchTerm}</strong>`);
                        return;
                    }
                    const total = response.expansion.total;
                    const contains = response.expansion.contains;
                    const formattedResults = contains.map(result => {
                        let displayTerm = result.display;
                        displayTerm = displayTerm.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="text-primary">${match}</strong>`);

                        const synonyms = [];

                        if (result.designation) {
                            result.designation.forEach(designation => {
                                if (designation.use.display === 'Synonym') {
                                    let synonym = designation.value;
                                    if (synonym.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        synonym = synonym.replace(new RegExp(searchTerm, 'gi'), match => `<strong class="text-primary">${match}</strong>`);
                                        synonyms.push(synonym);
                                    }
                                }
                            });
                        }

                        if (synonyms.length > 0) {
                            let synonymList = synonyms.join(', ').replace(/,([^,]*)$/, ' and$1');
                            return `<div class="result-item-three" data-code="${result.code}"><i class="fas fa-search"></i> <span class="pft">${displayTerm}</span> (${synonymList})</div>`;
                        } else {
                            return `<div class="result-item-three" data-code="${result.code}"><i class="fas fa-search"></i> <span class="pft">${displayTerm}</span></div>`;
                        }
                    }).join('');
                    $('#search-results-three').show();
                    if (formattedResults) {
                        $('#search-results-three').html(`<strong>Total Results:</strong> ${total}<br>${formattedResults}`);
                    } else {
                        $('#search-results-three').html(`No results found for <strong>${searchTerm}</strong>`);
                    }
                },
                error: function () {
                    $('#search-results-three').html(`<span class="text-danger">Error fetching data. Try again later.</span>`);
                }
            });
        }, 200); // 300ms delay (0.2 seconds)
    });

    $(document).on('click', '.result-item-three', function () {
        var pftValue = $(this).find('.pft').text();
        let selectedCode = $(this).attr('data-code');
        let selectedText = $(this).text().trim();
        //let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/${selectedCode}.10362801000001104&_format=json`;
        let url = `${endpoint}ValueSet/$expand?url=http://snomed.info/sct/83821000000107?fhir_vs=ecl/${selectedCode}.10362801000001104&_format=json`;
        $.ajax({
            url: url,
            method: "GET",
            success: function (response) {
                if (!response.expansion || !response.expansion.contains) {
                    return;
                }
                // Extract the codes from the response
                let contains = response.expansion.contains;
                let codes = contains.map(concept => {
                    return { substance: concept.code, source: selectedCode}
                })

                // Get the causative agent values (substance-manifestations)
                let causativeAgentValues = $('.substance-manifestations').map(function () {
                    return {
                        "source": selectedCode,
                        "substance": $(this).attr('data-code'),
                        "namespace": $(this).attr('data-namespace')
                    }
                }).get();

                // Namespace to check for DMD
                let dmdNamespace = 'https://dmd.nhs.uk';
                let matchingRows = causativeAgentValues.filter(function (item) {
                    return item.namespace === dmdNamespace;
                });
                let causativeAgentSubstanceValues = causativeAgentValues;
                if (matchingRows.length > 0) {
                    let ajaxRequests = matchingRows.map(function (row) {
                        return $.ajax({
                            //url: `${endpoint}ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/${row.substance}.10362801000001104&_format=json`,
                            url: `${endpoint}ValueSet/$expand?url=http://snomed.info/sct/83821000000107?fhir_vs=ecl/${row.substance}.10362801000001104&_format=json`,
                            type: 'GET',
                            success: function (response) {
                                let contains = response.expansion.contains;
                                let newRows = contains.map(function (item) {
                                    return {
                                        "source": row.substance,
                                        "substance": item.code,
                                        "namespace": item.system
                                    };
                                });
                                // Append new rows to causativeAgentValues
                                causativeAgentSubstanceValues = causativeAgentSubstanceValues.concat(newRows);
                            },
                            error: function (error) {
                                console.log("Error:", error);
                            }
                        });
                    });

                    $.when.apply($, ajaxRequests).then(function () {
                        processCausativeAgentValues(codes, causativeAgentSubstanceValues);
                    });
                } else {
                    causativeAgentSubstanceValues = causativeAgentValues;
                    causativeAgentSubstanceValues.forEach(function(item) {
                        item.source = ""
                    });
                    processCausativeAgentValues(codes, causativeAgentSubstanceValues);
                }
            },
            error: function () {
                console.error("Error fetching data.");
            }
        })

        function processCausativeAgentValues(selected_codes_substances, causativeAgentSubstanceValues) {
            let selected_codes_substancesArray = Array.from(selected_codes_substances);
            let causativeAgentSubstanceValuesArray = Array.from(causativeAgentSubstanceValues);

            // Step 1: Process the 'selected_codes_substances' array to assign status (red, orange, green)
            selected_codes_substancesArray.forEach((selectedSubstance) => {
                let matchFound = false;
                causativeAgentSubstanceValuesArray.forEach((causativeAgentSubstance) => {
                    if (selectedSubstance['substance'] === causativeAgentSubstance['substance']) {
                        matchFound = true;
                        if (causativeAgentSubstance['source'] === '') {
                            selectedSubstance.status = "red";
                            selectedSubstance.allergenSource = causativeAgentSubstance.substance
                        } else {
                            selectedSubstance.status = "orange";
                            selectedSubstance.allergenSource = causativeAgentSubstance.source
                        }
                    }
                });

                if (!matchFound) {
                    selectedSubstance.status = "green";
                    selectedSubstance.allergenSource = ""
                }
            });

            // Step 2: Create a map to group by 'source' for filtering based on rules
            const sourceMap = {};
            selected_codes_substancesArray.forEach(row => {
                if (!sourceMap[row.source]) {
                    sourceMap[row.source] = {
                        red: false,
                        orange: false,
                        green: false,
                        greenRows: [],
                        originalRows: []
                    };
                }
                const sourceGroup = sourceMap[row.source];
                sourceGroup.originalRows.push(row);
                if (row.status === 'red') {
                    sourceGroup.red = true;
                } else if (row.status === 'orange') {
                    sourceGroup.orange = true;
                } else if (row.status === 'green') {
                    sourceGroup.green = true;
                    sourceGroup.greenRows.push(row);
                }
            });

            // Step 3: Apply the filtering rules based on the grouped rows
            const filteredRows = [];
            Object.values(sourceMap).forEach(sourceGroup => {
                // Rule 1: If red exists, drop any green or orange with the same 'source'
                if (sourceGroup.red) {
                    filteredRows.push(...sourceGroup.originalRows.filter(row => row.status === 'red'));
                }
                // Rule 2: If orange exists but no red, drop green with the same 'source'
                else if (sourceGroup.orange) {
                    filteredRows.push(...sourceGroup.originalRows.filter(row => row.status === 'orange'));
                }
                // Rule 3: If green exists, keep only one green and remove the others
                else if (sourceGroup.green) {
                    filteredRows.push(sourceGroup.greenRows[0]);
                }
            });

            // Step 4: Update the selected_codes_substancesArray with the filtered rows
            selected_codes_substancesArray.length = 0;
            selected_codes_substancesArray.push(...filteredRows);


            // Step 5: Update the results
            selected_codes_substancesArray.forEach(function(item) {
                //console.log(item)
                if (item.status == "red") {
                    $('.substance-manifestations[data-code="' + item.allergenSource + '"]').addClass("highlight-red");
                    $('#medications').prop('disabled', true);
                    $('#selected-results-three').show();
                    $('#selected-results-three').append(`
                        <span class="selected-result highlight-red" title="Contains ingredients listed in the allergy record">
                            <i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;&nbsp;
                            ${pftValue}
                            <i class="fas fa-times remove-result remove-alert" style="cursor: pointer;"></i>
                        </span>
                    `);
                    $('#medications').val('');
                    $('#medications').attr('placeholder', 'Enter your search term here');
                    $('#search-results-three').empty();
                    $('#search-results-three').hide();

                } else if (item.status == "orange") {
                    $('.substance-manifestations[data-code="' + item.allergenSource + '"]').addClass("highlight-orange");
                        $('#medications').prop('disabled', true);
                        $('#selected-results-three').show();
                        $('#selected-results-three').append(`
                            <span class="selected-result highlight-orange" title="Contains ingredients similar to those in allergy record">
                                <i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;&nbsp;
                                ${pftValue}
                                <i class="fas fa-times remove-result remove-warning" style="cursor: pointer;"></i>
                            </span>
                        `);
        
                        $('#medications').val('');
                        $('#medications').attr('placeholder', 'Enter your search term here');
                        $('#search-results-three').empty();
                        $('#search-results-three').hide();
                } else {
                    $('#selected-results-three').show();
                    $('#selected-results-three').append(`
                        <span class="selected-result">
                            ${pftValue}
                            <i class="fas fa-times remove-result remove-warning" style="cursor: pointer;"></i>
                        </span>
                    `);

                    $('#medications').val('');
                    $('#medications').attr('placeholder', 'Enter your search term here');
                    $('#search-results-three').empty();
                    $('#search-results-three').hide();
                }
            });

            $(document).on('click', '.remove-result', function () {
                $(this).parent().remove(); // Remove the result span
                if ($('#selected-results-three').find("span").length === 0) {
                    $('#selected-results-three').css("display", "none");
                } else {
                    //$('.selected-results').css("background-color", "yellowgreen");
                }
            });

            $(document).on('click', '.remove-alert', function () {
                $('#medications').prop('disabled', false);
                $('*').removeClass('highlight-red');
            });

            $(document).on('click', '.remove-warning', function () {
                $('#medications').prop('disabled', false);
                $('*').removeClass('highlight-orange');
            });

        }
    })
})