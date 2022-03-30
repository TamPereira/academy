module.exports = function (app) {
    app.get("/", (req, res) => res.render("user"));

    require('./user.routes')(app)
}

