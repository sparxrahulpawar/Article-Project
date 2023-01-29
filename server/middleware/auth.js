import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = user.id;
    } else {
      res.status(401).json({ message: "Unauthorize User" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorize User" });
  }
};
