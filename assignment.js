// let country = 'Nigeria';
// let continent = 'Africa';
// let population = '200 million';

// console.log (country);
// console.log (continent);
// console.log (population);

// // var isIsland;
// let isIsland = false;

// console.log (isIsland);
// // let language;


// console.log (typeof isIsland);
// console.log (typeof country);
// console.log (typeof continent);
// // console.log (typeof language);

// let language = 'Pidgin';
// console.log (language);

// let javaScriptIsFun = true;
// console.log (javaScriptIsFun);

// javaScriptIsFun = "YES!";
// console.log (javaScriptIsFun);

// console.log (typeof javaScriptIsFun);

// let year;

// console.log (year);
// console.log (typeof year);

// year = 1990;
// console.log (year);
// console.log (typeof year);

    // Let Const and Var Section

// let language = 'Yoruba';

// const country = false;

// country = true;
// console.log (Nigeria);


    // Basic Operators
const language = "Yoruba"
// const population = 200000 ;
// console.log (population / 2);

// // population++;
// console.log (population);

// const finlandPopulation = 6000;

// console.log (finlandPopulation > population);

// console.log (population > finlandPopulation);

// console.log (population / 2 < 33);

// const description = country + " is in " + continent + ", and its "
// + population + " people speak " + language

// console.log (description);

// const description = `${country} is in ${continent} and it's ${population} people speak ${language}`;
// console.log (description);

    // Coding Challenge

// const BMI = mass / height ** 2;

//     Test Data 1
const markMass = 78;
const markHeight = 1.69;

const johnMass= 92;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
console.log (markBMI); 

const johnBMI = johnMass / johnHeight ** 2;
console.log (johnBMI);

// console.log (markBMI > johnBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log (markHigherBMI);


if (markBMI >= johnBMI) {
    console.log (`Mark's BMI (${markBMI} is higher than John's (${johnBMI})`);

} else {
    console.log (`John's BMI (${johnBMI} is higher than Mark's (${markBMI})`);
}

// Test Data 2

const markMassData2 = 95;
const markHeigtData2 = 1.88;

const johnMassData2 = 85;
const johnHeigtData2 = 1.76;

const markBMI2 = markMassData2 / markHeigtData2 ** 2;
console.log (markBMI2);

const johnBMI2 = johnMassData2 / johnHeigtData2 ** 2;
console.log (johnBMI2);

// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log (markHigherBMI2);


if (markBMI2 >= johnBMI2) {
    console.log (`Mark's BMI (${markBMI2} is higher than John's (${johnBMI2})`);

} else {
    console.log (`John's BMI (${johnBMI2} is higher than Mark's (${markBMI2})`);
}

const population = 200;
const country = 'Nigeria';
const continent = 'Africa';
const populationAverage = (33 - population) / 2;

if (population > 33) {
    console.log (`${country}'s population is above average`)
} else {
    console.log (`${country}'s population is ${populationAverage} million`);
}






