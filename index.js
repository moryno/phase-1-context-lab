/* Your Code Here */
const createEmployeeRecord = (array) => {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (arrays) => {
    return arrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp){
   
    const [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
function createTimeOutEvent(dateStamp){
   
    const [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(dateObj){
    const timeIn = this.timeInEvents.find( timeInEvent => timeInEvent.date === dateObj)
    const timeOut = this.timeOutEvents.find( timeOutEvent => timeOutEvent.date === dateObj)
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked
}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour
}

function findEmployeeByFirstName(array,firstName){
   return array.find(record => record.firstName === firstName )
}

function calculatePayroll(employeesRecord){
   return employeesRecord.reduce((accumulator, record) => accumulator + allWagesFor.call(record), 0)
}






/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function (){
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

