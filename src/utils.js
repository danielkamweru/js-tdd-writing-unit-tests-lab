// src/utils.js

// Function to calculate age from birth year
function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Check type
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Check for empty string first
  if (word.length === 0) {
    return false;
  }

  // Validate alphabetic characters only
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Word must contain only letters");
  }

  // Normalize to lowercase for case-insensitive comparison
  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

// Export both functions
module.exports = {
  currentAgeForBirthYear,
  isPalindrome,
};
