export const countVowelsAndConsonants = (str) => {
  // your code here
  if (typeof str !== "string") {
    return "Please enter a valid string";
  }

  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantCount++;
    }
  }

  return `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
};
