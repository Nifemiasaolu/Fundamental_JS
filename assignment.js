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
// const language = "Yoruba"
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

    // Coding Challenge 1

// const BMI = mass / height ** 2;

//     Test Data 1
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass= 92;
// const johnHeight = 1.88;

// const markBMI = markMass / markHeight ** 2;
// console.log (markBMI); 

// const johnBMI = johnMass / johnHeight ** 2;
// console.log (johnBMI);

// console.log (markBMI > johnBMI);
// const markHigherBMI = markBMI > johnBMI;
// console.log (markHigherBMI);


// if (markBMI >= johnBMI) {
//     console.log (`Mark's BMI (${markBMI} is higher than John's (${johnBMI})`);

// } else {
//     console.log (`John's BMI (${johnBMI} is higher than Mark's (${markBMI})`);
// }

// // Test Data 2

// const markMassData2 = 95;
// const markHeigtData2 = 1.88;

// const johnMassData2 = 85;
// const johnHeigtData2 = 1.76;

// const markBMI2 = markMassData2 / markHeigtData2 ** 2;
// console.log (markBMI2);

// const johnBMI2 = johnMassData2 / johnHeigtData2 ** 2;
// console.log (johnBMI2);

// const markHigherBMI2 = markBMI2 > johnBMI2;
// console.log (markHigherBMI2);


// if (markBMI2 >= johnBMI2) {
//     console.log (`Mark's BMI (${markBMI2} is higher than John's (${johnBMI2})`);

// } else {
//     console.log (`John's BMI (${johnBMI2} is higher than Mark's (${markBMI2})`);
// }


    // Code Challenge 2

// const population = 200;
const country = 'Nigeria';
const isIsland = false;
// const continent = 'Africa';
// const populationAverage = (33 - population) / 2;

// if (population > 33) {
//     console.log (`${country}'s population is above average`)
// } else {
//     console.log (`${country}'s population is ${populationAverage} million`);
// }


// const numNeighbours = Number (
//     prompt ("How many neighbour countries does your country have?")
//     );

// if (numNeighbours === 1) {
//     console.log ("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log ("More than 1 border");
// } else {
//     console.log ("No border");
// }


    // Logical Operator 

// const speaksEnglish = true;
// const lessThan50People = false;
// const isNotAnIsland = true;

// if (speaksEnglish && lessThan50People && isNotAnIsland) {
//     console.log ("Hurray!! This is the perfect country for you Sarah.")
// } else {
//     console.log ("Nah girl! It ain't your typeof country")
// }


// if (language === "Yoruba" && population > 50 && !isIsland) {
//     console.log (`You should live in ${country}`);
// } else {
//     console.log (`${country} does not meet your criteria`);
// }


    // Code challenge 3

// const dolphinAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;

// if (dolphinAverageScore > koalasAverageScore) {
//     console.log (`Dolphin Team is the winner of the competition`);
// } else if (dolphinAverageScore === koalasAverageScore) {
//     console.log (`The game is a tie!`)
// } else {
//     console.log (`Koalas Team emerges as the winner of the competition`);
// } 

    // Bonus 1 

// const dolphinAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;
// const minimumScore = 100;

// if ((dolphinAverageScore > koalasAverageScore) && (dolphinAverageScore >= minimumScore)) {
//     console.log (`Dolphin Team are the champion!`)
// } else if ((koalasAverageScore > dolphinAverageScore) && (koalasAverageScore >= minimumScore)) {
//     console.log (`Koalas Team are the deserving Champion`)
// } else {
//     console.log (`There is no winner. It's a tie!`)
// }

    // Bonus 2

// const dolphinAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 106) / 3;
// const minimumScore = 100;
// console.log (dolphinAverageScore, koalasAverageScore);

// if ((dolphinAverageScore > koalasAverageScore) && (dolphinAverageScore >= minimumScore)) {
//     console.log (`Dolphin Team are the champion!`)
// } else if ((dolphinAverageScore === koalasAverageScore) && dolphinAverageScore >= 100 && koalasAverageScore >= 100) {
//     console.log (`Both wins the trophy!`)
// } else {
//     console.log (`Koalas Team are the deserving Champion`)
// }
 

    // Switch Statement 

// const language = 'english';

// switch (language) {
//     case 'chinese':
//         console.log (`MOST number of native speakers`);
//         break;
//     case 'spanish':
//         console.log (`2nd place in number of native speakers`);
//         break;
//     case 'english':
//         console.log (`3rd place`);
//         break;
//     case 'hindi':
//         console.log (`Number 4`);
//         break;
//     case 'arabic':
//         console.log (`5th most spoken language`);
//         break;
//     default:
//         console.log (`Great language too :D`)
// }



        // The Conditional (Ternary) Operator 

//  const giftway = (population > 33) ?  `${country}'s population is above average`:
//                         `${country}'s population is below average`;
//                         console.log (giftway);

const population = 130;
console.log (
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`)


        // Code Challenge 4

const bill = 40;

// const tip = 0.15 * bill;
// const totalValue = tip + bill;

// const amount = (bill >= 50 && bill <= 300) ? 
//     `The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${tip + bill}` :
//     `The bill was ${bill}, the tip was ${0.2 * bill}, and the total value ${tip + bill}`;
// console.log (amount);


const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

