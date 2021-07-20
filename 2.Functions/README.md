
## **Any** type

Here parameters `mun1 & num2` are of **any** type.
We want to avoid use of the any type as much as possible.
The value can legit be ANYTHING a number, string, object, null,
undefined ect.

```ts
function addNumbers(num1, num2) {
  return num1 + num2
}

```

## Defining Functions
To fix our `addNumbers` function, we need to type our
parameters `num1 & num2`
```ts
// functions.ts
function addNumbers(num1: number, num2: number) {
  return num1 + num2
}

```

Lastly we also need to type our **return** value
```ts
// functions.ts
function addNumbers(num1: number, num2: number) {
  return num1 + num2
}

```

> **Defined Functions with `const`**

```ts
// functions.ts

export const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`;
```

## Union Type
A **union** type gives us the ability to say that a value can
be one of **several** types. We use the `|` (vertical bar) to
separate each type

```ts
// functions.ts
export const format = (title: string, param: string | number): string => `${title} ${param}`
```

## Specify Functions that return nothing
Sometimes our functions will not return anything, in which case
the return type is a **void** type.
```ts
// functions.ts
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param)) 
}
```

## Returning Promises
When we write async code such as fetching data, we will need a way
to specify that we are returning a promise, so lets see how that looks

```ts
// functions.ts
export const fetchData = (url: string): Promise<string> => Promise.resolve("Data from fetch")
```

## Functions with **rest** parameters
In some cases, we will want to make use of the **rest** param so
that we can take in any number of parameters and coalesce them into
an array. We will create a function called `introduce` to show what
this looks like...
```ts
// functins.ts

function introduce(salutation: string, ...names: str[]): string => {
    return `${salutation} ${names.joint(", ")}`;
  } 
```

## When does TypeScript enforce types?
Answer, **TypeScript** enforces types at compile time**.

## Accounting for Null / Undefined
`?` (optional chaining operator), this can be used to make sure
that some value is defined before we try to use it.

We can combine this with `??` (null coalesce) which basically says if what is on the **left side** of the `??` to then use the value
to the **right side** of the null coalesce.

```ts
interface User {
    firstName: string,
    lastName: string
  }
export function getName(user: User): string {
    return `${user?.firstName ?? "first"} ${user?.lastName ?? "last"}`
  }
```
here we will use `user.{firstName, lastName}` if the values exist, if not substitute with the string `first` and `last` respectively.
