"use strict";

require("dotenv").config();
const port = process.env.PORT || 3030;
const socket = require("socket.io");
const ioServer = socket(port);


ioServer.on("connection", (newSocket) => {
  console.log(`connected ${newSocket.id}`);

  newSocket.on("new-flight", (payload) => {
    console.log("Flight ", payload);
    ioServer.emit("flight-pilot-status",payload);
  });

  newSocket.on("Arrived", (payload) => {
    console.log("Flight ", payload);
    ioServer.emit('thanku',payload);
  });


});

const airline = ioServer.of('/airline');

airline.on('connection', (newSocket) => {
    console.log(`connected with airline ${newSocket.id}`);
    newSocket.on("took-off", (payload) => {
        console.log("Flight ", payload);
    });
})

