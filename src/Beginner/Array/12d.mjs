/*
An environmental monitoring company, EcoSense, deploys thousands of
IoT sensors in a large forest to track temperature, humidity, and air
quality. These sensors collect data and transmit it periodically to
a central server. Each transmission includes a sequence number, ranging
from 1 to N, ensuring that the server receives and stores data in the correct order.

However, due to intermittent connectivity issues and occasional
sensor malfunctions, some data packets may be lost during transmission.
The central server needs to detect and identify any missing sequence numbers
to prompt a retransmission request from the affected sensors.

Problem:
Write a function that identifies missing sequence numbers from an array
of received sequence numbers.

Test:
npm run test:grep -- @12d
*/



export const findMissingSequences = (array) =>  {

    //Your code here

}
console.log(findMissingSequences([1, 2, 4, 5, 7], 7)); // [3, 6]

console.log(findMissingSequences([2, 3, 7], 7)); // [1, 4, 5, 6]

console.log(findMissingSequences([1, 2, 3, 4, 5], 5)); // []

console.log(findMissingSequences([], 3)); // [1, 2, 3]

console.log(findMissingSequences([1], 1)); // []

console.log(findMissingSequences([1, 3, 4, 5, 6], 6)); // [2]

console.log(findMissingSequences([2, 5, 6, 9], 10)); // [1, 3, 4, 7, 8, 10]
