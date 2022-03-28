import { Router } from "express";
import UserController from "../controllers/UserController"
const router = Router();

router.get("/user", UserController.paginaAdicionarUser);
router.get("/user/create", UserController.paginaUser);
router.post("/users/create", UserController.addUser);

router.get("/users/edit/:id", UserController.paginaEditUser)
router.post("/users/update", UserController.editUser)

router.post("/users/remove", UserController.deleteUser)


module.exports = router;