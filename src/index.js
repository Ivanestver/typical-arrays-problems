
exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let min = 1000000000;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

exports.max = function max(array) {
  return 0;
}

exports.avg = function avg(array) {
  return 0;
}
