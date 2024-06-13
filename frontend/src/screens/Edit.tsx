import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, ScrollView, TextInput} from "react-native";
import Slider from '@react-native-community/slider';
import {useFoodContext} from "../context/FoodContext";
import {IFood} from "../interfaces/IFood";

const Edit = ({navigation} : any) => {

    const FoodContext = useFoodContext();

    const onMoveList = () => {
        navigation.navigate('List');
    }

    const onMoveMain = () => {
        navigation.navigate('Your Statistics');
    }

    const onMoveSettings = () => {
        navigation.navigate('Settings');
    }

    const getVitaminValue = (vitamin: keyof IFood): number | undefined => {

        
        return FoodContext.selectedFood[vitamin] as number | undefined;
    }

    const setVitaminValue = (vitamin: keyof IFood, value: number) => {
        // Kopiere das aktuelle ausgewählte Lebensmittel und aktualisiere das Vitamin-Attribut
        const updatedFood = { ...FoodContext.selectedFood, [vitamin]: value };

        // Finde und aktualisiere das spezifische Lebensmittel in der Lebensmittel-Liste
        const updatedFoods = FoodContext.foods.map(food =>
            food.name === FoodContext.selectedFood.name ? updatedFood : food
        );

        // Setze die aktualisierten Lebensmittel und das ausgewählte Lebensmittel zurück in den Kontext
        FoodContext.setSelectedFood(updatedFood);
        FoodContext.setFoods(updatedFoods);
    }

    // Liste der auszuschließenden Attribute
    const excludeAttributes = ['_id', 'name', 'amount'];

    // Filtern der Attribute, die nicht angezeigt werden sollen
    const filteredNutrientGoals = Object.keys(FoodContext.nutrientGoal).filter(nutrient => !excludeAttributes.includes(nutrient));

    return (
        <>
            <ScrollView style={styles.scrollPane}>
                <Text style={styles.headingStyle}>{FoodContext.selectedFood.name} bearbetien</Text>

                {filteredNutrientGoals.map((nutrient) => {
                    return (
                        <View key={nutrient} style={styles.container}>
                            <Text>{nutrient}</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                value={String(getVitaminValue(nutrient as keyof IFood) || '')}
                                onChangeText={(value) => setVitaminValue(nutrient as keyof IFood, Number(value))}
                            />
                            <Text>µg</Text>
                            <View style={styles.sliderContainer}>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={1000}
                                    step={1}
                                    value={getVitaminValue(nutrient as keyof IFood)}
                                    onValueChange={(value) => setVitaminValue(nutrient as keyof IFood, value)}
                                    minimumTrackTintColor="#00b200"
                                    maximumTrackTintColor="#000000"
                                    thumbTintColor="#00b200"
                                />
                            </View>
                        </View>
                    )
                })}

            </ScrollView>

            <View style={styles.leftButtonStyle}>
                <Button color={"#cdcdcd"} title={"Food"} onPress={onMoveList}/>
            </View>

            <View style={styles.middleButtonStyle}>
                <Button color={"#cdcdcd"} title={"VitaVision"} onPress={onMoveMain}/>
            </View>

            <View style={styles.rightButtonStyle}>
                <Button color={"#00b200"} title={"Settings"} onPress={onMoveSettings}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        top: 20,
    },
    input: {
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        width: 100,
        marginRight: 10,
        paddingLeft: 5,
    },
    sliderContainer: {
        marginTop: 10,
        marginBottom: 20
    },
    slider: {
        width: 300,
        height: 40,
    },
    leftButtonStyle: {
        position: "absolute",
        bottom: 0,
        width: "33%"
    },
    middleButtonStyle: {
        position: "absolute",
        alignSelf: "center",
        bottom: 0,
        width: "33%"
    },
    rightButtonStyle: {
        position: "absolute",
        left: "67%",
        bottom: 0,
        width: "33%"
    },
    scrollPane: {
        marginBottom: 30
    },
    headingStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10
    }
});

export default Edit;
