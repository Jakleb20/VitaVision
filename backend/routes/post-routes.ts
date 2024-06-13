import express from "express";
import UserModel from "../src/models/user-model";
import FoodModel from "../src/models/food-model";


const postRouter = express.Router();


postRouter.post('/postUser', async(req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: 'Fehler beim Erstellen des Users', error});
    }
});

postRouter.post('/postFood', async(req, res) => {
    try {
        const food = await FoodModel.create(req.body);
        res.status(201).json(food);
    }catch (error) {
        res.status(500).json({message: 'Fehler beim Erstellen des Foods', error});
    }
});