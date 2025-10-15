// Calculates the birth year based on the provided age and current year
function findBirthYear(age) {
    const currentYear = new Date().getFullYear(); // Gets the current year (e.g., 2025)
    return currentYear - age; // Subtracts the age from the current year to estimate the birth year
}

// Logs the calculated birth year for a given age (35 in this case)
console.log("Your birth year is " + findBirthYear(35)); // Outputs the birth year, e.g., 1990 if the current year is 2025

// Exports the findBirthYear function for use in other modules
module.exports = findBirthYear;