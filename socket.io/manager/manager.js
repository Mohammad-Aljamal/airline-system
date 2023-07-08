"use strict";

require('dotenv').config();
const port = process.env.PORT || 3030;
const socket = require('socket.io')
const ioServer = socket(port)


const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

ioServer.on('connection', (newSocket) => {
  console.log(`connected ${newSocket.id}`);



  
setInterval(() => {
  const flightId = uuidv4();
  const pilotName = faker.name.firstName();
  const destination = faker.address.city();

  const flightDetails = {
    event: "new-flight",
    time: new Date(),
    Details: {
      airLine: 'Royal Jordanian Airlines',
      pilotName: pilotName,
      flightID: flightId,
      destination: destination,
    } 
  }

  console.log(`Manager: New Flight with ID: '${flightId})' have been scheduled`);

  ioServer.emit("new-flight", flightDetails);


}, 10000);

newSocket.on('arrived', (payload) => {
  console.log(`Manager: we're greatly thankful for the amazing flight, ${payload.Details.pilotName}`)
});
})


