"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Register = function (_a) {
    var navigation = _a.navigation;
    function onCancel() {
        navigation.navigate('Home');
    }
    var _b = (0, react_1.useState)(""), enteredUsername = _b[0], setEnteredUsername = _b[1];
    var _c = (0, react_1.useState)(""), enteredEmail = _c[0], setEnteredEmail = _c[1];
    var _d = (0, react_1.useState)(""), enteredPassword = _d[0], setEnteredPassword = _d[1];
    var _e = (0, react_1.useState)(""), reenteredPassword = _e[0], setReenteredPassword = _e[1];
    function onRegistration() {
        if (enteredPassword === reenteredPassword) {
            var user = { name: enteredUsername, email: enteredEmail, password: enteredPassword };
            onCancel();
            alert('User successfully created!');
        }
        else {
            alert('check your input!');
        }
    }
    return (<react_native_1.View style={styles.container}>
            <react_native_1.Text style={styles.heading}>Register</react_native_1.Text>

            <react_native_1.View style={styles.inputContainer}>
                <react_native_1.Text style={styles.labelText}>Username</react_native_1.Text>
                <react_native_1.TextInput style={styles.inputFields} onChangeText={setEnteredUsername} placeholder="Enter username ..."/>
            </react_native_1.View>

            <react_native_1.View style={styles.inputContainer}>
                <react_native_1.Text style={styles.labelText}>E-Mail</react_native_1.Text>
                <react_native_1.TextInput style={styles.inputFields} onChangeText={setEnteredEmail} placeholder="Enter email ..."/>
            </react_native_1.View>

            <react_native_1.View style={styles.inputContainer}>
                <react_native_1.Text style={styles.labelText}>Password</react_native_1.Text>
                <react_native_1.TextInput style={styles.inputFields} onChangeText={setEnteredPassword} secureTextEntry={true} placeholder="Enter password ..."/>
            </react_native_1.View>

            <react_native_1.View style={styles.inputContainer}>
                <react_native_1.Text style={styles.labelText}>Confirm password</react_native_1.Text>
                <react_native_1.TextInput style={styles.inputFields} onChangeText={setReenteredPassword} secureTextEntry={true} placeholder="Reenter password ..."/>
            </react_native_1.View>

            <react_native_1.View style={styles.btRegister}>
                <react_native_1.Button color={"#00b200"} title={"Register"} onPress={onRegistration}/>
            </react_native_1.View>

            <react_native_1.View style={styles.btCancel}>
                <react_native_1.Button color={"grey"} title={"Cancel"} onPress={onCancel}/>
            </react_native_1.View>
        </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
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
});
exports.default = Register;
