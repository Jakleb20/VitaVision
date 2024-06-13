import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {IFood} from "../interfaces/IFood";
import {useFoodContext} from "../context/FoodContext";

const Main = ({navigation}: any) => {

    const FoodContext = useFoodContext();

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setUpdate(prevUpdate => !prevUpdate);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    const onMoveList = () => {
        navigation.navigate('List');
    }

    const onMoveMain = () => {
        navigation.navigate('Your Statistics');
    }

    const onMoveSettings = () => {
        navigation.navigate('Settings');
    }

    const getVitaminsAmount = (nutrient: keyof IFood): number => {
        const amounts = FoodContext.eatenFoods.map(food1 => food1[nutrient] as number || 0);
        return amounts.reduce((total, amount) => total + amount, 0);
    };

    const getVitaminGoal = (nutrient: keyof IFood): number => {
        return FoodContext.nutrientGoal[nutrient] as number || 0;
    };

    return (
        <>
            <ScrollView style={styles.scrollPane}>
                {FoodContext.nutrients.map((nutrient) => {
                    const amount = getVitaminsAmount(nutrient as keyof IFood);
                    const goal = getVitaminGoal(nutrient as keyof IFood);
                    const progress = goal ? amount / goal : 0;

                    return (
                        <View key={nutrient} style={styles.container}>
                            <View>
                                <Text>{nutrient}</Text>
                                <ProgressBar progress={progress} color={"#00b200"} style={styles.bar} />
                                <Text style={styles.statusText}>{amount} / {goal}</Text>
                            </View>
                        </View>
                    );
                })}

                <View>
                    <Text>{String(update)}</Text>
                </View>
            </ScrollView>

            <View style={styles.leftButtonStyle}>
                <Button color={"#cdcdcd"} title={"Food"} onPress={onMoveList}/>
            </View>

            <View style={styles.middleButtonStyle}>
                <Button color={"#00b200"} title={"VitaVision"} onPress={onMoveMain}/>
            </View>

            <View style={styles.rightButtonStyle}>
                <Button color={"#cdcdcd"} title={"Settings"} onPress={onMoveSettings}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        top: 10
    },
    bar: {
        marginTop: 10,
        width: 350,
        borderColor: "#000000"
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
    statusText: {
        marginBottom: 20
    }
});

export default Main;
