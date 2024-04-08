//Challenge 1
let age = 14
    if(age >=17){
        console.log('Yes I can serve you.')
    }
    else if(age <17){
        console.log("You aren't old enough to be served. Sorry.")
    }

//Challenge 2
let topping = `ham`

    if (topping=='ham'){
        console.log(`This is one of my favourite toppings.`)
    }
    else if(topping==`olives`){
        console.log(`I will not eat a pizza with ${topping}.`)
    }
    else 
        console.log(`I don't mind having ${topping} as a topping`)

//Challenge 3
let p = 'four'
    if(p.length <8){
        console.log('Password is too short.')
    }
    else console.log('Password set!')

//Challenge 4
let num = 20
    if(num % 3 === 0 || num % 5 === 0){
        console.log('This number is divisible by 3 or 5')
    }
    else console.log('This number is not divisible by 3 or 5')