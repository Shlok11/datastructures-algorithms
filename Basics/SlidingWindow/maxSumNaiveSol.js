function maxSubArray(arr, num) {
  if (arr.length < num) return null;
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp = temp + arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubArray([2,7,3,8,4,9,5],3));
