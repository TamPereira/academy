const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/UserController')


router.get("/users", UserController.paginaUser);
router.get("/users/new", UserController.paginaAdicionarUser);
router.post("/users/create", UserController.addUser);
router.get("/users/edit/:id", UserController.paginaEditUser)
router.post("/users/update", UserController.editUser)
router.post("/users/remove", UserController.deleteUser)



module.exports = router;