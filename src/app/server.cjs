"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var express_1 = require("express");
var cors_1 = require("cors");
var data_1 = require("./routers/data");
var food_router_1 = require("./routers/food.router");
var user_router_1 = require("./routers/user.router");
var database_config_1 = require("./configs/database.config");
var jsonwebtoken_1 = require("jsonwebtoken");
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.get("/api/foods", function (req, res) {
    res.send(data_1.sample_foods);
});
app.get("/api/foods/search/:searchTerm", function (req, res) {
    var searchTerm = req.params.searchTerm;
    var foods = data_1.sample_foods
        .filter(function (food) { return food.name.toLowerCase()
        .includes(searchTerm.toLowerCase()); });
    res.send(foods);
});
app.get("/api/foods/tag/:tagName", function (req, res) {
    var tagName = req.params.tagName;
    var foods = data_1.sample_foods
        .filter(function (food) { var _a; return (_a = food.tags) === null || _a === void 0 ? void 0 : _a.includes(tagName); });
    res.send(foods);
});
app.get("/api/foods/:foodId", function (req, res) {
    var foodId = req.params.foodId;
    var food = data_1.sample_foods.find(function (food) { return food.id == foodId; });
    res.send(food);
});
app.post("/api/users/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var user = data_1.sample_users.find(function (user) { return user.email === email
        && user.password === password; });
    if (user) {
        res.send(generateTokenReponse(user));
    }
    else {
        var BAD_REQUEST = 400;
        res.status(BAD_REQUEST).send("Username or password is invalid!");
    }
});
var generateTokenReponse = function (user) {
    var token = jsonwebtoken_1.default.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
};
app.use("/api/foods", food_router_1.default);
app.use("/api/users", user_router_1.default);
var port = 5000;
app.listen(port, function () {
    console.log("Website served on http://localhost:" + port);
});
