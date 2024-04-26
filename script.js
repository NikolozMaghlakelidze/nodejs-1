//savarjisho 1
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
      } else if (i % 3 === 0) {
        console.log(i + " Fizz");
      } else if (i % 5 === 0) {
        console.log(i + " Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz();

//savarjisho 2
function factorialcalculator(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
  let error = document.querySelector(".error")

  function calculatefactorial() {
    let numberinput = document.querySelector(".numberinput");
    let number = numberinput.value;
    if (number < 0) {
      error.textContent = "wrong number";
    } else {
      let fact = factorialcalculator(number);
      let results = `<p>The factorial of ${number} is ${fact}.</p>`;
      document.querySelector(".result").innerHTML += results;
    }
  }
//savarjisho 3
  function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let js = capital("javascript")

console.log(js); 
 
//savarjisho 4
function blankStringChecker(testString) {
    if (typeof testString === "string" && testString.trim().length === 0) {
        return "This string is blank";
    } else {
        return "This string is not blank";
    }
}

let blank = "";
console.log(blankStringChecker(blank)); 

written = "Test";
console.log(blankStringChecker(written));

// 5
let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let result = [];

for (let i1 = 0; i1 < names.length; i1++) {
    if (names[i1] !== 'Bob') {
        result.push(names[i1]);
    }
}

console.log(result); 

//if-is gareshe
let names1 = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
let result1 = names1.filter(
    name => name !== 'Bob'
    )
console.log(result1)