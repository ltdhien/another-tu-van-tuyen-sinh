require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let port =  process.env.PORT ||  1772;
app.listen(port, () => {
    console.log("App runing at the port:" + port);
});
