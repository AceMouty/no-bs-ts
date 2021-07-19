> **NOTE**
>
> Be sure you have gone through the initial setup
> before continuing on.

## Creating and running a TypeScript file
Run `basics.ts` with `npx ts-node basics.ts` and immediately
we can see the benefits of TypeScript.

```ts
// basics.ts

let userName = "John";
let hasLoggedIn = true;

hasLoggedIn += " Doe"

console.log(hasLoggedIn)

```
## Specifying Types

In typescript we can specify types by doing
`varName: type`. Some basic types are

```ts
// basics.ts

let userName: string = "John";
let hasLoggedIn: boolean = true;

let favNumber: number = 7;
let myRegex: RegEx = /foo/;
```

### Array Type
We can declare `array` types two different ways
1. Square brackets: type[]
2. Generic: Array<type>

```ts
// basics.ts

const userNames: string = "John Sally Sue Jimmy"
const names: string[] = userNames.split(" ")

const nums: Array<number> = [1, 2, 3, 4, 5];
```

### Object Type
When defining object types, you can use object notation where
the key is the name of the key and the value is the type
`{ key: type, key: type}`

```ts
// basics.ts

// ... 

const person: {
    firstName: string,
    lastName: string
  } = {
      firstName: "Sally",
      lastName: "Ohare"
    }
```

However if you wanted to add in a new required / optional field
to this person you would have to add it to the type defanition
like so...
```ts
// basics.ts

// ... 

const person: {
    firstName: string,
    lastName: string,
    isCool: boolean
  } = {
      firstName: "Sally",
      lastName: "Ohare",
      isCool: true
    }
```
But now if you wanted to declare another variable that would
use this person object we would have to copy and paste this defanition.
Instead of doing that, we can instead create a interface.
This makes it easier to manage and re-use our code.

```ts
// basics.ts

// ...

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
```

### Record Type

Lots of times, we like to add data to our objects later in our code
however we can not simply do this in typescript.

```ts
// basics.ts

cosnt ids = {
    10: "a",
    20: "b"
  }

ids[30] = "c"
```

Typescript will complain because you declared your object to hold
keys of `10 & 20` so it will not allow adding a key arbitrarily.
In comes the `Record Type`.

```ts
// basics.ts
// ...

const ids: Record<number, string> = {
    10: "a",
    20: "b"
  }

ids[30] = "c"
```

## Conditionals and Loops

Using conditionals in TypeScirpt will work the same
as in JavaScript.

```ts
// basics.ts
// ...

const ids: Record<number, string> = {
    10: "a",
    20: "b"
  }

ids[30] = "c"

if(ids[30] === "D")
  console.log("Value in 30 is D")
else
  console.log("Value in 30 is NOT D")

```

Typescript will know to do a string comparison here, so all is
well in the world.

However with `loops` we will need to declare variables correctly
if you choose to declare the type. We should however allow
TypeScript to infer as much as possible for us so this is overkill a bit...

```ts
for (let i: number = 0; i < 10; i++){
    console.log(`i is currently ${i}`)
  }
```

## Array Methods

Array methods will also still work the same for the most part.

```ts
[1,2,3,4].forEach( (num: number) => console.log(num));
const out: number[] = [1,2,3,4,5].map((num: number) => num * 2);
```
