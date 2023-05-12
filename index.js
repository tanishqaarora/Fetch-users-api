const express = require('express');
const port = 8080;
const app = express();
const showUsers = require('./routes/showUsers');

app.use('/', showUsers);

app.listen(port, (err) => {
    if(err) {
        console.log("Error in connection: ", err);
    }
    console.log("Server is running on port: ", port);
})
