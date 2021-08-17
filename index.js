const express = require('express');
const app = express();

app.get('/random', function(req, res) {
    res.send(""+Math.floor(Math.random()*10000));
});

app.listen(process.env.PORT || 80, function(err) {
    if (err) return console.log(err);

    console.log("listening on port "+(process.env.PORT || 80));
});