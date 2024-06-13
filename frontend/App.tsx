import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./src/screens/Home";
import Main from "./src/screens/Main";
import List from "./src/screens/List";
import React, {useState} from "react";
import Settings from "./src/screens/Settings";
import FoodContext from "./src/context/FoodContext";
import {IFood} from "./src/interfaces/IFood";
import Edit from "./src/screens/Edit";
import AddFood from "./src/screens/AddFood";


const Stack = createNativeStackNavigator();

export default function App() {
    const [nutrientGoal, setNutrientGoal] = useState<IFood>({
        _id: '',name: '',amount: 0,vitaminA: 100,vitaminB1: 100,vitaminB2: 100,vitaminB3: 100,vitaminB5: 100,vitaminB6: 100,
        vitaminB7: 100,vitaminB9: 100, vitaminB12: 100,vitaminC: 100,vitaminD: 100,vitaminE: 100,vitaminK: 100,
        carbohydrates: 100,protein: 100,fat: 100,fiber: 100,sugars: 100,calcium: 100,iron: 100,magnesium: 100,
        phosphorus: 100,potassium: 100,sodium: 100,zinc: 100,copper: 100,manganese: 100,selenium: 100,
    });
    
    const [foods, setFoods] = useState<IFood[]>([{ _id: "test1", name: "Apfel", amount: 0, vitaminA: 12, vitaminC: 14 },
        { _id: "test2", name: "Banane", amount: 0, vitaminB12: 32, vitaminB6: 0.4 },
        { _id: "test3", name: "Birne", amount: 0, vitaminA: 17, vitaminB12: 2 },
        { _id: "test4", name: "Orange", amount: 0, vitaminC: 53.2, vitaminA: 225 },
        { _id: "test5", name: "Spinat", amount: 0, vitaminA: 469, vitaminC: 28.1, vitaminK: 482.9 },
        { _id: "test6", name: "Karotte", amount: 0, vitaminA: 835, vitaminK: 13.2 },
        { _id: "test7", name: "Erdbeere", amount: 0, vitaminC: 59.1, vitaminB9: 24 },
        { _id: "test8", name: "Brokkoli", amount: 0, vitaminC: 89.2, vitaminK: 101.6 },
        { _id: "test9", name: "Mango", amount: 0, vitaminA: 54, vitaminC: 36.4, vitaminE: 1.2 },
        { _id: "test10", name: "Tomate", amount: 0, vitaminA: 42, vitaminC: 13.7, vitaminK: 7.9 },
        { _id: "test11", name: "Kirsche", amount: 0, vitaminC: 7, vitaminA: 64, vitaminE: 0.3 },
        { _id: "test12", name: "Avocado", amount: 0, vitaminB5: 1.4, vitaminK: 21, vitaminE: 2.1 },
        { _id: "test13", name: "Blaubeere", amount: 0, vitaminC: 9.7, vitaminK: 19.3, vitaminE: 0.6 },
        { _id: "test14", name: "Kiwi", amount: 0, vitaminC: 92.7, vitaminK: 40.3, vitaminE: 1.5 },
        { _id: "test15", name: "Paprika", amount: 0, vitaminC: 127.7, vitaminA: 157, vitaminB6: 0.3 }]);
    
    
    
    const nutrients:string[] = ['vitaminA', 'vitaminB1', 'vitaminB2', 'vitaminB3', 'vitaminB5', 'vitaminB6', 'vitaminB7',
        'vitaminB9', 'vitaminB12', 'vitaminC', 'vitaminD', 'vitaminE', 'vitaminK', 'carbohydrates', 'protein', 'fat',
        'fiber', 'sugars', 'calcium', 'iron', 'magnesium', 'phosphorus', 'potassium', 'sodium', 'zinc', 'copper', 'manganese', 'selenium'
        ];
    
    
    const [selectedFood, setSelectedFood] = useState<IFood>(foods[0])
    
    const [eatenFood, setEatenFood] = useState<IFood[]>([])
    
    
    
    const reload = () =>  {
        //todo für backend
    }
    
    
  return (
      <>
          <NavigationContainer>
              <FoodContext.Provider value={{ selectedFood:selectedFood, setSelectedFood:setSelectedFood, foods:foods, 
                  setFoods:setFoods, reload:reload, eatenFoods:eatenFood, setEatenFoods:setEatenFood, nutrients:nutrients,
              nutrientGoal:nutrientGoal, setNutrientGoal:setNutrientGoal}}>
              <Stack.Navigator>
                  <Stack.Screen name={"Home"} component={Home}/>
                  <Stack.Screen name={"Login"} component={Login}/>
                  <Stack.Screen name={"Registration"} component={Register}/>

                  <Stack.Screen name={"Your Statistics"} component={Main}/>
                  <Stack.Screen name={"Add Food"} component={AddFood}/>
                  <Stack.Screen name={"Edit"} component={Edit}/>
                  <Stack.Screen name={"List"} component={List}/>
                  <Stack.Screen name={"Settings"} component={Settings}/>
              </Stack.Navigator>
              </FoodContext.Provider>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
