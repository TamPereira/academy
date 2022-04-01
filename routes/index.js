module.exports = function (app) {

    require('./user.routes', './turma.routes')(app)
    
}

