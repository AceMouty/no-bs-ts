function addNumbers(num1: number, num2: number): number {
  return num1 + num2
}

export default addNumbers;

export const addStrings = (str1: string, str2: string): string => `${str1} ${str2}`;
export const format = (title: string, param: string | number): string => `${title} ${param}`
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param)) 
}

export const fetchData = (): Promise<string> => Promise.resolve("Data from fetch")
export function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(", ")}`;
  }

interface User {
    firstName: string,
    lastName: string
 };

export function getName(user: User): string {
    return `${user?.firstName ?? "first"} ${user?.lastName ?? "last"}`
  }
