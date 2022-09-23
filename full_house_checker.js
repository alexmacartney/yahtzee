function fullHouseChecker(array) {
    var sortedArray = array.sort();
    var lastIndex = sortedArray.length - 1;

    if (sortedArray[0] != 0 && sortedArray[0] == sortedArray[1] && sortedArray[lastIndex - 1] == sortedArray[lastIndex] && (sortedArray[0] == sortedArray[2] || sortedArray[lastIndex - 2] == sortedArray[lastIndex])) {
        return true;
    }

    return false;
}