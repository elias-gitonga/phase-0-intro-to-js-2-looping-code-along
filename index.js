// Code your solutions in this file

// Exporting writeCards function
function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`); // Fixed template literal syntax
    }
    return messages;
}

// Exporting countDown function
function countDown(startingNumber) { // Added parameter to specify the starting number
    for (let i = startingNumber; i >= 0; i--) { // Changed variable name to 'i' for clarity
        console.log(i);
    }
}

// Exporting functions
module.exports = { writeCards, countDown };

// Example usage
const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "birthday";

const thankYouMessages = writeCards(names, eventName);
console.log(thankYouMessages);

countDown(10); // Call countDown function with starting number
