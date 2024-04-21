// a. Print odd numbers in an array
const arr = [39,38,37,36,35,34,33,32,31];

(function() {
  const oddNumbers = arr.filter(function(num) {
    return num % 2 !== 0;
  });
  console.log(oddNumbers);
})();


//b. Convert all the strings to title caps in a string array
(function() {
  const stringArray = ["anitha kumar", "agriculture graduate", "ssc aspirant"];
  const titleCasedArray = stringArray.map(function(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
  console.log(titleCasedArray);
})();


//c. Sum of all numbers in an array
const sum = (function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
})([21,31,41,51,61,71]); 
console.log('Sum of all numbers:', sum);


//d. Return all the prime numbers in an array
const primes = (function(arr) {
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  return arr.filter(isPrime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
console.log('Prime numbers:', primes);


//e.Return all the palindromes in an array
const palindromes = (function(arr) {
  const isPalindrome = str => {
    const normalizedStr = str.toLowerCase().replace(/[\W_]/g, '');
    return normalizedStr === normalizedStr.split('').reverse().join('');
  };

  return arr.filter(isPalindrome);
})(['malayalam','moon','radar','tattarrattat','dead','deed']); 
console.log('Palindromes:', palindromes);

//f. Return median of two sorted arrays of the same size.
const median = (function(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const midIndex = mergedArray.length / 2;
  return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
})([11,13,15], [12, 14, 16]); 
console.log('Median:', median);


//g. Remove duplicates from an array
const uniqueArray = (function(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
})([2,4,6,4,7,8,3,9,8]); 
console.log('Unique elements:', uniqueArray);

//h. Rotate an array by k times
const rotatedArray = (function(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
})([11,21,31,41,51], 21);
console.log('Rotated array:', rotatedArray);







