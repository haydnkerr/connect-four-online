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


io.on("connection", (socket) => {
    socket.on("find", (e) => {
        
        if (e.name != null) {
            arr.push(e.name)
            if (arr.length >= 2) {
                let p1obj = {
                    p1name:arr[0],
                    p1value: "red",
                    p1move: ""
                }
                let p2obj = {
                    p2name:arr[1],
                    p2value: "yellow",
                    p2move: ""
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
                playerToUpdate.p1.p1value = color;
            } else if (color === "yellow") {
                playerToUpdate.p2.p2move = moveId;
                playerToUpdate.p2.p2value = color;
            }
            playerToUpdate.sum++;
        } else {
            console.log(`Player ${playerName} not found in playerArray`);
        }
    
        // Emitting to all clients including the sender
        io.emit("playing", { allPlayers: playerArray });
    });
    
    
    


})

app.get('/', (req,res) => {
    return res.sendFile("index.html")
})

server.listen(3000, ()=> {
    console.log("port connected to 3000")
})