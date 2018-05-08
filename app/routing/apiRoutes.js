var path = require("path");
var cast = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.post("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};

function new_pers(nam,pic,qi,qii,qiii,qiv,qv,qvi,qvii,qviii,qix,qx){
    this.name = nam;
    this.picture = pic;
    this.scores = [qi, qii, qiii, qiv, qv, qvi, qvii, qviii, qix, qx];
}