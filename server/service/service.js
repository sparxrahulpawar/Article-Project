import jwt  from "jsonwebtoken";

export const getLoggedInUser = (token) => {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      return decoded;
    } catch (err) {
      console.log(err);
      return null;
    }
  }