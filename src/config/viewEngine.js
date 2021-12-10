import express from "express";

//app là express app có trong code server
let configEngine = (app) => {
    //sử dụng các express.static để lấy các đường link động
    app.use(express.static("./src/public"));
    //dùng view engine là ejs
    app.set("view engine", "ejs");
    //thư mục lấy view engine
    app.set("views", "./src/views");
}

module.exports = configEngine;