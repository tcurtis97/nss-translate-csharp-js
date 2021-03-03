// Put your code here

console.log("Welcome to the main module");
const names = [
  "Nashville",
  "Hong Kong",
  "The back yard",
  "Earth",
  "London",
  "The mall",
  "Ryman Auditorium",
  "The Great Wall of China",
];

console.log("All Place Names");

const cities = names.forEach((i) => {
  console.log(i);
});

let filteredNames = names.filter((f) => f.startsWith("The"));

console.log(filteredNames);
