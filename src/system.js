'use strict';

const event = require('../events');

event.on("new-flight",flightDetails);
event.on("took-off",flightDetails);
event.on("Arrived",flightDetails);

function flightDetails (payload) {
    console.log('Flight ', payload);
}