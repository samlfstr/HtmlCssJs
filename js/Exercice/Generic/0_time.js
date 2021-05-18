// write the date and time
/*
Sample Output : Today is : Tuesday
Current time is : 10 PM : 30 : 38
*/

//<editor-fold desc="Vars">
let days=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thirsday',
    'Friday',
    'Saturday'
];

let ne_date = new Date();
let current_time = ne_date.toLocaleTimeString('US');
let current_date = ne_date.toLocaleDateString('TR');

//</editor-fold>

//<editor-fold desc="Body">
document.write('Numerical date : ' + current_date + '<br>');
document.write('Today is : ' + days[ne_date.getDay()] + '<br>');
document.write('Current time is : ' + current_time);

//</editor-fold>


/*Explanation :
* First I created new instance of the Date() class
* Then realized that it's giving the days index instead of string so
* I created a days array that stores names of the day and using [] operator
* I passed the day index value to the array that gave me the rigth day of the week
* After creating the days array I wondered how to show right local date according to time zones
* Then I found the toLocalTimeString method that attaches directly to the Date() class's instance
*/
