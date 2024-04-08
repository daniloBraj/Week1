console.log('Functions!')

let boilWater = true;

const waterBoiled = () => {
    if (boilWater){
        console.log("The water is boiled.");
        boilWater = false;
    } else {
        console.log("The water is currently boiling.");
        boilWater = true;
    }
}

waterBoiled(); 
waterBoiled();
waterBoiled();

const cashWithdrawal = (amount, accnum) => {

    console.log(`Withdrawing £${amount} from account ${accnum}`)

}
cashWithdrawal(60, 56678904);
cashWithdrawal(15, accnum)




const addUp = (num1, num2) => {
    // explicit return
    return num1 + num2
}   

let result = addUp(3, 3)
console.log(addUp(2, 6))
console.log(result)



const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5)
}

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32
}
console.log(`The temperature is ${getFahrenheit(18)} °F`)


const fahrenheitCelsius = (fahrenheit) => {
    return fahrenheit - 32
}

const getCelsius = (fahrenheit) => {
    return fahrenheitCelsius(fahrenheit) * (5/9)
}
console.log(`The temperature is ${getCelsius(80)}°C`)

//Function Challenge 1
const calcAvg = (mathScore, scienceScore, engScore) => {
    return (mathScore+scienceScore+engScore) / 3
}

console.log(calcAvg(50, 30, 70))

//Function Challenge 2
let calculateAverage = (math, science, english) => {
    let average = (math + science + english) / 3;

    if (average >= 90) {
        console.log('You got an A grade');
    } else if (average >= 80) {
        console.log('You got a B grade');
    } else if (average >= 70) {
        console.log('You got a C grade');
    } else {
        console.log('You did not pass');
    }
}

calculateAverage(90, 70, 80);