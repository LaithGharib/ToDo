let person = {
  name: "Sam",
  age: 24
};

// Dot notation
person.name = "Jimmy!";

// Bracket notation
let selection = "name";
person[selection] = "Finius";

console.log(person.name);
