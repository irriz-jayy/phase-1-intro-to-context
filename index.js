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
//Creates function that takes array data in above function as arguement.
let createEmployeeRecords = function (employeeArrayData) {
  //creates a replica array from employee records with employee data only.
  return employeeArrayData.map(function (employeeData) {
    return createEmployeeRecord(employeeData);
  });
};

//Create time events
//Time in
let createTimeInEvent = function (employee, dateStamp) {
  //create date
  let [date, hour] = dateStamp.split(" ");
  //Push to hour array
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    //left out to be targeted elsewhere
    date,
  });
  //Returns array with time added
  return employee;
};

//Timeout
let createTimeOutEvent = function (employee, dateStamp) {
  //create date
  let [date, hour] = dateStamp.split(" ");
  //Push to hour array
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    //left out to be targeted elsewhere
    date,
  });
  return employee;
};
