

var add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
};

var subs = function(a, b) {
    return parseFloat(a) - parseFloat(b);
};

var mult = function(a, b) {
    return parseFloat(a) * parseFloat(b);
};

var divd = function(a, b) {
    return parseFloat(a) / parseFloat(b);
};

module.exports.add = add;
module.exports.subs = subs;
module.exports.mult = mult;
module.exports.divd = divd;

