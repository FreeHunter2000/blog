"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produkt = void 0;
var Produkt = /** @class */ (function () {
    function Produkt(produktId, name, description, amount, imagePath, price, userBewertung) {
        this.produktId = produktId;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.imagePath = imagePath;
        this.price = price;
        this.userBewertung = userBewertung;
    }
    return Produkt;
}());
exports.Produkt = Produkt;
