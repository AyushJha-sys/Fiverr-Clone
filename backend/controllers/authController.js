import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

  const hash = bcrypt.hashSync(req.body.password, 5);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
    isSeller: req.body.isSeller
  });

  await newUser.save();

  res.json("User created");
};

export const login = async (req, res) => {

  const user = await User.findOne({
    username: req.body.username
  });

  if (!user) return res.json("User not found");

  const valid = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!valid) return res.json("Wrong password");

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  );

  res.json({ token, user });
};