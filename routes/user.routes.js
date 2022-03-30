const UserController = require('./../controllers/UserController')

module.exports = function (app) {
    app.get("/user", UserController.paginaUser);
    app.get("/users/new", UserController.paginaAdicionarUser);
    app.post("/users/create", UserController.addUser);
    app.get("/users/edit/:id", UserController.paginaEditUser)
    app.post("/users/update", UserController.editUser)
    app.post("/users/remove", UserController.deleteUser)
}


