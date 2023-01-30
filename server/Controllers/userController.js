import userModel from "../models/userModel.js";
import articleModel from "../models/articleModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//LOGIN
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password" });
    }
    // Generate a JWT token
    const token = jwt.sign(
      { user: user.email, id: user._id },
      process.env.JWT_SECRET
    );
    res.status(200).json({ message: "Login Success..", token: token });
  } catch (error) {
    res.status(500).json({ message: "Error while logging in" });
  }
};

//REGISTER
export const registerController = async (req, res) => {
  const saltRounds = 10;

  const { name, email, password } = req.body;
  try {
    const validUser = await userModel.findOne({ email: email });
    if (validUser != null) {
      res.status(500).json({ message: "Email is already exist" });
    }
    const hash = await bcrypt.hash(password, saltRounds);
    // Save the hashed password to the database
    const user = await userModel.create({
      name,
      email,
      password: hash,
    });
    res
      .status(200)
      .json({ message: `User ${user.name} registered successfully` });
  } catch (error) {
    res.status(500).json({ message: "Error while registering user" });
  }
};

//Create
export const createArticle = async (req, res) => {
  // Get the article's information from the request
  const { title, body, tags, imageUrl, category } = req.body;

  // Create a new article object
  const newArticle = new articleModel({
    title: title,
    body: body,
    tags: tags,
    imageUrl: imageUrl,
    category: category,
    userId: req.userId,
  });
  try {
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//viewArticle
export const viewArticle = async (req, res) => {
  try {
    const articles = await articleModel.find({ userId: req.userId });
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//viewOneArticle
export const viewOneArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    articleModel.findById(articleId, (err, article) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (!article) {
        res.status(404).send("User not found");
        return;
      }
      res.send(article);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Update Article
export const updateArticle = async (req, res) => {
  const id = req.params.id;
  const { title, body, tags, imageUrl, category } = req.body;

  const newArticle = {
    title: title,
    body: body,
    tags: tags,
    imageUrl: imageUrl,
    category: category,
    userId: req.userId,
  };

  try {
    await articleModel.findByIdAndUpdate(id, newArticle, { new: true });
    res.status(200).json(newArticle);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Delete Article
export const deleteArticle = async (req, res) => {
  const id = req.params.id;
  try {
    const article = await articleModel.findByIdAndRemove(id);
    res.status(200).json(article);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//get  all  user
export const getAllArticle = async (req, res) => {
  try {
    const articles = await articleModel.find();
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
