let output = document.getElementById("output");
let output2 = document.getElementById("output2");

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
// class Person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     this.key = "qwertyui";
//   }
//   bio() {
//     return `Hey this is ${this.name} lives in ${this.add}`;
//   }
//   nameUpper() {
//     this.name = this.name.toUpperCase();
//   }
// }

// const ThakurObj = new Person("Thakur", "Sydney");
// console.log(ThakurObj);
// ThakurObj.nameUpper();
// console.log(ThakurObj.bio());

// const samObj = new Person("Sam", "Melbourne");
// console.log(samObj.bio());

// Types of progamming paradigms
// 1)Imperative Programming- C, Pascal ,BASIC
// sequence of Instructions

// 2) Declarative Programming - Presentational language - HTML, CSS, SQL
// What to do and doesn't care about how to do

// 3)Procedural Programming- C, Pascal
// function or block for specific task

// 4)Object oriented programming (OOP)- java, C++
// Everything is Object

// 5)Functional programming(FP)-JS
// -Everything is function

// 6)Event-driven programming -JS
// -GUI[graphical user interface]

// 7)Logic programming -Prolog
// -logical rules and constraints

// 8)Parallel programming -Java

// 9)Meta-programming - Ruby, JS(higher order functions, eval)
// -Everything is data and allows others to modify itself *Used to build frameworks

// OOP
// Class is a blueprint defining an object's properties and behaviour.
// class Student {
//   constructor(name, age) {
//     (this.name = "name"), (this.age = age);
//   }
//   displayName() {
//     return this.name;
//   }
// }
// const student = new Student("Thakur", 25);
// const student2 = new Student("Sam", 30);
// const student3 = new Student("dip", 32);
// console.log(student, student2, student3.displayName());

// Key features of OOP
// Encapsulation
// Abstraction
// Inheritance
// polymorphism

// Functional programming paradigms
// Separation of concerns
// Key Features
// Pure Function
// Side Effect
// High Order Function
// Recursion Function

// Recursion
// const factorial = (number) => {
//   if (number === 0) return 1;
//   return number * factorial(number - 1);
// };
// output.innerText = factorial(5);

// JS_ADVANCE
// Intrepreters
// memory heap
// call stack
//  JS Runtime Environment
// Web optimization
// Synchronous and asynchronous programming
// Async and await
async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(data);
}
fetchData();
