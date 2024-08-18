console.log('Hello World');
let name = 'Mosh';
console.log(name);

// Const

const interestRate = 0.3;
console.log(interestRate);

// Primitives Types
let name2 = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let lastName = null; // Clear the value

// Reference Types
let person = {
    // This is called an object literal
    name: 'Mosh',
    age: 30
};
person.name = 'Jonh';
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';
console.log(person);

// Array
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);

// Function
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Marry');

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(2)
console.log(number);