// var firstName = 'John';
// var age = 28
// console.log (firstName);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log (firstName + ' is a ' + age + ' years old ' 
// + job + '. Is he married? ' + isMarried);

// age = 'twenty-eight';
// job = 'engineer';

// alert (firstName + ' is a ' + age + ' years old ' 
// + job + '. Is he married? ' + isMarried);

// var lastName = prompt('what is his last Name?');
// console.log (firstName + ' ' + lastName);


// let firstName = 'Matilda';
// console.log (firstName);
// console.log (firstName);
// console.log (firstName);

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// console.log (myFirstJob);

// console.log (typeof null); 

// const birthYear = 1990;


    // Basic Operators

    // Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarwah = now - 2020;
// console.log (ageJonas, ageSarwah);


// console.log (ageJonas * 2, ageJonas / 10, 2**3);

// // 2 ** 3 means 2 to the power of 3 = 2*2*2

// const firstName = 'Jonas';
// const lastName = 'Schne';
// console.log (firstName + ' ' + lastName);


//     // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25 

// x *=4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// x--; // x = x - 1
// console.log (x);

//     // Comparison operators

// console.log (ageJonas > ageSarwah); // >,<, >=, <=
// console.log (ageSarwah >= 18);

// const isFullAge = ageSarwah >= 18;


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarwah = now - 2020;
// console.log (now - 1991 > now - 2018);

// const jonasName = 'Jonas';
// const birthYear = 1991;
// const year = 2037;
// const job = 'engineer';

// const jonas = "I'm " + jonasName + ", a " + (year - birthYear)
// + " year old " + job;
// console.log (jonas);

// const jonasNew =  `I'm ${jonasName}, a ${year - birthYear}, years old ${job}`;
// console.log (jonasNew);


    // If/Else Statement 

// const age = 4;

// if (age >= 18) {
//     console.log (`Sarah can start her driving licence 🚗`);
// } else {
//     const yearLeft = 18 - age;
//     console.log (`Sarah is too young, wait another ${yearLeft} years`)
// }

// const birthYear = 2002;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//       century = 21;
// }
// console.log (century);

    // Type Conversion and Coercion 

const numberYear = '1991';
console.log (numberYear);
console.log (Number(numberYear));

console.log (String(23));

console.log ('I am ' + 23 + " years old.");

console.log ('23' + '10' - '50');


let n = "1" + 1;
n = n - 1;
console.log (n);

console.log (Boolean(0));
console.log (Boolean(undefined));
console.log (Boolean('jonas'));
console.log (Boolean(''));
console.log (Boolean({}));

const money = 10;
if (money){
    console.log ("Don't spend it all;)");
} else {
    console.log ("Go get a job");
}

let height = 0;

if (height) {
    console.log ('YAY! Height is defined');
} else {
    console.log ('Height is UNDEFINED');
}