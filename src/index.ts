// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }
// const person = {
//   name: "pin",
//   age: 24,
//   gender: "male",
// };

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jake = new Human("jake", 25, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(jake));

export {};
