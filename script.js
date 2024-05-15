// Object

const person = {
  name: "Thakur ",
  add: "Sysdney",
  bio() {
    return `
        Hey this is ${this.name} , live in ${this.add}`;
  },
};
console.log(person.bio());
