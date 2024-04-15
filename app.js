// Code a statement that extracts the day of the week from a
// Date object represented by d and assigns it to day, which
// hasn&#39;t been declared beforehand.

var d= new Date();
var day=d.getDay();


// Code a statement that creates a new Date object, converts it
// to a string, and assigns the string to dStr, which hasn&#39;t been
// declared beforehand.

 var dStr= new Date().toString();


 // The day has been extracted from the Date object and
 // assigned to
 // d. The names of the days of the week have been assigned to the
 // array dayNames. Alert the current day with array index.
 
 var dayNames=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
 alert(dayNames)



 // Code a statement that creates a new Date object and
// assigns it to dObj, which hasn&#39;t been declared beforehand.

var dObj= new Date();




// Extract all parts of the Date and Time and assign it to the
// variable which has not been declared beforehand.

var date=new Date();
var year=date.getFullYear();
var month = date.getMonth() + 1; // Adding 1 because months are zero-based
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
console.log("current day and time: ", year,month,day,hours,minutes,seconds)



// Create a Date object for the second day of the second
// month of 1992 and assign it to a variable that hasn&#39;t been
// declared beforehand.
var date2=new Date(1992,1,2)



// How do you change the year of a date in JavaScript?

var date3= new Date();
date3.setFullYear(2003);
console.log(date3)

// Code a single statement that displays in an alert the
// milliseconds that elapsed between the reference date and
// the beginning of 1980.

var reference=new Date();
var beg1980=new Date();
var milliseconds=reference.getTime()-beg1980.getTime();
alert("milliseconds elapsed b/w the reference date and the beginning of 1980: "+milliseconds)