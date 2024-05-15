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
function aboutPerson(name, add, phone = "N / A") {
  return {
    name,
    add,
    phone,
    bio() {
      return `
                  Hey this is ${this.name} , live in ${this.add} and my phone is ${this.phone}`;
    },
  };
}
const ThakurObj = aboutPerson("Thakur", "Sydney", "0987654321");
console.log(ThakurObj.bio());
const samObj = aboutPerson("Sam", "Melbourne");
console.log(samObj, samObj.bio());
