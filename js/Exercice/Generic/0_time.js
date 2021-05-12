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

//</editor-fold>

//<editor-fold desc="Body">
document.write('Today is : ' + days[ne_date.getDay()] + '<br>');
document.write('Current time is : ' + current_time);

//</editor-fold>

