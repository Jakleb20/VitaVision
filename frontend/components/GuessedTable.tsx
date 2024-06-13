import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {IAgent} from "../src/models/IAgent";

interface GuessedTableProps {
    guessed: IAgent[];
}

const GuessedTable:React.FC<GuessedTableProps> = (props) => {
    const {guessed} = props;
    const [correctAgent, setCorrectAgent] = useState<IAgent>(()=>{
        return {
            name: '',
            origin: '',
            gender: '',
            codename: '',
            release_year: 0,
            img_url: '',
            role: ''
        }
    })
    const headers = ["Agent", "Role", "Origin", "Gender", "Release Year"];

    useEffect(() => {
        fetch("http://localhost:3000/agents/random").then(response => {
            return response.json();
        }).then(data => {
            setCorrectAgent(data);
        })
    }, []);

    const returnCorrectCells = (attr:IAgent) => {
        const getCellStyle = (value: string, correctValue: string) => {
            if (value === correctValue) {
                return [styles.goodCell, styles.cell]
            } else {
                return [styles.badCell, styles.cell]
            }
        }

        const relYearCell = () => {
            const isCorrectYear = attr.release_year === correctAgent.release_year;
            const symbol = isCorrectYear ? '' : (correctAgent.release_year > attr.release_year ? ' ↑' : ' ↓');
            const style = isCorrectYear ? styles.goodCell : styles.partialCell;

            return (
                <View style={[styles.cell, style]} key={'release_year' + attr.release_year}>
                    <Text>{attr.release_year}{symbol}</Text>
                </View>
            );
        };

        return [
            <Image style={[getCellStyle(attr.name, correctAgent.name), styles.icon, styles.noCell]} key={'name' + attr.name} source={{uri: attr.img_url}}/>,
            <View style={[getCellStyle(attr.role, correctAgent.role), styles.cell]} key={'role' + attr.role}>
                <Text>{attr.role}</Text>
            </View>,
            <View style={[getCellStyle(attr.origin, correctAgent.origin), styles.cell]} key={'origin' + attr.origin}>
                <Text>{attr.origin}</Text>
            </View>,
            <View style={[getCellStyle(attr.gender, correctAgent.gender), styles.cell]} key={'gender' + attr.gender}>
                <Text>{attr.gender}</Text>
            </View>,
            relYearCell()
        ];
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.table}>
                    <View>
                        <View style={styles.trHead}>
                            {headers.map((header, index) => (
                                <View key={index} style={[styles.cell, styles.headCell]}>
                                    <Text style={styles.headText}>{header}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        {guessed.map(value => {
                            return (
                                <View style={styles.tr} key={"value"+value.codename+value.img_url}>
                                    {returnCorrectCells(value)}
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    goodCell: {
        backgroundColor: "#6ed166",
    },
    badCell: {
        backgroundColor: "#9c2727"
    },
    partialCell: {
        backgroundColor: "orange"
    },
    noCell: {
        backgroundColor: "none",
    },
    table: {
        maxHeight: 350,
        textAlign: 'center',
        margin: 'auto',
        width: 600,
        opacity: 0.8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    tr: {
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: "center",
        alignItems: "center",
        height: 50,
    },
    trHead: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        fontSize: 17,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    headCell: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    headText: {
        fontWeight: 'bold'
    },
    icon: {
        resizeMode: "contain"
    }
});

export default GuessedTable;