"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Home = function (_a) {
    var navigation = _a.navigation;
    function onLoginClick() {
        navigation.navigate('Login');
    }
    function onRegistrationClick() {
        navigation.navigate('Registration');
    }
    return (<>
            <react_native_1.ImageBackground style={styles.bg} source={require("../../assets/VitaVisionBackground.png")}>

                <react_native_1.View style={styles.container}>

                    <react_native_1.View style={styles.btLogin}>
                        <react_native_1.Button color={"#00b200"} title={"Login"} onPress={onLoginClick}/>
                    </react_native_1.View> 

                    <react_native_1.View style={styles.btRegister}>
                        <react_native_1.Button color={"#00b200"} title={"Register"} onPress={onRegistrationClick}/>
                    </react_native_1.View>

                </react_native_1.View>

            </react_native_1.ImageBackground>
        </>);
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = Home;
