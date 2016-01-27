//Use Recursion to merge sort an array

//given arr = [2,34,7,23,32,5,62,1];
//expect: [1,2,5,7,23,32,34,62]


var arr = [2,34,7,23,32,5,62,1];

var mergeSort = function(arr) {
    
    for (var i = arr.length-1; i > 0 ; i--) {
        if (arr[0] > arr[i]) {
            var temp = arr.shift();
            var result = arr.slice(0,i).concat(temp).concat(arr.slice(i));
            
            return mergeSort(result);
        } 
    }
    return arr;
}

console.log(mergeSort(arr));
