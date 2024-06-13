import {IFood} from "../interfaces/IFood";
import {createContext, useContext} from "react";


interface FoodContextProps {
    foods: IFood[];
    setFoods: (allFoods: IFood[]) => void;
    selectedFood: IFood;
    setSelectedFood: (selectedFood: IFood) => void
    eatenFoods: IFood[];
    setEatenFoods: (eatenFoods: IFood[]) => void;
    nutrients: string[];
    nutrientGoal: IFood;
    setNutrientGoal: (nutrientGoal: IFood) => void;
    reload: () => void;
}


const FoodContext = createContext<FoodContextProps>({
    foods: [],
    setFoods: () => {
    },
    selectedFood: {} as IFood,
    setSelectedFood: () => {
    },
    eatenFoods: [],
    setEatenFoods: () => {
        
    },
    nutrientGoal: {} as IFood,
    setNutrientGoal: () => {
        
    },
    nutrients: [],
    reload: () => {
    }
})

export const useFoodContext = () => {
    const context = useContext(FoodContext);
    if (!context) {
        throw new Error('FoodContext must be used within Provider')
    }
    return context;
}

export default FoodContext;