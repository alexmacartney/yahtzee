function straightChecker(array, x) {
    var sortedArray = array.sort();
    var unique = [...new Set(array)];
    var counter = 1;

    for (let i = 0; i < unique.length - 1; i++) {
        if (unique[i] == unique[i + 1] - 1) {
            counter += 1;

            if (counter == x) {
                return true;
            }
        } else {
            counter = 1;
        }
    }

    return false;
}