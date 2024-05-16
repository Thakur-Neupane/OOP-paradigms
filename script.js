// Object

// const person = {
//   name: "Thakur ",
//   add: "Sysdney",
//   bio() {
//     return `
//         Hey this is ${this.name} , live in ${this.add}`;
//   },
// };
// console.log(person.bio());

// FACTORY FUNCTION
// function aboutPerson(name, add, phone = "N / A") {
//   return {
//     name,
//     add,
//     phone,
//     bio() {
//       return `
//                   Hey this is ${this.name} , live in ${this.add} and my phone is ${this.phone}`;
//     },
//   };
// }
// const ThakurObj = aboutPerson("Thakur", "Sydney", "0987654321");
// console.log(ThakurObj.bio());
// const samObj = aboutPerson("Sam", "Melbourne");
// console.log(samObj, samObj.bio());

// CONSTRUCTOR
// function aboutPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }
// aboutPerson.prototype.bio = function () {
//   return `Hey this is ${this.name} lives in ${this.add}`;
// };
// const ThakurObj = new aboutPerson("Thakur", "Sydney");
// console.log(ThakurObj.bio());

// class based oop
class Person {
  constructor(name, add) {
    this.name = name;
    this.add = add;
    this.key = "qwertyui";
  }
  bio() {
    return `Hey this is ${this.name} lives in ${this.add}`;
  }
  nameUpper() {
    this.name = this.name.toUpperCase();
  }
}

const ThakurObj = new Person("Thakur", "Sydney");
console.log(ThakurObj);
ThakurObj.nameUpper();
console.log(ThakurObj.bio());

const samObj = new Person("Sam", "Melbourne");
console.log(samObj.bio());
