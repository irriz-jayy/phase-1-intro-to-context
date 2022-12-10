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

//Calculating hours worked
let hoursWorkedOnDate = function (employee, workedHours) {
  //Targetting employee and the time in array
  let inEvent = employee.timeInEvents.find(function (a) {
    //Returning as hours worked
    return a.date === workedHours;
  });

  //Targetting employee and time out arra
  let outEvent = employee.timeOutEvents.find(function (a) {
    //Returning as hours worked
    return a.date === workedHours;
  });

  //Calculates difference and returns total hours worked
  return (outEvent.hour - inEvent.hour) / 100;
};

//Calculating wages on certain day
let wagesEarnedOnDate = function (employee, hoursWorked) {
  //Takes hours worked on that date multiply by pay
  let employeeWage =
    hoursWorkedOnDate(employee, hoursWorked) * employee.payPerHour;
  //Change to number
  return parseFloat(employeeWage.toString());
};

//Get the dates first
let allWagesFor = function (employee) {
  let requiredDates = employee.timeInEvents.map(function (e) {
    return e.date;
  });

  //Calculate amount to be paid
  let paidAmount = requiredDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate(employee, d);
  }, 0);

  return paidAmount;
};
