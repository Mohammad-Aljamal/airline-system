"use strict";

const event = require("../events");
const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

require('./pilot');
require('./system');

setInterval(() => {
  const flightId = uuidv4();
  const pilotName = faker.person.fullName();
  const destination = faker.location.city();

  const flightDetails = {
    event: "new-flight",
    time: faker.date.future(),
    Details: {
      airLine: 'Royal Jordanian Airlines',
      pilotName: pilotName,
      flightID: flightId,
      destination: destination,
    } 
  }

  console.log(`Manager: New Flight with ID: '${flightId}' have been scheduled`);

  event.emit("new-flight", flightDetails);


}, 10000);

event.on('thanku', (payload) => {
  console.log(`Manager: we're greatly thankful for the amazing flight, ${payload.Details.pilotName}`)
});
