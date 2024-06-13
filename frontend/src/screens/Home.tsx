import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from "react-native";

const Home = ({ navigation }:any) => {
    function onLoginClick() {
        navigation.navigate('Login');
    }

    function onRegistrationClick() {
        navigation.navigate('Registration');
    }

    return (
        <>
            <ImageBackground style={styles.bg} source={require("../../assets/VitaVisionBackground.png")}>

                <View style={styles.container}>

                    <View style={styles.btLogin}>
                        <Button color={"#00b200"} title={"Login"} onPress={onLoginClick}/>
                    </View> 

                    <View style={styles.btRegister}>
                        <Button color={"#00b200"} title={"Register"} onPress={onRegistrationClick}/>
                    </View>

                </View>

            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    bg: {
        height: "100%",
        width: "100%"
    },

    container: {
        alignItems: "center"
    },

    btLogin: {
        width: "66%",
        top: 530
    },

    btRegister: {
        width: "66%",
        top: 540
    }
});

export default Home;