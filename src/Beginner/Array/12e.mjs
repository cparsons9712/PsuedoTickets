/*
A multi-national corporation, GlobalFin, operates in various countries, each
maintaining its own financial records. At the end of each quarter, the corporate
headquarters needs to consolidate these records to generate comprehensive
financial reports. Each country’s financial data is sorted based on transaction
dates, but the headquarters requires a single, merged list that maintains the
chronological order of all transactions.

Problem:
Write a function that merges multiple sorted lists of financial transactions into
a single sorted list by transaction dates.

Test:
npm run test:grep -- @12e
*/

export const mergeSortedRecords = (array) => {

    //your code here

}
console.log(mergeSortedRecords([[{date: '2023-01-01', amount: 100}, {date: '2023-01-03', amount: 200}], [{date: '2023-01-02', amount: 150}, {date: '2023-01-04', amount: 250}]])); // [{date: '2023-01-01', amount: 100}, {date: '2023-01-02', amount: 150}, {date: '2023-01-03', amount: 200}, {date: '2023-01-04', amount: 250}]

console.log(mergeSortedRecords([[{date: '2023-02-01', amount: 300}], [{date: '2023-01-15', amount: 200}, {date: '2023-02-05', amount: 100}]])); // [{date: '2023-01-15', amount: 200}, {date: '2023-02-01', amount: 300}, {date: '2023-02-05', amount: 100}]

console.log(mergeSortedRecords([[{date: '2023-03-01', amount: 400}], [{date: '2023-03-01', amount: 100}, {date: '2023-03-02', amount: 200}]])); // [{date: '2023-03-01', amount: 400}, {date: '2023-03-01', amount: 100}, {date: '2023-03-02', amount: 200}]

console.log(mergeSortedRecords([[{date: '2023-01-01', amount: 100}], []])); // [{date: '2023-01-01', amount: 100}]

console.log(mergeSortedRecords([[], []])); // []

console.log(mergeSortedRecords([[{date: '2023-04-01', amount: 500}, {date: '2023-04-02', amount: 600}], [{date: '2023-04-01', amount: 400}, {date: '2023-04-03', amount: 700}]])); // [{date: '2023-04-01', amount: 500}, {date: '2023-04-01', amount: 400}, {date: '2023-04-02', amount: 600}, {date: '2023-04-03', amount: 700}]
