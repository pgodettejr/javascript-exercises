const removeFromArray = function(arr, ...args) {
    return arr.filter(function(element) {
        return args.indexOf(element) === -1;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
