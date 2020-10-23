// secretGist name: lhl-katas--talking-calendar.js
// Given a date as a string in 'YYYY/MM/DD' format, produce a human readable date with pattern 'January 1st, 2000'

const talkingCalendar = function(date) {
  // Parse the date string's formatted yyyy/mm/dd by index to year, month and day
  const year = date.slice(0,4);
  
  // Parse month, convert to number, use monthNames array to convert to monthName
  const month = Number(date.slice(5, 7));
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", 
                      "August", "September", "October", "November", "December"];
  const monthName = monthNames[month-1]

  // Parse day, convert to number, use 'numSuffix' function to append appropriate suffix
  const day = numSuffix(date.slice(8, 10));

  return`${monthName} ${day}, ${year}`
};


// Returns number (string or number format) with suffix as listed below
const numSuffix = function(number) {  
  // 0th 1st 2nd 3rd 4th 5th... 11th 12th... 21st 22nd 23rd 24th 25th...
  number = Number(number)

  if (number >= 4 && number <= 20) {
    number += "th";
  } else {
    let lastDigit = String(number)[String(number).length - 1]
    if (lastDigit >= 4 && lastDigit <= 9 || lastDigit == 0) {
      number += "th";
    } else if (lastDigit == 1) {
      number += "st";
    } else if (lastDigit == 2) {
      number += "nd";
    } else if (lastDigit == 3) {
      number += "rd";
    };
  }
  return number;
}




console.log(talkingCalendar('1111-01-03'))

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
