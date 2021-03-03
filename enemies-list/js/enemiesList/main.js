// Put your code here

const enemies = [
  {
    FirstName: "Joshua",
    LastName: "Flowers",
    Offenses: {
      1: "Being a jerk to me in elementary school",
      2: "Not being nice to me in elementary school",
    },
    IsReallyHated: true,
  },
  {
    FirstName: "Darth",
    LastName: "Vader",
    Offenses: {
      1: "Cut off Luke's hand",
      2: "Murdered all those kids",
      3: "Unkind management practices",
    },
    IsReallyHated: false,
  },
  {
    FirstName: "Betty",
    LastName: " Rudelady",
    Offenses: {
      1: "Phone calls in the theater",
      2: "Phone calls on the bus",
      3: "Phone calls in line at the grocery store",
      4: "Poor conversationalist",
    },
    IsReallyHated: true,
  },
  {
    FirstName: "Leon",
    LastName: "Peck",
    Offenses: {
      1: "Keeps giving me a hotplate",
    },
    IsReallyHated: false,
  },
];

console.log(enemies);

for (const e of enemies) {
  if (e.IsReallyHated === true) {
    console.log(`${e.FirstName} ${e.LastName} Really, really dislike!`);
  } else {
    console.log(`${e.FirstName} ${e.LastName}`);
  }
}
