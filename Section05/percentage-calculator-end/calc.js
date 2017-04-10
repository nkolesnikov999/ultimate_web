var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');
var selectFunction = document.getElementById('selectFunction');

var zero = function(x, y) {
    return x / 100 * y;
}

var first = function(x, y) {
    return x / y * 100;
}

var second = function(x, y) {
    return y / x * 100 + "%";
}

var third = function(x, y) {
    return y / x * 100;
}

var forth = function(x, y) {
    return x / 100 * y;
}

form.addEventListener('submit', function (event) {
    
    var exectFunction = function(){};
    switch(selectFunction.options.selectedIndex) {
        case 0:
            exectFunction = zero;
            break;
        case 1:
            exectFunction = first;
            break;
        case 2:
            exectFunction = second;
            break;
        case 3:
            exectFunction = third;
            break;
        case 4:
            exectFunction = forth;
    }
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = exectFunction(x, y);
        
        resultField.innerText = "Answer: " + result;
        event.preventDefault();
    }

});