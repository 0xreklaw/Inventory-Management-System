const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
    res.json({ msg: "Inventory Management Server" })
})

const accountsRoutes = require('./accounts/routes')
app.use('/accounts', accountsRoutes);

const companiesRoutes = require('./companies/routes')
app.use('/companies', companiesRoutes);

const PORT = 9000;
app.listen(PORT, console.log(`Inventory Management Server Running on Port ${PORT}`))
