const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let today = new Date();
    let dayOfWeek = new Array(7);

    dayOfWeek[0] = "Sunday";
    dayOfWeek[1] = "Monday";
    dayOfWeek[2] = "Tuesday";
    dayOfWeek[3] = "Wednesday";
    dayOfWeek[4] = "Thursday";
    dayOfWeek[5] = "Friday";
    dayOfWeek[6] = "Saturday";

    let currentDay = dayOfWeek[today.getDay()];
    //let day = "";

    // Get the day of the week, using local time.
    //day = currentDay;

    res.render("list", {
        kindOfDay: currentDay
    });
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
})