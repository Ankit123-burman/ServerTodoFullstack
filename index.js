const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./Routes/todoRoutes");

const app = express();
const PORT = process.env.PORT | 5000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


// Routes
app.use(routes);
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(PORT, () => console.log("Server running on port " + PORT));