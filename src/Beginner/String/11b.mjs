/*
Scenerio:
In a user registration system, unique usernames are essential for identifying
users within the application. These usernames are often derived from the email
addresses provided during registration, simplifying the process for both users
and system administrators. The username is defined as the portion of the email
address that precedes the "@" symbol. For example, given the email address
"john.doe@example.com," the username should be "john.doe."

To facilitate this, we need a function that extracts the username from an email
address. This function will be integrated into the registration workflow, ensuring
consistent and accurate username generation.

Problem:
Write a function that takes an email address as input and returns the username
part of the email. The username is defined as the part of the email address before
the "@" symbol.

Test:
npm run test:grep -- @11b

*/


export const extractUsername = (email) => {

    // Your Code Here

};

console.log(extractUsername("john.doe@example.com")); // "john.doe"

console.log(extractUsername("jane.smith@gmail.com")); // "jane.smith"

console.log(extractUsername("user123@yahoo.com")); // "user123"

console.log(extractUsername("noatsymbol")); // "Please enter a valid email address"

console.log(extractUsername("@nousername.com")); // "Please enter a valid email address"

console.log(extractUsername("username@")); // "username"

console.log(extractUsername("username@domain.com")); // "username"

console.log(extractUsername("123@numbers.com")); // "123"

console.log(extractUsername("name.with.dots@domain.com")); // "name.with.dots"
