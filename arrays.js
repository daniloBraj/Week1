// //Easy way to see an array is when there are square brackets
let coffeeOrder = [
    "Danilo - english tea",
    "Stefan - latte",
    "Jake - flat white"
]
// //when using squarebrackets you can choose which value you want to display
//counting starts from 0
console.log(coffeeOrder.length)

let shopList = [
    "Apples",
    "Bananas",
    "Milk",
    "Raspberries"
]
console.log(shopList)
//push will push a new item to an array
shopList.push("Chewing Gum")
console.log(shopList)

// //Array methods 
// //Challenge 1
const toDolist = [
    "Make bed",
    "Shower",
    "Brush teeth",
    "Put clothes on",
    "Eat breakfast"
]
console.log(toDolist)
toDolist.pop();
console.log(toDolist)
toDolist.unshift("Wake up")
console.log(toDolist)
toDolist.shift();
console.log(toDolist)

//Challenge 2
let numbers = ['a1', 'b2', 'c3', 'd4'];
    const newarray = numbers.map((number, index, array) => {
        return number
    })

console.log(newarray)

// //Challenge 3
// let num = [
//     44,
//     11,
//     22,
//     44,
//     66,
//     99,
//     55
// ]
// console.log(num.sort())
// console.log(num.indexOf(66))

// const alph = [
//     "Zonk",
//     "Donk",
//     "Plonk",
//     "Ronk",
//     "Honk",
//     "lonk"
// ]

// console.log(alph.sort())
// alph.sort
// console.log(alph.reverse())

// //Challenge 4

// const namba=[
//     5,
//     11,
//     8,
//     0,
//     11,
//     34,
//     6,
//     1
// ]

// console.log(namba.reduce())