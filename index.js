// Funksjonen add tar inn to tall, a og b, og returnerer summen av dem.
function add(a, b) {
  return a + b;
}

// Funksjonen subtract tar inn to tall, a og b, og returnerer differansen mellom dem.
function subtract(a, b) {
  return a - b;
}

// Funksjonen multiply tar inn to tall, a og b, og returnerer produktet av dem.
function multiply(a, b) {
  return a * b;
}

// Funksjonen divide tar inn to tall, a og b, og returnerer kvotienten av dem.
// Hvis b er lik 0, kastes en feil med meldingen "Cannot divide by zero".
function divide(a, b) {
  if (b === 0) {
    throw new Error("Kan ikke dele på null");
  }
  return a / b;
}

// Eksempel på bruk:
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 6)); // Output: 12
console.log(divide(10, 2)); // Output: 5
