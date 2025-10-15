// Return a greeting message for the given name
function greet(name) {
    return "Hello, "+name+"!";
}

// Export the greet function for use in other modules
module.exports = greet;

// Log a greeting message for the name 'Deepak'
console.log(greet('Deepak'));