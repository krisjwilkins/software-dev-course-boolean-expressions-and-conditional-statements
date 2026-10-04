/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasWater = true;
const hasBearSpray = true;
const hasBlockedPath = true;
const hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  if (hasWater && hasBearSpray) {
  console.log("You have enough water for your journey and bear spray as an added layer of protection.");
} else if (!hasWater && hasBearSpray) {
  console.log("You have bear spray as an added layer of protection, but you don't have enough water.");
} else if (hasWater) {
  console.log("You have enough water for your journey, but you do not have bear spray, so be very careful.");
} else {
  console.log("You don't have water or bear spray. The mountains are too dangerous. You should have stayed home.");
}
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  if (hasBlockedPath && hasCompass) {
    console.log("The main road into the village is blocked by a fallen tree, but you use your compass to find an alternate route that leads you safely inside.");
  } else if (hasBlockedPath && !hasCompass) {
    console.log("The main road into the village is blocked by a fallen tree, and you don't have a compass to find an alternate route.");
  } else if (!hasBlockedPath) {
    console.log("The road is clear, so you easily make your way into the village.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}



/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/