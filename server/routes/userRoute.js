import express from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  loginController,
  registerController,
  updateArticle,
  viewArticle,
  viewOneArticle,
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

//LOGIN USER
router.post("/login", loginController);

//REGISTER USER
router.post("/register", registerController);



//Create Article Route
router.post("/add-article", auth, createArticle);

//View Article
router.get("/userArticle", auth,  viewArticle);

//View one Article
router.get("/userArticle/:id",   viewOneArticle);

//delete user article
router.delete("/deleteArticle/:id",  deleteArticle);

//update user article
router.put("/editArticle/:id",  updateArticle);


//All user article
router.get("/allArticles", getAllArticle);


export default router;
