const person = {
    name: "Danilo",
    age: 21,
    greeting() {
        return `Hi I'm ${this.name}`
    }
}

person.bands = [
    "System of a Down",
    "Charli XCX",
    "Paramore",
    "Massive Attack",
]

console.log(person);
//

// const alarmClock = {
//     weekdayAlarm: "Wake up at 7 AM",
//     weekendAlarm: "No alarm set"
// }
// let day = "Sunday"
// let alarm
//     if(day == "Saturday" || day == "Sunday"){
//     alarm = alarmClock.weekendAlarm
// }
//     else{
//     alarm = alarmClock.weekdayAlarm
// }
// console.log(alarm)


//