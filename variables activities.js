//Activity 1
let name = 'Dan'
let age = 21
let favColour = 'Purple'

let sentence = `My name is ${name} I am ${age} years old. My favourite colour is ${favColour}.`

console.log(sentence)

//Activity 2
let breakfast = 'cereal'
let lunch = 'toast'
let dinner = 'chicken burgers'

let today = `For breakfast today I had ${breakfast}. For lunch I had ${lunch}. For dinner I had ${dinner}.`

breakfast = 'porridge'
lunch = 'soup'
dinner = 'pizza'

let tomorrow = `Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`
console.log(today)
console.log(tomorrow)

//Activity 3
let nextBirthday = new Date('2024-05-28');
let dateToday = new Date();

//difference between birthday and todasy date into seconds
let difference = (nextBirthday - dateToday)

//seconds into days
let decimal = (difference / (1000 * 3600 * 24))

//mathfloor to round down how many whole days it is till next birthday
console.log('Days until my next birthday:', Math.floor(decimal))

//Activity 4
const space1 = 'x'
const space2 = 'o'
const space3 = 'x'
const space4 = 'o'
const space5 = 'x'
const space6 = 'o'
const space7 = 'x'
const space8 = 'o'
const space9 = 'x'

let gridThing = `${space1}|${space2}|${space3}\n-----\n${space4}|${space5}|${space6}\n-----\n${space7}|${space8}|${space9}`

console.log(gridThing)