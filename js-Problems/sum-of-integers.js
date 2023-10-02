// sum of integers  memoization
function sum(n, result = 0) {
    if (n === 0) return result; // Base case: when n is 0, return the result
    return sum(n - 1, result + n); // Recursive case: decrement n and accumulate the sum
}

console.log(sum(3)); // Output: 6