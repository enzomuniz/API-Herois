const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const heroisRoutes = require('./routes/herois')
const viloesRoutes = require('./routes/viloes')
const batalhaRoutes = require('./routes/batalha')

const app = express();
app.use(bodyParser.json());
app.use('/viloes', viloesRoutes)
app.use('/herois', heroisRoutes)
app.use('/batalha', batalhaRoutes)

app.listen(port, () => {
    console.log("Servidor express rodando!");
});



