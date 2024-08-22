let score = "33abc"   // this is string
let score2 = 44   // this is number

// console.log(typeof score);
// console.log(typeof (score));

// console.log(typeof score2);

let valueInNumber = Number (score)      //this make the change of the datatype, 
                                        //actually score is string, not it will turn into number
// console.log(typeof valueInNumber);
// console.log( valueInNumber);            //will get NaN, because score(33abc),
                                        //not all is number
// "33" => 33
// "33abc" => Nan
// true => 1; false => 0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let isLoggedOut = 1
let bhello = Boolean(isLoggedOut)       // the word "Boolean changed the 1 in true"

// console.log(bhello);      

let someNum = 33

let stringNumber = String(someNum)
// console.log(stringNumber);

// console.log(typeof stringNumber);


// *****************Operations****************

let value = 3;
let negValue = -value;
// console.log(negValue);


// console.log(2+3);


let str1 = "hello"
let str2 = " erudite"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);

console.log(1 + 2 + "2");

console.log((3+ 4 )* 5 % 3);

console.log(true);
console.log(+true)
console.log(+false);


console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(num2);

let gameCounter = 100

gameCounter--;
console.log(gameCounter);

let a = 3
let b = ++a

console.log(b);
console.log(a);

// link to study     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

