// VARIABLES ----->
var input = document.querySelector("#inputunit");
var result = document.querySelector("#resultunit");

var inputType = document.querySelector("#inputType");
var resultType = document.querySelector("#resultType");

var inputTypeValue, resultTypeValue;

// EVENTLISTENERS ----->
input.addEventListener("keyup", conversionResult);
inputType.addEventListener("change", conversionResult);
resultType.addEventListener("change", conversionResult);

// Functions //
function conversionResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // KILOGRAM - KILOGRAM - KILOGRAM //
    if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000000;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "metricton") {
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 0.157473;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 2.20462;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 35.274;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 5000;
    }
    else if (inputTypeValue === "kilogram" && resultTypeValue === "kilogram") {
        result.value = input.value ;
    }

    // GRAM - GRAM - GRAM //
    if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.001 ;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000 ;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "metricton") {
        result.value = Number(input.value) * 0.000001;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 0.000157473;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 0.0022046244;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 0.0352739907;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 5;
    }
    else if (inputTypeValue === "gram" && resultTypeValue === "gram") {
        result.value = input.value ;
    }

    // MILLIGRAM - MILLIGRAM - MILLIGRAM //
    if (inputTypeValue === "milligram" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.000001 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 0.001 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "metricton") {
        result.value = Number(input.value) * 1000000000 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 6350293.18 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 0.0000022046 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 0.000035274 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 0.005 ;
    }
    else if (inputTypeValue === "milligram" && resultTypeValue === "milligram") {
        result.value = input.value ;
    }

    // METRIC TON - METRIC TON - METRIC TON //
    if (inputTypeValue === "metricton" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 1000 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 1000000 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 1000000000 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 157.473 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 2204.6244202 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 35273.990723 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 5000000 ;
    }
    else if (inputTypeValue === "metricton" && resultTypeValue === "metricton") {
        result.value = input.value ;
    }

    // STONE - STONE - STONE //
    if (inputTypeValue === "stone" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 6.35029 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 6350.29 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 6350293.18 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "metricton") {
        result.value = Number(input.value) * 0.00635029 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 14 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 224 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 31751.5 ;
    }
    else if (inputTypeValue === "stone" && resultTypeValue === "stone") {
        result.value = input.value ;
    }

    // POUND - POUND - POUND //
    if (inputTypeValue === "pound" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.453592 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 453.592 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 453592 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 0.0714286 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "metricton") {
        result.value = Number(input.value) * 0.0004464286 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 16 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 2267.96 ;
    }
    else if (inputTypeValue === "pound" && resultTypeValue === "pound") {
        result.value = input.value ;
    }

    // OUNCE - OUNCE - OUNCE //
    if (inputTypeValue === "ounce" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.0283495 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 28.3495 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 28349.5 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 0.00446429 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 0.0625 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "metricton") {
        result.value = Number(input.value) * 0.0000283495 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "carat") {
        result.value = Number(input.value) * 141.7475 ;
    }
    else if (inputTypeValue === "ounce" && resultTypeValue === "ounce") {
        result.value = input.value ;
    }

    // CARAT - CARAT - CARAT //
    if (inputTypeValue === "carat" && resultTypeValue === "kilogram") {
        result.value = Number(input.value) * 0.0002 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "gram") {
        result.value = Number(input.value) * 0.2 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "milligram") {
        result.value = Number(input.value) * 200 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "stone") {
        result.value = Number(input.value) * 0.000031495 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "pound") {
        result.value = Number(input.value) * 0.0004409249 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "ounce") {
        result.value = Number(input.value) * 0.0070547981 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "metricton") {
        result.value = Number(input.value) / 5000000 ;
    }
    else if (inputTypeValue === "carat" && resultTypeValue === "carat") {
        result.value = input.value ;
    }
}

// RESET CONVERTER //
function resetForm() {
    document.querySelector("form").reset();
}