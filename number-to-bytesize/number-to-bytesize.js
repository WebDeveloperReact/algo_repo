var prefixes = {
    Byte: 0,
    kB: 3,
    MB: 6,
    GB: 9,
    TB: 12
};

var numberToBytesize = function(number) {
    try {
        number = parseFloat(number);
    } catch(e) {
        return number;
    }

    var target = 'Byte';
    Object.keys(prefixes).forEach(function(p) {
        if( (number / Math.pow(10, prefixes[p])) >= 1)
            target = p;
    });
    
    var rounded = Math.round((number / Math.pow(10, prefixes[target])) * 100) / 100;
    return rounded + ' ' + target;
};
