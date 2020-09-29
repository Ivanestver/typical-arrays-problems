
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
    if (array === undefined) {
        return 0;
    }

    let max = 0;

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

exports.avg = function avg(array) {
  return 0;
}
