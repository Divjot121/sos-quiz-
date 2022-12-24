import { Router } from "express";
const router = Router();
import * as controller from "../controllers/controller.js";

//questions api
router.route("/questions").get(controller.getQuiz).post(controller.postQuiz);

//result api
router.route("/result").get(controller.getResult).post(controller.postResult);

export default router;
