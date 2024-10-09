/*
 EcoTech Solutions is a company specializing in environmental monitoring systems.
 They have deployed a network of sensors in a large urban area to collect real-time
 data on various environmental parameters such as temperature, humidity, air quality,
 and noise levels. The sensors are designed to transmit data at regular intervals to
 a central server, where it is stored and analyzed.

 Using basic array traversal to find the maximum and minimum values in arrays
 of sensor data is a practical and effective solution for real-time environmental
 monitoring. This approach helps EcoTech Solutions deliver critical insights and
 alerts, contributing to the safety and well-being of urban residents.

 Problem:
 Write a function that takes an array of sensor data and returns an object
 containing the minimum and maximum values.

 Test:
 npm run test:grep -- @12a
*/


export const findMinMaxValues=(array)=>{

    //Your code here

}

console.log(findMinMaxValues([23, 45, 12, 67, 34])); // { min: 12, max: 67 }

console.log(findMinMaxValues([10, 10, 10, 10, 10])); // { min: 10, max: 10 }

console.log(findMinMaxValues([-5, 0, 5, 10, 15])); // { min: -5, max: 15 }

console.log(findMinMaxValues([100])); // { min: 100, max: 100 }

console.log(findMinMaxValues([])); // { min: null, max: null }

console.log(findMinMaxValues([3, -7, 0, 8, 15, 9])); // { min: -7, max: 15 }

console.log(findMinMaxValues([1.5, 2.5, -1.5, 0, 3.5])); // { min: -1.5, max: 3.5 }
