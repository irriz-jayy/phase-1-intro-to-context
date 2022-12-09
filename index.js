//Creates an array with the objects at the specified indices.
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    //Initialize empty arrays for the time events.
    timeInEvents: [],
    timeOutEvents: [],
  };
}

let createEmployeeRecords = function (employeeArrayData) {
  return employeeArrayData.map(function (employeeData) {
    return createEmployeeRecord(employeeData);
  });
};
