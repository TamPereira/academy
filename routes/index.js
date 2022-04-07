module.exports = function (app) {

    require('./user.routes')(app)
    require('./turma.routes')(app)

}

