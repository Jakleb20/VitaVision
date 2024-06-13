import React, {useEffect, useRef, useState} from 'react';
import {
    FlatList,
    Image,
    NativeSyntheticEvent, SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {IAgent} from "../src/models/IAgent";
import GuessedTable from "./GuessedTable";


const AgentInput = () => {
    const inputRef = useRef<TextInput>(null);
    const [possible, setPossible] = useState<IAgent[]>([])
    const [filterList, setFilterList] = useState<IAgent[]>([])
    const [guessed, setGuessed] = useState<IAgent[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/agents/all").then(response => {
            if (response.status !== 200) {
                throw new Error(`Error fetching agents (${response.status}) ${response.statusText}`);
            }
            return response.json();
        }).then(agents => {
            setPossible(agents)
        }).catch(error => {
            console.error("error: " + error);
        });
    }, []);

    const filterPossible = (text:string) => {
        let filtered = possible.filter(value =>
            value.name.toLowerCase().includes(text.toLowerCase())
        );
        console.log(filtered)
        if (filtered.length == possible.length) {
            setFilterList([])
        } else {
            setFilterList(filtered)
        }
    }

    const submitAgent = (attr:IAgent|undefined) => {
        console.log(filterList[0])
        if (attr) {
            guessed.push(attr)
        } else {
            if (filterList[0]) {
                guessed.push(filterList[0])
                setPossible(possible.filter(value => !guessed.includes(value)));
            }
        }
        if (inputRef.current) {
            inputRef.current.clear();
            filterPossible("");
        }
        setTimeout(() => inputRef.current?.focus(), 250);
        console.log(guessed)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputFields}>
                    <TextInput
                        ref={inputRef}
                        style={styles.agentInput}
                        placeholder="Your Agent..."
                        placeholderTextColor={"black"}
                        onChangeText={filterPossible}
                        onSubmitEditing={() => submitAgent(undefined)}
                        id={"agent-input"}
                    />
                </View>
                <SafeAreaView style={styles.itemContent}>
                    <ScrollView>
                        {filterList.map((value, index) => {
                            return (
                                <TouchableOpacity onPress={() => submitAgent(value)} key={"value" + index}>
                                    <View style={styles.row} key={value.name + value.release_year + filterList.length}>
                                        <Image style={styles.icon} source={{ uri: value.img_url }}></Image>
                                        <Text style={styles.cell}>{value.name} - {value.codename}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </SafeAreaView>
                <View style={styles.outputView}>
                    <GuessedTable guessed={guessed} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // Center elements horizontally
        paddingTop: 10,
    },
    inputFields: {
        width: "100%",
        alignItems: 'center',
        marginBottom: 10,
    },
    agentInput: {
        height: 50,
        width: 300,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 3,
        borderRadius: 8,
        borderColor: 'black',
        textAlign: "center",
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
        justifyContent: "center",
        padding: "auto"
    },
    itemContent: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: 300,
        top: 65,
        maxHeight: 250,
        zIndex: 1,
        position: "absolute",
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 0,
    },
    icon: {
        marginLeft: 20,
        width: 60,
        height: 60,
    },
    row: {
        height: 80,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    cell: {
        marginLeft: 20,
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    outputView: {
        width: "100%",
        paddingHorizontal: 20, // Add padding to align with other elements
    }
});

export default AgentInput;