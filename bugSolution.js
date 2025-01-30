function foo(a, b) {
  a = a === null ? 0 : a; // Or throw an error: throw new Error('Argument a cannot be null');
  b = b === null ? 0 : b; // Or throw an error: throw new Error('Argument b cannot be null');
  // ... rest of the function
  return a + b; // Example of a safe operation
} 