const express = require("express");
const PORT = process.env.PORT || 8080

const app = express();

app.get("/", (req, res) => {
    res.send("welcome to the express");
})

app.listen(PORT, (req, res) => {
    console.log(`server is running at ${PORT}`)
});

