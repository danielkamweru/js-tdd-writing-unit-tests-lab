const { currentAgeForBirthYear, isPalindrome } = require("../utils");

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(new Date().getFullYear() - 1984);
  });
});

describe("isPalindrome", () => {
  it("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive, e.g., 'Mom' should return true", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("race-car")).toThrow("Word must contain only letters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
