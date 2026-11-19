let playersMinecraft = ["Adam", "Admin", "Bartek", "Moderator", "Kacper", "Tomek"];

for (let i = 0; i < playersMinecraft.length; i++) {

    if (playersMinecraft[i] === "Admin" || playersMinecraft[i] === "Moderator") {
        continue;
    }

    console.log(playersMinecraft[i])
}

let playersFivem = ["Kacper", "Adam", "Admin", "Bartek", "Tomek"];

for (let i = 0; i < playersFivem.length; i++) {

    if (playersFivem[i] === "Admin" ) {
        continue;
    }

    console.log(playersFivem[i])
}

let playersFortnite = ["Kacper", "Offline", "Adam", "Offline", "Bartek", "Tomek"];

for (let i = 0; i < playersFortnite.length; i++) {

    if (playersFortnite[i] === "Offline") {
        continue;
    }

    console.log(playersFortnite[i])
}

let server = {
    name: "Fivem Roleplay",
    playersServer: 64,
    status: "Online"
}

console.log(server.name)
console.log(server.playersServer)
console.log(server.status)

server.owner = "Kacper";

console.log(server.owner)

let player = {
    nick: "Kacper",
    age: 17,
    rank: "Moderator",
    hours: 85,
    online: "Tak"
}

console.log(player.nick)
console.log(player.age)
console.log(player.rank)
console.log(player.hours)
console.log(player.online)

player.rank = "Admin";

console.log(player.rank)

let playerGta = {
    nick: "Kacper",
    rank: "Admin"
}

if (playerGta.rank === "Admin") {
    console.log("Masz uprawnienia administratora")
} else {
    console.log("Nie masz uprawniń administratora")
}

let serverFivem = {
    name: "NightRP",
    player: 128, 
    status: "Online"
}

if (serverFivem.name === "NightRP") {
    console.log("Znalazłeś dobry serwer")
} else {
    console.log("Znalazłeś zły serwer")
}

if (serverFivem.status === "Online") {
    console.log("Serwer jest włączony")
} else {
    console.log("Serwer jest wyłączony")
}

let playersOn = [
    {
        nick: "Kacper",
        rank: "Admin"
    },
    {
        nick: "Adam",
        rank: "Moderator"
    },
    {
        nick: "Bartek",
        rank: "Gracz"
    }
]

for (let i = 0; i < playersOn.length; i++) {
    console.log(playersOn[i].nick)
    console.log(playersOn[i].rank)
}