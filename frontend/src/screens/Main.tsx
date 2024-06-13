import React from 'react';
import {View, StyleSheet, ProgressBarAndroid, Text} from 'react-native';

const Main = () => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.example}>
                    <Text>Vitamin A</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.20}
                    />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.example}>
                    <Text>Vitamin B</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.78}
                    />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.example}>
                    <Text>Vitamin B12</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={0.60}
                    />
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.example}>
                    <Text>Vitamin C</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={1.0}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    example: {
        marginVertical: 24,
        width: 380,
        marginLeft: 10
    },
});

export default Main;