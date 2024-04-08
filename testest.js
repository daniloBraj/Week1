const printNumbersAndReturnArray = () => {
    let numbersArray = [];

    for (let i = 9; i >= 0; i--) {
        console.log(i);
        numbersArray.push(i);
    }

    return numbersArray;
};

let numbers = printNumbersAndReturnArray();

console.log("Array containing numbers 9 to 0:", numbers);