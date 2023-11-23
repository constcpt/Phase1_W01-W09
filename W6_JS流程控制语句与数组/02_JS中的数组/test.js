// bubble sort
function bubbleSort(arr) {
    var isSort;
    for (var i = 0; i < arr.length - 1; i++) {
        isSort = false;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSort = true;
            }
        }
        if (isSort == false) {
            break;
        }
    }
    return arr;
}
