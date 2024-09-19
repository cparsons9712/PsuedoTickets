export const detectEnergySpike = (readings, K) => {
    // your code here
};

console.log(detectEnergySpike([2, 3, 1, 4, 6, 2, 1], 10)); // true
console.log(detectEnergySpike([1, 2, 3, 4, 5], 15)); // true
console.log(detectEnergySpike([5, 5, 5, 5], 10)); // true

console.log(detectEnergySpike([1, 1, 1, 1], 10)); // false
console.log(detectEnergySpike([1, 2, 3, 4], 9)); // true
console.log(detectEnergySpike([], 10)); // false
