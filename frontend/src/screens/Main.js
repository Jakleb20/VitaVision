"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Main = function () {
    return (<>
            <react_native_1.View style={styles.container}>
                <react_native_1.View style={styles.example}>
                    <react_native_1.Text>Vitamin A</react_native_1.Text>
                    <react_native_1.ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.20}/>
                </react_native_1.View>
            </react_native_1.View>

            <react_native_1.View style={styles.container}>
                <react_native_1.View style={styles.example}>
                    <react_native_1.Text>Vitamin B</react_native_1.Text>
                    <react_native_1.ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.78}/>
                </react_native_1.View>
            </react_native_1.View>

            <react_native_1.View style={styles.container}>
                <react_native_1.View style={styles.example}>
                    <react_native_1.Text>Vitamin B12</react_native_1.Text>
                    <react_native_1.ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.60}/>
                </react_native_1.View>
            </react_native_1.View>

            <react_native_1.View style={styles.container}>
                <react_native_1.View style={styles.example}>
                    <react_native_1.Text>Vitamin C</react_native_1.Text>
                    <react_native_1.ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={1.0}/>
                </react_native_1.View>
            </react_native_1.View>
        </>);
};
var styles = react_native_1.StyleSheet.create({
    container: {},
    example: {
        marginVertical: 24,
        width: 380,
        marginLeft: 10
    },
});
exports.default = Main;
