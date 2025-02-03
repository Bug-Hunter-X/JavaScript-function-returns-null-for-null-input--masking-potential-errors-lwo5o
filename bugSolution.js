function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately
    console.warn("Null value(s) encountered.");
    return NaN; //Return NaN to indicate a problem
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // NaN
console.log(foo(1, null)); // NaN
console.log(foo(null, null)); // NaN