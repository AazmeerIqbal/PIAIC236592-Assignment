var placesToVisit = ["Japan", "Paris", "England", "America", "Germany"];

console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order 
console.log("Alphabetical Order:", [...placesToVisit].sort());

// original order
console.log("Original Order After Sorting:", placesToVisit);

// Print the array in reverse alphabetical order 
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// original order
console.log("Original Order After Reversing:", placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order After Re-reversing:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order After Sorting:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order After Sorting:", placesToVisit);
