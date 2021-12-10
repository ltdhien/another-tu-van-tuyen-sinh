require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";
import configEngine from "./config/viewEngine"
import initRoute from "./routes/web"

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//config viewEngine
configEngine(app);

//config web route
initRoute(app);

let port =  process.env.PORT ||  1772;

app.listen(port, () => {
    console.log("App runing at the port: " + port);
});
