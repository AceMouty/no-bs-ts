// Basic typing
let userName = "John";
let hasLoggedIn = true;

userName += " Doe"

console.log(userName)
console.log(hasLoggedIn)

// Arrays
const userNames: string = "John Sally Sue Jimmy"
const names: string[] = userNames.split(" ")

const nums: Array<number> = [1, 2, 3, 4, 5];

// User defined types
interface Person {
    firstName: string,
    lastName: string,
    isCool: boolean,
  }

const p1: Person = {
    firstName: "John",
    lastName: "Doe",
    isCool: false
  }

const p2: Person = {
    firstName: "Sally",
    lastName: "May",
    isCool: true
  }

// Records
const ids: Record<number, string> = {
    10: "a",
    20: "b"
  }

ids[30] = "c"

// Conditionals and Loops
if(ids[30] === "D")
  console.log("Value in 30 is D")
else
  console.log("Value in 30 is NOT D")

for (let i: number = 0; i < 10; i++){
    console.log(`i is currently ${i}`)
  }

// Array methods
[1,2,3,4].forEach( (num: number) => console.log(num));
const out: number[] = [1,2,3,4,5].map((num: number) => num * 2);
