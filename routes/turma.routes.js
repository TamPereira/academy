const TurmaController = require('./../controllers/TurmaController')

module.exports = (app) => {
    app.get("/professor/:professor_id/turmas", TurmaController.paginaTurma);
    app.get('/professor/:professor_id/turmas/create', TurmaController.paginaAdicionarTurma)
    app.post('/professor/:professor_id/turmas/create', TurmaController.addTurma)
    app.get('/turmas/edit/:id', TurmaController.paginaEditTurma)
    app.post('/turmas/update/', TurmaController.editTurma)
    app.post('/turmas/remove/:id', TurmaController.deleteTurma)
}
