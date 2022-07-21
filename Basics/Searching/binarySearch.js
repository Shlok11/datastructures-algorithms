function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);
  while (arr[mid] !== val && start<=end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    var mid = Math.floor((start + end) / 2);
  }
  if(arr[mid] == val){
    return mid;
  }
  return -1;
}

console.log(binarySearch([2, 22, 34, 56, 78, 88], 88));
                        //s       m           e
