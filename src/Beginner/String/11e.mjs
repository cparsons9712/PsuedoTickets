/*
Scenerio:
A language learning app wants to provide detailed feedback on users'
written inputs by analyzing the composition of their text. Counting
vowels and consonants helps in assessing pronunciation and language complexity.

Problem:
Write a function that takes in a string argument and returns the count of
vowels and consonants in the format "Vowels: X, Consonants: Y".

Test:
npm run test:grep -- @11e

*/

export const countVowelsAndConsonants = (string) => {

    // Your Code Here

};

console.log(countVowelsAndConsonants("hello")); // "Vowels: 2, Consonants: 3"

console.log(countVowelsAndConsonants("education")); // "Vowels: 5, Consonants: 4"

console.log(countVowelsAndConsonants("")); // "Vowels: 0, Consonants: 0"

console.log(countVowelsAndConsonants("rhythm")); // "Vowels: 0, Consonants: 6"

 console.log(countVowelsAndConsonants("sky")); // "Vowels: 0, Consonants: 3"

console.log(countVowelsAndConsonants(123)); // "Please enter a valid string"

console.log(countVowelsAndConsonants("AEIOU")); // "Vowels: 5, Consonants: 0"

 console.log(countVowelsAndConsonants("bcd")); // "Vowels: 0, Consonants: 3"

console.log(countVowelsAndConsonants("!@#")); // "Vowels: 0, Consonants: 0"
