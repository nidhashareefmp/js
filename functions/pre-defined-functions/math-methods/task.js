// dice.js

function rollDice() {
  // Math.random() → [0,1)
  // Multiply by 6 → [0,6)
  // Floor + 1 → [1,6]
  return Math.floor(Math.random() * 6) + 1;
}

console.log("You rolled:", rollDice());
