const express = require("express")
const app = express()

const path = require("path")
const http = require("http")
const {Server} = require("socket.io")

const server = http.createServer(app)

const io = new Server(server)

app.use(express.static(path.resolve("")))

let arr = []
let playerArray = []
let playerOneArray = []
let playerTwoArray = []


io.on("connection", (socket) => {
    socket.on("find", (e) => {
        
        if (e.name != null) {
            arr.push(e.name)
            if (arr.length >= 2) {
                let p1obj = {
                    p1name:arr[0],
                    p1value: "red",
                    p1move: "",
                    p1arr:[],
                    p1score: 0
                }
                let p2obj = {
                    p2name:arr[1],
                    p2value: "yellow",
                    p2move: "",
                    p2arr: [],
                    p2score: 0
                }

                let obj = {
                    p1:p1obj,
                    p2:p2obj,
                    sum:1
                }

                arr = [];

                playerArray.push(obj)
                console.log(playerArray)
                

                io.emit('find', {allPlayers: playerArray})

            }
        }

        
    }) 

    let onlineWinningArray = [
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    
        [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
        [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
        [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
        [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
        [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
        [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
        [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
    
        [14, 22, 30, 38], [7, 15, 23, 32], [15, 23, 31, 39],
        [3, 11, 19, 27], [2, 10, 18, 26], [10, 18, 26, 34],
        [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
        [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
    
        [21, 15, 9, 3], [28, 22, 16, 10], [22, 16, 10, 4],
        [35, 29, 23, 17], [29, 23, 17, 11], [23, 17, 11, 5],
        [36, 30, 24, 18], [30, 24, 18, 12], [24, 18, 12, 6],
        [37, 31, 25, 19], [31, 25, 19, 13], [38, 32, 26, 20]
    ];


    socket.on("playing", (e) => {
        const playerName = e.playerName;
        const color = e.value;
        const moveId = e.id;
    
        // Find the player object in playerArray
        const playerToUpdate = playerArray.find(player => 
            (player.p1 && player.p1.p1name === playerName) || (player.p2 && player.p2.p2name === playerName)
        );
    

        
        if (playerToUpdate) {
            if (color === "red") {
                playerToUpdate.p1.p1move = moveId;
                playerToUpdate.p1.p1arr.push(moveId);
                playerToUpdate.p2.p2move = '';
            } else if (color === "yellow") {
                playerToUpdate.p2.p2move = moveId;
                playerToUpdate.p2.p2arr.push(moveId);
                playerToUpdate.p1.p1move = '';
            }
    
            playerToUpdate.sum++;
        } else {
            console.log(`Player ${playerName} not found in playerArray`);
        }

        console.log(playerToUpdate.p1.p1arr)
        console.log(playerToUpdate.p2.p2arr)
        for (let i = 0; i < onlineWinningArray.length; i++) {
            let winnerName;
            if (onlineWinningArray[i].every(elem => playerToUpdate.p1.p1arr.includes(elem))) {
                winnerName = playerToUpdate.p1.p1name;
                playerToUpdate.p1.p1score += 1;
                playerOneScore = playerToUpdate.p1.p1score;
                playerTwoScore = playerToUpdate.p2.p2score;
                playerToUpdate.p1.p1arr = []
                playerToUpdate.p2.p2arr = []
                io.emit("winner", {playerWin: winnerName, playerOneScoreUpdate: playerOneScore, playerTwoScoreUpdate: playerTwoScore, allPlayers: playerArray,onlineWinningArray: onlineWinningArray[i] });
            } else if (onlineWinningArray[i].every(elem => playerToUpdate.p2.p2arr.includes(elem))) {
                winnerName = playerToUpdate.p2.p2name;
                playerToUpdate.p2.p2score += 1;
                playerOneScore = playerToUpdate.p1.p1score;
                playerTwoScore = playerToUpdate.p2.p2score;
                playerToUpdate.p1.p1arr = []
                playerToUpdate.p2.p2arr = []
                io.emit("winner", {playerWin: winnerName, playerOneScoreUpdate: playerOneScore, playerTwoScoreUpdate: playerTwoScore, allPlayers: playerArray, onlineWinningArray: onlineWinningArray[i] });
            }
        }
    
        if (playerToUpdate.p1.p1arr.length >= 21 && playerToUpdate.p2.p2arr.length >= 21) {
            winnerName = "draw";
            console.log(winnerName)
            io.emit("winner", {playerWin: winnerName, allPlayers: playerArray});
        }
    
        // Emitting to all clients including the sender
        io.emit("playing", { allPlayers: playerArray });
    });

    socket.on("reset", (e)=> {
        playerOneArray = [];
        playerTwoArray = [];
        playerArray[0].p1.p1arr = [];
        playerArray[0].p2.p2arr = [];
        playerArray[0].p1.p1move = '';
        playerArray[0].p2.p2move = '';
        io.emit("reset", true);
    })
    
    
    
    


})

app.get('/', (req,res) => {
    return res.sendFile("index.html")
})

server.listen(3000, ()=> {
    console.log("port connected to 3000")
})