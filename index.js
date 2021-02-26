// Code your solution in this file!

//Return First Two Drivers
const drivers = ["Sally", "Bob", "Freddy", "Claudia"]

const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

//Return Last Two Drivers
//4 doesn't exist but we're stopping before "4" which is index 3
const returnLastTwoDrivers = function (array) {
    return array.slice(2, 4);
}

//Selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Fair Doubler
function fareDoubler(fare) {
    return fare * 2;
}

// Fair Tripler
function fareTripler(fare) {
    return fare * 3;
}

// Create Fare Multiplier
function createFareMultiplier(integer) {
    return function busFare(fare) {
        return (fare * integer);
    }
}

//Select Different Drivers
function selectDifferentDrivers (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}
