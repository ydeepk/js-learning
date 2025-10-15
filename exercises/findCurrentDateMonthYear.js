// Returns the day of the month (1-31) for the current date
function findCurrentDate() {
    return new Date().getDate(); // Extracts the day from the current date object
}

// Returns the current month (1-12), adjusted from zero-based (0-11) to one-based
function findCurrentMonth() {
    return new Date().getMonth() + 1; // Months are zero-based, so we add 1
}

// Returns the current year (e.g., 2025)
function findCurrentYear() {
    return new Date().getFullYear(); // Extracts the full year from the current date object
}

// Returns the current date and time in ISO 8601 format as a JSON string
function findCurrentDateToJson() {
    return new Date().toJSON(); // Converts the current date to a JSON string (e.g., "2025-10-15T16:08:00.000Z")
}

// Returns the current date in YYYY-MM-DD format by trimming the JSON string
function findTrimCurrentDateToJson() {
    return new Date().toJSON().slice(0, 10); // Extracts only the date portion (first 10 characters) from the JSON string
}

// Logs the current date in YYYY-MM-DD format using the trimmed JSON method
console.log("Today's date is (using toJSON function trimmed): " + findTrimCurrentDateToJson());

// Logs the full ISO 8601 date and time using the toJSON method
console.log("Today's date is (using toJSON function): " + findCurrentDateToJson());

// Logs the current date in YYYY/MM/DD format using individual functions for year, month, and date
console.log("Today's date is (using individual function): " + findCurrentYear() + "/" + findCurrentMonth() + "/" + findCurrentDate());