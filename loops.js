/// 'ctrl + c' kills loop

let favDrinks = [
    'Classic Coke',
    'Tea',
    'Orange juice'
    ]

//initial ex; condition; increment/decrement ex
for (let i = 2; i < favDrinks.length; i++){
    console.log(favDrinks[i])
}

let multilpesOfTwo = [];

for (let i = 0; i < 30; i++) {
    if(i % 2 == 0 && i % 3 == 0){
        multilpesOfTwo.push(i)
    }
}

console.log(`numbers divisible by 2 and 3 are ${multilpesOfTwo}`)


//age++ adds 1 to the age to loop. once it gets to 18 age<18 is no longer true. stops the while loop
// stops the while loop and goes to the last console log to finish the loop
let age = 15
while (age < 18){
    console.log(`You are a child at ${age}. `)
    age++
}
console.log(`you are an adult at ${age}`)


let cards = ["diamond", "spade", "heart", "club"]       //Array containing types of cards
let currentCard = "club"                                //Starting card

                                                        //Loop until a spade is drawn
while (currentCard != "spade") {
    console.log(currentCard);                           //Output the current card
    currentCard = cards[Math.floor(Math.random() * 4)]; //Randomly choose a card from the array
                                                        //use math floor to round down to allow 0 - 3 for each array
    console.log(currentCard)                            //loop stops once a spade is drawn
}