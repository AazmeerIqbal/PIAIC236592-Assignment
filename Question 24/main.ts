var string1 = 'apple';
var string2 = 'orange';
var number1 = 42;
var number2 = 30;
var boolean1 = true;
var boolean2 = false;
var fruits = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);

// Tests using the lower case function
console.log("Is string1 in lower case equal to 'apple'? I predict True.");
console.log(string1.toLowerCase() === 'apple');

// Numerical tests
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is boolean1 true and boolean2 false? I predict True.");
console.log(boolean1 && boolean2);

console.log("Is boolean1 true or boolean2 false? I predict True.");
console.log(boolean1 || boolean2);

// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
