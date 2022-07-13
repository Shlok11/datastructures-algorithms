function maxSum(nums, k) {
  var i = 0; //start of the window
  var j = 0; //end of the window
  var sum = 0;
  var maxSum = sum
  while (j < nums.length) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      j++;
      i++;
    }
  }
}
