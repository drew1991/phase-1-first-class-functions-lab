// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (Int) {
    return function (Int1) {
      return Int * Int1;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
};