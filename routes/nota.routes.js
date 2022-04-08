const NotaController = require('../controllers/NotaController')

module.exports = (app) => {
    app.get("/aluno/:aluno_id/notas", NotaController.paginaNota);
    app.get('/aluno/:aluno_id/notas/create', NotaController.paginaAdicionarNota)
    app.post('/aluno/:aluno_id/notas/create', NotaController.addNota)
    app.get('/notas/edit/:id', NotaController.paginaEditNota)
    app.post('/notas/update/', NotaController.editNota)
    app.post('/notas/remove/:id', NotaController.deleteNota)
}
