import express from "express";
import UserModel from "../src/models/user-model";


const getRouter = express.Router();

getRouter.get('/getUser', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Members', error });
  }
});


module.exports = getRouter;
