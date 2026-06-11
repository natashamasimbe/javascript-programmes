// ========================================
// PROGRAMME 1
// Sum of all numbers divisible by 3
// from 1 to 100
// ========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        sum += i;
    }
}

console.log("==========================================");
console.log("Sum of numbers divisible by 3 (1-100)");
console.log("==========================================");
console.log("Sum = " + sum);
console.log("==========================================");

// ========================================
// PROGRAMME 2
// Numbers divisible by 3 but NOT by 2
// from 1 to 100
// ========================================

console.log("==========================================");
console.log("Numbers divisible by 3 but NOT by 2");
console.log("==========================================");

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 2 !== 0) {
        console.log(i);
        count++;
    }
}

console.log("------------------------------------------");
console.log("Total numbers found: " + count);
console.log("==========================================");
