require("dotenv").config();
import bodyParser from "body-parser";
import express from "express";

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

