// SOURCE: https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
export function arrayMin(arr) {
  let len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min === Infinity ? null : min;
}
