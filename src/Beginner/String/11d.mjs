/*
Scenerio:
An email service provider needs to filter spam emails by checking for
specific keywords within the email content. Identifying the presence of
these keywords helps in categorizing and filtering spam emails effectively.
The spam filter system scans the content of incoming emails for the presence
of known spam-related keywords. If any of these keywords are found, the
email is flagged as spam and moved to the spam folder.

Problem:
Write a function that checks if a given string contains a specified substring.

Test:
npm run test:grep -- @11d
*/

export const containsSubstring = (str, substr) => {

    // Your Code Here

}

console.log(containsSubstring("OpenAI", "AI")); // True

console.log(containsSubstring("Hello World", "world")); // True

console.log(containsSubstring("Email content with prize", "Prize")); // True

console.log(containsSubstring("This is a test", "Test")); // True

console.log(containsSubstring("Security alert", "alert")); // True

console.log(containsSubstring("This is a test", "quiz")); // False

console.log(containsSubstring("The quick brown fox leaped over the lazy dog", "cat")); // False
