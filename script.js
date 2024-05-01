//1.Do the below programs in anonymous function & IIFE



//a.print odd numbers in array

let arr=[1,2,3,4,5,6,7,8,9,33,55,45]
arr.forEach(function(num){
    if(num % 2 !==0){
        console.log(num);
    }
}
)




//b. Convert all the strings ti title caps in a string array

let title = ["hello world", "how are you", "javascript is awesome"];

let titleCasedArr = title.map(function(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
});

console.log(titleCasedArr);


//c. sum of all numbers in an array



let sum = [1, 2, 3, 4, 5];

let result = sum.reduce(function(total, num) {
  return total + num;
});

console.log(result);



//d .return all the prime numbers in an array


let  arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = arr.filter(function(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(primeNumbers);



//E.return all the palindromes in an array 



let letters = ["hello", "world", "level", "racecar", "pop"];

let palindromes = letters.filter(function(str) {
  return str === str.split("").reverse().join("");
});

console.log(palindromes);



//f.return median of two sorted arrays of the  same size


const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

const median = function(arr1, arr2) {
  const len = num1.length;
  const mergedArr = [...num1, ...num2].sort((a, b) => a - b);
  if (len % 2 === 0) {
    return (mergedArr[len - 1] + mergedArr[len]) / 2;
  } else {
    return mergedArr[len];
  }
};

console.log(median(num1, num2));



//g.Remove duplicates from an array


const duplicate = [1, 2, 3, 4, 1, 2, 5];

const uniqueArr = duplicate.filter(function(value, index, self) {
  return self.indexOf(value) === index;
});

console.log(uniqueArr);


//h.Rotate an array by k times


let arr4 = [1, 2, 3, 4, 5];
let k = 3;

let rotate = function(arr4, k) {
  let n = arr4.length;
  let rotatedArr = [];

  for (let i = 0; i < n; i++) {
    rotatedArr[(i + k) % n] = arr4[i];
  }

  return rotatedArr;
};

console.log(rotate(arr4, k));



//3 .do the below programs in arrow functions


//a.print odd numbers in an array


let o  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = o.filter((num) => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]



//b. Convert all the strings ti title caps in a string array


let stringArr = ["hello world", "this is a test", "javascript is awesome"];

let titleCaseArr = stringArr.map((str) => str.replace(/\b\w/g, (char) => char.toUpperCase()));

console.log(titleCaseArr); // Output: ["Hello World", "This Is A Test", "Javascript Is Awesome"]


//c.sum of all numbers in an array


const arr3= [1, 2, 3, 4, 5];

const sum1= arr3.reduce((acc, curr) => acc + curr, 0);

console.log(sum1); // Output: 15



//d.return all the prime numbers in an array

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isPrime = (num) => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

let primeNumbers1 = arr5.filter(isPrime);

console.log(primeNumbers1); // Output: [2, 3, 5, 7]



//E.return all the palindromes in an array 



const arr6= ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const palindromeArr = arr6.filter(isPalindrome);

console.log(palindromeArr); // Output: ["racecar", "level", "deified"]
