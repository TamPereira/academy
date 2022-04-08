const UserController = require('./../controllers/UserController')

module.exports = function (app) {
    app.get("/", UserController.paginaProfessor);
    app.get("/professor/new", UserController.paginaAdicionarProfessor);
    app.post("/professor/create", UserController.addProfessor);
    app.get("/users/edit/:id", UserController.paginaEditUser)
    app.post("/users/update", UserController.editUser)
    app.post("/users/remove/:id", UserController.deleteUser)


    // Aluno
    app.get("/turma/:turma_id/alunos", UserController.paginaAluno);
    app.get("/turma/:turma_id/aluno/create", UserController.paginaAdicionarAluno);
    app.post("/turma/:turma_id/aluno/create", UserController.addAluno);
    app.get("/alunos/edit/:id", UserController.paginaEditAluno);
    app.post("/alunos/update", UserController.editAluno)
    app.post("/users/remove/:id", UserController.deleteUser)



}


