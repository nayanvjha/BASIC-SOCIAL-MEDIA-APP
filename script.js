const { LoadingManager } = require("three");


const btn = document.querySelector(".btn-open");

const form = document.querySelector('.fact-form')

btn.addEventListener('click', function(){

    if (form.classList.contains("hidden")){
        form.classList.remove("hidden");
        btn.textContent = "Close";
    }else{
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
    
});

/*
let votesIntresting = 23;
let votesMindBlowing = 12;
const text = "Lisbon is capital of Portugal";

votesIntresting = votesIntresting + 1;
votesIntresting++;
console.log(votesIntresting);

let totalUpvotes = votesIntresting + votesMindBlowing;
console.log("Upvotes: " + totalUpvotes);

let votesFalse = 4;

const isCorrect = votesFalse < totalUpvotes;

console.log(isCorrect);
*/

// function is used to define a block of code that can be reused it also allows us to pass in data to the block of code

function calcFactAge(year){
    const currentYear = new Date().getFullYear();

    const age = currentYear - year;

   return age;

}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));

let votesIntresting = 23;
let votesMindBlowing = 12;

if (votesIntresting === votesMindBlowing){
    alert("This fact is equally intresting and mind blowing");

}else if (votesIntresting > votesMindBlowing){
    console.log("Intresting fact!");
}