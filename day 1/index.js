console.log("Cześć!");

let nick = "Adam";

console.log(nick);

let nickname = "Skryplek";
let server = "Eclipse roleplay";

console.log(nickname);
console.log(server);

let players = 50;

players = 75

console.log(players);

let a = 10;
let b= 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log("Gracz: " + nick)
console.log("Liczba graczy: " + players);

players = players + 1;
console.log(players)


let playersnumber = 50;

playersnumber = playersnumber + 5;
playersnumber = playersnumber - 2;

console.log(playersnumber);

let age = 18;

if (age >= 18) {
    console.log("Jesteś pełnoletni!")
} else {
    console.log("Jesteś niepełnoletni!")
}

let money = 50;

if (money >= 500) {
    console.log("Jesteś bogaty!")
} else if (money >= 100) {
    console.log("Masz trochę pieniędzy!")
} else {
    console.log("Musisz zarobić!")
}

let agePeople = 18;

if (agePeople >= 18 && agePeople <= 25) {
    console.log("Możesz wejść na serwer!")
} else {
    console.log("Nie możesz wejść na serwer!")
}

let role = "moderator";

if (role === "admin" || role === "moderator") {
    console.log("Masz dostęp do panelu!")
} else {
    console.log("Nie masz dostępu do panelu.")
}

let roleAge = 19;

if ((role === "admin" || role === "moderator") && roleAge >= 18) {
    console.log("Możesz wejść do panelu!")
} else {
    console.log("Nie możesz wejść do panelu!")
}