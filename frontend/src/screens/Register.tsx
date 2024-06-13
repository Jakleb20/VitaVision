import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {IUser} from "../interfaces/IUser";

const Register = ({navigation}:any) => {
    function onCancel() {
        navigation.navigate('Home');
    }

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [reenteredPassword, setReenteredPassword] = useState("");

    function onRegistration() {
        if (enteredPassword === reenteredPassword) {
            //let user:IUser = {name: enteredUsername, email: enteredEmail, password: enteredPassword};

            onCancel()

            alert('User successfully created!');
        } else {
            alert('check your input!');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Username</Text>
                <TextInput style={styles.inputFields} onChangeText={setEnteredUsername} placeholder="Enter username ..."/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>E-Mail</Text>
                <TextInput style={styles.inputFields} onChangeText={setEnteredEmail} placeholder="Enter email ..."/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput style={styles.inputFields} onChangeText={setEnteredPassword} secureTextEntry={true} placeholder="Enter password ..."/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Confirm password</Text>
                <TextInput style={styles.inputFields} onChangeText={setReenteredPassword} secureTextEntry={true} placeholder="Reenter password ..."/>
            </View>

            <View style={styles.btRegister}>
                <Button color={"#00b200"} title={"Register"} onPress={onRegistration}/>
            </View>

            <View style={styles.btCancel}>
                <Button color={"grey"} title={"Cancel"} onPress={onCancel}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    heading: {
        fontSize: 50,
        marginBottom: 20
    },

    inputContainer: {
        marginBottom: 20
    },

    labelText: {
        marginBottom: 5,
        fontSize: 18
    },

    inputFields: {
        borderWidth: 1,
        borderColor: "grey",
        width: 200,
        height: 40,
        paddingLeft: 5
    },

    btRegister: {
        width: 200,
        marginBottom: 20
    },

    btCancel: {
        width: 200,
        marginBottom: 20
    }
})

export default Register;