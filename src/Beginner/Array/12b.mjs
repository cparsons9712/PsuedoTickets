/*
A leading e-commerce company, ShopMart, experiences high traffic on their
platform, especially during sales events. To offer a seamless shopping
experience, they leverage real-time analytics to monitor user interactions,
adjust recommendations, and optimize the website’s performance.
One critical aspect of their system involves reordering data efficiently
to reflect recent trends without disrupting ongoing processes.

ShopMart’s analytics team needs to rotate user interaction logs stored in arrays
to prioritize the most recent data. This is crucial for generating up-to-date
recommendations and insights. The logs are stored in a circular buffer, where
new data continuously overwrites the oldest entries once the buffer is full.
To maintain performance, the system must rotate the array to place the latest
entries at the beginning before processing them for analytics.

By rotating the array of user interactions, ShopMart can efficiently reorder their
logs, enabling the analytics team to focus on the most recent data first. This helps in:

1. Generating Real-Time Recommendations: The most recent user interactions are given priority in generating personalized recommendations.
2. Monitoring Trends: The team can quickly identify and react to emerging trends during high-traffic events.
3. Optimizing Performance: The system maintains high efficiency, ensuring that user experience remains unaffected by the background data reorganization processes.

Problem:
Write a function that rotates an array of user interaction logs k positions to the right.

Test:
npm run test:grep -- @12b
*/

export const rotateArray = (arr, k) => {

    //Your code here

};
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // [5, 6, 1, 2, 3, 4]

console.log(rotateArray([10, 20, 30, 40, 50], 3)); // [30, 40, 50, 10, 20]

console.log(rotateArray([7, 8, 9], 1)); // [9, 7, 8]

console.log(rotateArray([], 4)); // []

console.log(rotateArray([1, 2], 5)); // [2, 1]

console.log(rotateArray([1], 10)); // [1]

console.log(rotateArray("not an array", 3)); // "Please enter a valid array"

console.log(rotateArray([1, 2, 3], -2)); // "Please enter a valid number of positions"

console.log(rotateArray([1, 2, 3], "two")); // "Please enter a valid number of positions"
