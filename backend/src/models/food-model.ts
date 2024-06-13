import { Schema, model } from 'mongoose';
import { IFood } from '../interfaces/IFood';
const foodSchema = new Schema<IFood>({
    fat: {
        type: Number,
        required: false
    },
    protein: {
        type: Number,
        required: false
    },
    carbohydrates: {
        type: Number,
        required: false
    },
    fiber: {
        type: Number,
        required: false
    },
    sugars: {
        type: Number,
        required: false
    },
    vitaminA: {
        type: Number,
        required: false
    },
    vitaminB1: {
        type: Number,
        required: false
    },
    vitaminB2: {
        type: Number,
        required: false
    },
    vitaminB3: {
        type: Number,
        required: false
    },
    vitaminB5: {
        type: Number,
        required: false
    },
    vitaminB6: {
        type: Number,
        required: false
    },
    vitaminB7: {
        type: Number,
        required: false
    },
    vitaminB9: {
        type: Number,
        required: false
    },
    vitaminB12: {
        type: Number,
        required: false
    },
    vitaminC: {
        type: Number,
        required: false
    },
    vitaminD: {
        type: Number,
        required: false
    },
    vitaminE: {
        type: Number,
        required: false
    },
    vitaminK: {
        type: Number,
        required: false
    },
    calcium: {
        type: Number,
        required: false
    },
    iron: {
        type: Number,
        required: false
    },
    magnesium: {
        type: Number,
        required: false
    },
    phosphorus: {
        type: Number,
        required: false
    },
    potassium: {
        type: Number,
        required: false
    },
    sodium: {
        type: Number,
        required: false
    },
    zinc: {
        type: Number,
        required: false
    },
    copper: {
        type: Number,
        required: false
    },
    manganese: {
        type: Number,
        required: false
    },
    selenium: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
    }
});

const IFoodModel = model<IFood>('Food', foodSchema);

export default IFoodModel;