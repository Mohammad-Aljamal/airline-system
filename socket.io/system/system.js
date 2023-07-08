"use strict";

require("dotenv").config();
const port = process.env.PORT || 3030;
const socket = require("socket.io");
const ioServer = socket(port);

ioServer.on("connection", (newSocket) => {
  console.log(`connected ${newSocket.id}`);

  newSocket.on("new-flight", flightDetails);
  newSocket.on("Arrived", flightDetails);
});

const airline = ioServer.of('/airline');

airline.on('connection', (newSocket) => {
    console.log(`connected with airline ${newSocket.id}`);
    newSocket.on("took-off", flightDetails);
})


function flightDetails(payload) {
    console.log("Flight ", payload);
  }


