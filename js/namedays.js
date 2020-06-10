$( document ).ready(function() {
    

    var countries = {
      "lv": "LV",
      "cz": "CZ",
      "sk": "SK",
      "pl": "PL",
      "fr": "FR",
      "hu": "HU",
      "hr": "HR",
      "se": "SE",
      "us": "US",
      "at": "AT",
      "it": "IT",
      "es": "ES",
      "de": "DE",
      "dk": "DK",
      "fi": "FI",
      "bg": "BG",
      "lt": "LT",
      "ee": "EE",
      "gr": "GR",
      "ru": "RU"
    };

    var $countrySelect = $('#country');
    
    $.each(countries, function(key, value) {
      var $option = $("<option/>", {
        value: key,
        text: value
      });
      $countrySelect.append($option);
    });


  
});

