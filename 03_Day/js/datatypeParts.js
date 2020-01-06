'use strict'
console.info('day 03');

// 1. datatype parts

/* 
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
1. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
1. Check if type of '10' is equal to 10
1. Check if parseInt('9.8') is equal to 10
*/

let firstName = 'Carlos Mario';
let lastName = 'Mora Restrepo';
let country = 'Colombia';
let city = 'Medellin';
let age = 40;
let isMarried = true;
let year = 2020;

console.log(`${firstName} is a ${typeof(firstName)}`);
console.log(`${lastName} is a ${typeof(lastName)}`);
console.log(`${country} is a ${typeof(country)}`);
console.log(`${city} is a ${typeof(city)}`);
console.log(`${age} is a ${typeof(age)}`);
console.log(`isMarried is a ${typeof(isMarried)}`);
console.log(`${year} is a ${typeof(year)}`);

let value = '10';

value === 10 ? console.log('\'10\' is equal to 10 ') : console.log('\'10\' is NOT equal to 10 ');

value == parseInt('9.8') ? console.log('\'9.8\' is equal to 10 ') : console.log('\'9.8\' is NOT equal to 10 ');

console.log(typeof(parseInt('9.8')));