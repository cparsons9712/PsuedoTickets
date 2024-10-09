/*
An e-commerce platform, ShopEase, has a vast inventory of products
listed on its website. Over time, due to various integrations with
suppliers and manual data entries, the product database has accumulated
duplicate entries. These duplicates can lead to issues such as incorrect
stock counts, misleading search results, and inconsistent data analytics.

To address this, the data engineering team at ShopEase needs to clean up
the product database by removing duplicate entries. The products are already
sorted based on their unique product IDs, so the task is to remove duplicates
from this sorted list efficiently.

Problem:
Write a function that removes duplicate entries from a sorted list of product IDs.

Test:
npm run test:grep -- @12c
*/

export const removeDuplicates = (array) => {

    //your code here

}
console.log(removeDuplicates([101, 101, 102, 103, 103, 104])); // [101, 102, 103, 104]

console.log(removeDuplicates([201, 202, 202, 202, 203])); // [201, 202, 203]

console.log(removeDuplicates([301, 301, 301])); // [301]

console.log(removeDuplicates([401, 402, 403])); // [401, 402, 403]

console.log(removeDuplicates([])); // []

console.log(removeDuplicates([501])); // [501]

console.log(removeDuplicates([601, 601, 602, 602, 602, 603])); // [601, 602, 603]
