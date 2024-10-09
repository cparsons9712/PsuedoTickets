/*
Scenerio:
In a financial application, accurate handling of Social Security Numbers (SSNs)
is critical. SSNs are used for identity verification, tax reporting, and various
compliance-related processes. These numbers have a specific format: they are nine digits
long, typically displayed as "XXX-XX-XXXX." Maintaining the integrity of this format is
essential for proper data processing and validation.

A common issue arises when SSNs are treated as numerical data. When this happens, leading
zeros are stripped away, and formatting dashes are removed, resulting in incorrect and
unusable data. For example, the SSN "012-34-5678" could be transformed into the number
12345678, losing critical formatting information.

To prevent such errors, it is necessary to verify that SSN inputs are treated as strings,
preserving their exact format. This verification should be part of a generalized data type
verification function that can be reused across different parts of the application,
ensuring robust data handling.

Problem:
Write a function that returns true if the inputted data is a string, or returns false if it is not a string

Testing:
1. To test the code run the following command:
npm run test:grep -- @11a

*/


export const isString = (input) => {

    // Your Code Here

}

console.log(isString('hello')) // true

console.log(isString(15)) // false

console.log(isString('15')) // true
