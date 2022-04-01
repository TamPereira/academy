const UserController = require('./../controllers/UserController')

module.exports = function (app) {
    app.get("/", UserController.paginaProfessor);
    app.get("/professor/new", UserController.paginaAdicionarUser);
    app.post("/professor/create", UserController.addProfessor);
    app.get("/users/edit/:id", UserController.paginaEditUser)
    app.post("/users/update", UserController.editUser)
    app.post("/users/remove", UserController.deleteUser)
}


