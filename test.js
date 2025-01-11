function cleanNumber(input) {
  // Use a regular expression to remove all non-numeric characters
  const cleaned = input.replace(/[^\d]/g, "");
  return cleaned;
}

// Example usage
const input = " 12a34!@#5 - 6789 ";
const result = cleanNumber(input);
console.log(`Cleaned Number: ${result}`); // Output: "12345678"
