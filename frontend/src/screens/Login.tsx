import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import axiosContext from "../context/AxiosContext";
import {IUser} from "../models/IUser";
import axios from "axios";


const Login = ({navigation}:any) => {
    const [users, setUsers] = useState<IUser[]>([])
    const [enteredUser, setEnteredUser] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("")
    
    const fetchUsers = async () => {
        try {
            const initialUsers: IUser[] = await axiosContext.getUsers();
            alert(initialUsers)
            setUsers(initialUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    
    // useEffect(() => {
    //     fetchUsers();
    // }, []);
    
    async function onLogin() {
        // alert(users)
        
        const initialUsers: IUser[] = await axiosContext.getUsers();
        alert(initialUsers)
        
        users.forEach(u => {
            if (u.name === enteredUser && u.password === enteredPassword) {
                navigation.navigate('Main');
            }
        });
        
    }

    function onCancel() {
        navigation.navigate('Home');
    }
    
    const request = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/vitamins/getUser',
            headers: { }
        };
        
        

        axios.request(config)
            .then((response:any) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error:any) => {
                console.log(error);
            });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Username</Text>
                <TextInput style={styles.inputFields} onChangeText={setEnteredUser} placeholder="Enter username ..."/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput style={styles.inputFields} onChangeText={setEnteredPassword} secureTextEntry={true} placeholder="Enter password ..."/>
            </View>

            <View style={styles.btLogin}>
                <Button color={"#00b200"} title={"Login"} onPress={onLogin}/>
            </View>

            <View style={styles.btCancel}>
                <Button color={"grey"} title={"Cancel"} onPress={onCancel}/>
            </View>
                
            
            <View>
                <Button title={"LoadUsers"} onPress={fetchUsers}></Button>
            </View>

            <View>
                <Button title={"shutdafuckab"} onPress={request}></Button>
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

    btLogin: {
        width: 200,
        marginBottom: 20
    },

    btCancel: {
        width: 200,
        marginBottom: 20
    }
})

export default Login;
