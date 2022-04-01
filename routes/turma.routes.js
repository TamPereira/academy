const TurmaController = require('./../controllers/TurmaController')

module.exports = function (app) {
    app.get("/turma", TurmaController.paginaTurma);
    app.get("/turma/new", TurmaController.paginaAdicionarTurma);
    app.post("/turma/create", TurmaController.addTurma);
    app.get("/turmas/edit/:id", TurmaController.paginaEditTurma);
    app.post("turmas/update", TurmaController.editTurma);
    app.post("turmas/remove", TurmaController.deleteTurma);
    
}
