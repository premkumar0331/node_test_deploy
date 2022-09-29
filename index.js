const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("welcome to the express");
})

app.listen(3000);

