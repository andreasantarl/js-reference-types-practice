'use strict';

let mbta = {
  redLineStops: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  blueLineStops: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  orangeLineStops: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

let startLine, startStation, endLine, endStation;
let startIndex, endIndex;
let parkStreetIndex;
let numStops;

console.log ("Please define your 'startStation', 'startLine', 'endStation', and 'endLine' in the terminal");
startStation = 'Haymarket';
startLine = 'orangeLineStops';
endStation = 'Government Center';
endLine = 'blueLineStops';

startIndex = mbta[startLine].indexOf(startStation);
endIndex = mbta[endLine].indexOf(endStation);

if (mbta[startLine] === 'redLineStops' || mbta[startLine] === 'blueLineStops'){
  parkStreetIndex = 2;
} else {
  parkStreetIndex = 3;
}

if (endLine !== startLine) {
  numStops = Math.abs( (startIndex - parkStreetIndex) + (parkStreetIndex - endIndex) ) + 1;
} else {
  numStops = Math.abs (startIndex - endIndex);
}

console.log ("You have " + numStops + " stops to ride on your trip" );

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
