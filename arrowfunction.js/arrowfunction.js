//a. Print odd numbers in an array
const arr = [39,38,37,36,35,34,33,32,31];
const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log('Odd Numbers:', oddNumbers);


//b. Convert all the strings to title caps in a string array
const stringArray = ["anitha kumar", "agriculture graduate", "ssc aspirant"];
const toTitleCase = str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const titleCasedArray = stringArray.map(toTitleCase);
console.log(titleCasedArray);


//c. Sum of all numbers in an array
const numbers = [21,31,41,51,61,71];
const sum = numbers.reduce((total, current) => total + current, 0);
console.log('Sum of numbers:', sum);


//d. Return all the prime numbers in an array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
  if (num <= 1) return false; // 1 and less are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = arr1.filter(isPrime);
console.log('Prime Numbers:', primeNumbers);

//e.Return all the palindromes in an array
const array = ['malayalam','moon','radar','tattarrattat','dead','deed'];
const isPalindrome = str => str === str.split('').reverse().join('');
const palindromes = array.filter(isPalindrome);
console.log('Palindromes:', palindromes);

