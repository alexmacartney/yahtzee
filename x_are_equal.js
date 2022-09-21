function xAreEqual(array, x) {
    var sortedArray = array.sort();
    var counter = 1;

    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i] == sortedArray[i + 1]) {
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