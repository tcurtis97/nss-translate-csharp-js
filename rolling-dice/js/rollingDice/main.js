// Put your code here
const dieValue = (min, max) => {
  max = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let result1 = () => {
  if (die1 === 1) {
    console.log("\u2680");
  } else if (die1 === 2) {
    console.log("\u2681");
  } else if (die1 === 3) {
    console.log("\u2682");
  } else if (die1 === 4) {
    console.log("\u2683");
  } else if (die1 === 5) {
    console.log("\u2684");
  } else if (die1 === 6) {
    console.log("\u2685");
  }
};

let result2 = () => {
  if (die2 === 1) {
    console.log("\u2680");
  } else if (die2 === 2) {
    console.log("\u2681");
  } else if (die2 === 3) {
    console.log("\u2682");
  } else if (die2 === 4) {
    console.log("\u2683");
  } else if (die2 === 5) {
    console.log("\u2684");
  } else if (die2 === 6) {
    console.log("\u2685");
  }
};

const Die1 = dieValue();
console.log(Die1);
result1();

const Die2 = dievalue();
console.log(Die2);
result2();
