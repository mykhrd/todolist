const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();

    // Get the day of the week, using local time.
    if (currentDay === 6 || currentDay === 0) {
        res.sendFile(__dirname + '/weekend.html');
    } else {
        res.sendFile(__dirname + '/weekday.html');
    }
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
})