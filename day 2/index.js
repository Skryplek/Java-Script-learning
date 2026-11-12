function serverInfo() {
    console.log("Witaj na Eclipse Roleplay")
}

serverInfo();
serverInfo()

function playerName(nick) {
    console.log("Witaj! " + nick)
}

playerName("Kowalski");
playerName("Nowak")
playerName("Wiśniewski")

function calculateMoney(a, b) {
    return a + b;
}

let result = calculateMoney(100, 50);

console.log(result);

function calculatePrice(price, discount) {
    return price + discount;
}

let finalPrice =  calculatePrice(200, 50);
console.log(finalPrice)

function checkLevel(level) {
    if (level >= 10) {
        return "Odblokowano dostęp!";
    }   else {
        return "Musisz zdobyć więcej poziomów!";
    }      
}

let result2 = checkLevel(15);
console.log(result2);

let result3 = checkLevel(5);
console.log(result3)

let players = ["Kowalski", "Nowak", "Wiśniewski"];
console.log(players);
console.log(players[0]);
console.log(players[2]);

let players2 = ["Kowalski", "Nowak"];

players2.push("Wiśniewski");
players2.push("Adamski");
console.log(players2);

let players3 = ["Kowalski", "Nowak", "Wiśniewski", "Adamski"];

players3.pop();
console.log(players3)

let players4 = ["Kowalski", "Nowak", "Wiśniewski", "Adamski"];
players4.push("Zieliński");
console.log(players4.length);

let players5 = ["Adam", "Bartek", "Michał"]; {
    for (let i = 0; i < players.length; i++)
    console.log(players5[i]);
}

let car = ["BMW", "Audi", "Mercedes"]; {
    for (let i = 0; i < car.length; i++)
    console.log(car[i]);
}