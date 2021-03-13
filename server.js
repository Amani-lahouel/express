const express = require ('express')
const app = express()
const port = 5000;

app.use(express.static('web-application'));



app.listen(port, (err) => {
    err ? console.log(err) : console.log('the server is running in port 8000')
})




const myLogger = (req, res, next) => {
    let time = new Date();
    if (
        time.getDay() <= 5 &&
        time.getDay() >= 0 &&
        time.getHours() <= 16 &&
        time.getHours() >= 9
    ) {
        next();
    } else res.render("closed.hbs", { time: time.toUTCString() });
};