const UserController = require('./../controllers/UserController')

module.exports = function (app) {
    app.get("/", UserController.paginaProfessor);
    app.get("/professor/new", UserController.paginaAdicionarProfessor);
    app.post("/professor/create", UserController.addProfessor);
    app.get("/users/edit/:id", UserController.paginaEditUser)
    app.post("/users/update", UserController.editUser)
    app.post("/users/remove/:id", UserController.deleteUser)


    // Aluno
    app.get("/alunos", UserController.paginaAluno);
    app.get("/aluno/new", UserController.paginaAdicionarAluno);
    app.post("/aluno/create", UserController.addAluno);
    app.get("/users/edit/:id", UserController.paginaEditUser);
    app.post("/users/update", UserController.editUser)
    app.post("/users/remove/:id", UserController.deleteUser)



}


    // app.post('/team/:team_id/aluno/create', UserController.addAluno)

