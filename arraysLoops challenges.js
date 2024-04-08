// //challenge 1

let favFilms = ["Hot Fuzz", "Star Wars: A New Hope", "The Godfather", "Dune Part 1", "Dune Part 2"]
favFilms.unshift('Goodfellas')
favFilms.unshift('LOTR Trilogy')

for (let i=0; i < favFilms.length; i++){
    console.log(favFilms[i])
}

// //Challenge 2
for (i=0;i<6;i++){
    let numGen = (Math.floor(Math.random()*50)+ 1);
    console.log(numGen)
}

// //Challenge 3
let num = [];
    for (let i = 0; i < 10; i++) {
        if (i % 1 == 0){
            num.push(i)
        }
}
console.log(num.reverse())

//Challenge 4
let favMovies = ["Star Wars","Hunger Games","bomb","Fast 7"]
    for (let i = 0; i < favMovies.length; i++){
        console.log(favMovies[i])
        }
if (favMovies[2] == "Ghostbusters"){
    console.log("Yay it's ghostbusters!")
}
else{
    console.log("We want Ghostbusters!")
}

//Challenge 5