import { Router } from "express";
import userRoutes from "./user.routes"

const router = Router();

router.get("/", (req, res) => res.render("main"));

router.use([userRoutes]);

module.exports = router;