import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity} from "react-native";
import {IFood} from "../interfaces/IFood";
import {useFoodContext} from "../context/FoodContext";

const List = ({navigation}: any) => {

    const [update, setUpdate] = useState(false);
    
    const FoodContext = useFoodContext();

    const vitaminProperties = [
        "vitaminA", "vitaminB1", "vitaminB2", "vitaminB3", "vitaminB5",
        "vitaminB6", "vitaminB7", "vitaminB9", "vitaminB12",
        "vitaminC", "vitaminD", "vitaminE", "vitaminK"
    ];

    const onMoveList = () => {
        navigation.navigate('List');
    }

    const onMoveMain = () => {
        navigation.navigate('Your Statistics');
    }

    const onMoveSettings = () => {
        navigation.navigate('Settings');
    }

    const onGoEdit = (food: IFood) => {
        FoodContext.setSelectedFood(food);
        navigation.navigate('Edit');
    }
    
    const getVitaminValue = (food: IFood, vitamin: string): number | undefined => {
        return food[vitamin as keyof IFood] as number | undefined;
    };

    const increaseFoodAmount = (food: IFood) => {
        // setRegisteredFood(registeredFood.map(f => {
        //     if (f._id === food._id) {
        //         return {...f, amount: f.amount + 1};
        //     } else {
        //         return f;
        //     }
        // }));
        let eatenFood:IFood[] = FoodContext.eatenFoods;
        eatenFood.push(food);
        
        FoodContext.setEatenFoods(eatenFood);
        setUpdate(!update)

    }

    const decreaseFoodAmount = (food: IFood) => {
        // setRegisteredFood(registeredFood.map(f => {
        //     if (f._id === food._id && f.amount > 0) {
        //         return {...f, amount: f.amount - 1};
        //     } else {
        //         return f;
        //     }
        // }));
        let deletedEatenFood = false;
        
        let eatenFood:IFood[] = [];
        FoodContext.eatenFoods.map((food1) => {
            if (food1.name === food.name && !deletedEatenFood) {
                deletedEatenFood = true;
                return;
            } else {
                eatenFood.push(food)
            }
        })
        
        FoodContext.setEatenFoods(eatenFood);
    }
    
    const getFoodAmount = (food: IFood): number => {
        let value:number = 0;
        FoodContext.eatenFoods.map((food1) => {
            if (food1.name === food.name) {
                return value++;
            }
        })

        return value;
    }
    
    const onGoAdd = () =>  {
        navigation.navigate('Add Food');
    }

    return (
        <>
            <View style={styles.plusButtonContainer}>
                <Button color={"#00b200"} title={"+"} onPress={() => onGoAdd()} />
            </View>
            
            <ScrollView style={styles.scrollPane}>
                {FoodContext.foods.map(f => (
                    <View key={f._id} style={styles.productContainer}>
                        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                            {f.name}
                        </Text>



                        <View style={styles.vitaminContainer}>
                            {vitaminProperties
                                .filter(vitamin => getVitaminValue(f, vitamin) !== undefined)
                                .map(vitamin => (
                                    <Text key={vitamin} style={styles.vitaminText}>
                                        {vitamin}: {getVitaminValue(f, vitamin)}
                                    </Text>
                                ))
                            }
                        </View>

                        <View style={styles.counterContainer}>

                            <TouchableOpacity style={styles.addButton} onPress={() => increaseFoodAmount(f)}>
                                <Text style={styles.addButtonText}>+</Text>
                            </TouchableOpacity>

                            <Text style={styles.counterText}>{getFoodAmount(f)}</Text>

                            <TouchableOpacity style={styles.subtractButton} onPress={() => decreaseFoodAmount(f)}>
                                <Text style={styles.subtractButtonText}>-</Text>
                            </TouchableOpacity>

                            <Button title={"bearbeiten"} onPress={() => onGoEdit(f)}></Button>




                        </View>
                    </View>
                ))}
                <View >
                    <Text>{update}</Text>
                </View>

                {FoodContext.eatenFoods.map(f => {
                    return <View >
                        <Text>{f.name}</Text>
                    </View>
                })}
            </ScrollView>

            <View style={styles.leftButtonStyle}>
                <Button color={"#00b200"} title={"Food"} onPress={onMoveList}/>
            </View>

            <View style={styles.middleButtonStyle}>
                <Button color={"#cdcdcd"} title={"VitaVision"} onPress={onMoveMain}/>
            </View>

            <View style={styles.rightButtonStyle}>
                <Button color={"#cdcdcd"} title={"Settings"} onPress={onMoveSettings}/>
            </View>
            
            
        </>

    );
};

const nostyle = StyleSheet.create({
    display: {
        fontSize: 20
    }
});

const styles = StyleSheet.create({
    productContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 20,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    vitaminContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    vitaminText: {
        marginRight: 10,
        fontSize: 14,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    addButton: {
        backgroundColor: '#00b200',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtractButton: {
        backgroundColor: '#A9A9A9',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    subtractButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    counterText: {
        fontSize: 18,
        marginHorizontal: 20,
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
    plusButtonContainer: {
        alignSelf: "center",
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: "lightgreen",
    },
});


export default List;