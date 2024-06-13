"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_model_1 = __importDefault(require("../src/models/user-model"));
const food_model_1 = __importDefault(require("../src/models/food-model"));
const postRouter = express_1.default.Router();
postRouter.post('/postUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Fehler beim Erstellen des Users', error });
    }
}));
postRouter.post('/postFood', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const food = yield food_model_1.default.create(req.body);
        res.status(201).json(food);
    }
    catch (error) {
        res.status(500).json({ message: 'Fehler beim Erstellen des Foods', error });
    }
}));
