
function filterEvenNumbers(arr, callback) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  const input = [1, 2, 3, 4, 5, 6];
  const output = filterEvenNumbers(input, isEven);
  
  console.log(output);