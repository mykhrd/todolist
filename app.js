const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.get("/", function (req, res) {

    let today = new Date();
    let currentDay = today.getDay();

    // Get the day of the week, using local time.
    if (currentDay === 6 || currentDay === 0) {
        res.send("yay it's the weekend!");
    } else {
        res.send("boo!");
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
})