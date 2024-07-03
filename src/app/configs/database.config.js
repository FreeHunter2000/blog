"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var dbConnect = function () {
    (0, mongoose_1.connect)("mongodb+srv://webshopAdmin:DDhxpPPZcU8y8Kv7@cluster0.xqqo8pg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {}).then(function () { return console.log("connect successfully"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
module.exports = mongoose;
