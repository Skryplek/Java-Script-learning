let players = ["Adam", "Bartek", "Kacper", "Michał", "Tomek"];

for (let i = 0; i < players.length; i++) {
    console.log("Gracz " + (i + 1) + ": " + players[i]);
}

let money = 0;

while (money < 250) {
    console.log("Stan konta: " + money)
    money = money + 50
}

console.log("Masz już 250$");

let number = 0;

while (number <= 10) {
    number++

    if (number === 5) {
        break;
    }

    console.log(number)
}

let attempts = 0;

while (attempts < 10) {
    attempts++


    if (attempts === 6) {
        break;
    }
    
    console.log("Próba: " + attempts)
}

console.log("Koniec prób!")

let attempts2 = 0;

while (attempts2 < 8) {
    attempts2++

    if (attempts2 === 4) {
        break;
    }

    console.log("Sprawdzanie logowania: próba " + attempts2)
}

console.log("Logowanie zakończone")