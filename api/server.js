const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const errorHandler = require("./middlewares/errors/errorHandler");


dotenv.config({
  path: "./config/env/config.env"
});

const app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 3000;

app.use("/api", routers);

app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});