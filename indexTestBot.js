const express = require('express');
const app = express();


app.post('/', (req, res) => {
    console.log(req.body)
    res.send("ok")
})
// Wasn't that easy? Let's create HTTPS server and set the webhook:;

app.listen(8991, function () {
    console.log('Example app listening on port 8991!');
});