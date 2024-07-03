"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userbewertung = void 0;
var userbewertung = /** @class */ (function () {
    function userbewertung(Bewertungsid, kommentar, bewertung) {
        this.Bewertungsid = Bewertungsid;
        this.kommentar = kommentar;
        this.bewertung = bewertung;
        this.produktName = "";
    }
    userbewertung.prototype.setproduktName = function (name) {
        this.produktName = name;
    };
    return userbewertung;
}());
exports.userbewertung = userbewertung;
