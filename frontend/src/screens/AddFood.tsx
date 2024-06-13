import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { useFoodContext } from "../context/FoodContext";
import { IFood } from "../interfaces/IFood";
import Slider from '@react-native-community/slider';

const AddFood = () => {

    const [newFood, setNewFood] = useState<IFood>({
        name: '',
        vitaminA: undefined,
        vitaminB1: undefined,
        vitaminB2: undefined,
        vitaminB3: undefined,
        vitaminB5: undefined,
        vitaminB6: undefined,
        vitaminB7: undefined,
        vitaminB9: undefined,
        vitaminB12: undefined,
        vitaminC: undefined,
        vitaminD: undefined,
        vitaminE: undefined,
        vitaminK: undefined,
    });

    const FoodContext = useFoodContext();

    // Liste aller Nährstoffarten mit ihren maximalen Werten für die Slider
    const nutrientTypes: Array<{ key: keyof IFood, max: number }> = [
        { key: 'vitaminA', max: 1000 },
        { key: 'vitaminB1', max: 1000 },
        { key: 'vitaminB2', max: 1000 },
        { key: 'vitaminB3', max: 1000 },
        { key: 'vitaminB5', max: 1000 },
        { key: 'vitaminB6', max: 1000 },
        { key: 'vitaminB7', max: 1000 },
        { key: 'vitaminB9', max: 1000 },
        { key: 'vitaminB12', max: 1000 },
        { key: 'vitaminC', max: 1000 },
        { key: 'vitaminD', max: 1000 },
        { key: 'vitaminE', max: 1000 },
        { key: 'vitaminK', max: 1000 },
    ];

    const handleAddFood = () => {
        // Füge das neue Essen zum FoodContext.foods hinzu
        FoodContext.setFoods([...FoodContext.foods, newFood]);
    }

    const handleNutrientChange = (nutrient: keyof IFood, value: string) => {
        setNewFood({
            ...newFood,
            [nutrient]: value !== '' ? Number(value) : undefined
        });
    }

    const handleSliderChange = (nutrient: keyof IFood, value: number) => {
        setNewFood({
            ...newFood,
            [nutrient]: value
        });
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Neues Essen hinzufügen</Text>

            <Button title="Speichern" onPress={handleAddFood} />


            <View style={styles.inputContainer}>
                <Text>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={newFood.name}
                    onChangeText={(text) => setNewFood({ ...newFood, name: text })}
                />
            </View>

            {nutrientTypes.map(nutrient => (
                <View key={nutrient.key} style={styles.inputContainer}>
                    <Text>{nutrient.key}:</Text>
                    <Slider
                        style={{ width: '100%', height: 40 }}
                        minimumValue={0}
                        maximumValue={nutrient.max}
                        step={1}
                        value={newFood[nutrient.key] || 0}
                        onValueChange={(value) => handleSliderChange(nutrient.key, value)}
                        minimumTrackTintColor="#00b200"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="#00b200"
                    />
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={newFood[nutrient.key] !== undefined ? String(newFood[nutrient.key]) : ''}
                        onChangeText={(text) => handleNutrientChange(nutrient.key, text)}
                    />
                </View>
            ))}

            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 5,
    },
});

export default AddFood;
