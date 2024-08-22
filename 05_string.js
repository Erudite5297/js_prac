const name = "Erudite"
const repoCount = 50 

// console.log(name +  repoCount + " Value");
console.log(`Hello my name is ${name}`)

console.log(`Hello, I'm at home now, but will be at hostel soon and number of mny repo is ${repoCount}`);


const gameName = new String('sumanta-mo-them')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.toLowerCase())

console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-9, 7)
console.log(anotherString);

const newStringOne = "    Erudite     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://moirangthem.com/erudite%25Ko"
console.log(url.replace('%25', '-'));
console.log(url.replace('erudite', 'sumanta'));
console.log(url.icludes('akashan'));

// console.log(gameName.split('-'));         I didn't get properly 
