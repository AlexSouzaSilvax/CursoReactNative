import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    title: 'A', data: [
                        { key: "1", nome: "Alex", idade: 17 },
                        { key: "2", nome: "Allan", idade: 37 },
                        { key: "3", nome: "Allan", idade: 37 },
                        { key: "4", nome: "Allan", idade: 37 },
                        { key: "5", nome: "Allan", idade: 37 },
                        { key: "6", nome: "Allan", idade: 37 },
                        { key: "7", nome: "Allan", idade: 37 },
                        { key: "8", nome: "Allan", idade: 37 },
                        { key: "9", nome: "Allan", idade: 37 },
                        { key: "10", nome: "Allan", idade: 37 },
                        { key: "11", nome: "Allan", idade: 37 }
                    ]
                },
                {
                    title: "B", data: [
                        { key: "12", nome: "Bruno", idade: 40 },
                        { key: "13", nome: "Sr Burns", idade: 60 },
                        { key: "14", nome: "Barnei", idade: 91 },
                        { key: "15", nome: "Barnei", idade: 91 },
                        { key: "16", nome: "Barnei", idade: 91 },
                        { key: "17", nome: "Barnei", idade: 91 },
                        { key: "18", nome: "Barnei", idade: 91 },
                        { key: "19", nome: "Barnei", idade: 91 },
                        { key: "20", nome: "Barnei", idade: 91 },
                        { key: "21", nome: "Barnei", idade: 91 },
                        { key: "22", nome: "Barnei", idade: 91 },
                        { key: "23", nome: "Barnei", idade: 91 },
                        { key: "24", nome: "Barnei", idade: 91 }
                    ]
                },
                {
                    title: "C", data: [
                        { key: "25", nome: "Cíntia", idade: 35 },
                        { key: "26", nome: "Cabe", idade: 66 },
                        { key: "27", nome: "Carine", idade: 20 },
                        { key: "28", nome: "Carine", idade: 20 },
                        { key: "29", nome: "Carine", idade: 20 },
                        { key: "30", nome: "Carine", idade: 20 },
                        { key: "31", nome: "Carine", idade: 20 },
                        { key: "32", nome: "Carine", idade: 20 },
                        { key: "33", nome: "Carine", idade: 20 },
                        { key: "34", nome: "Carine", idade: 20 },
                        { key: "35", nome: "Carine", idade: 20 },
                        { key: "36", nome: "Carine", idade: 20 },
                        { key: "37", nome: "Carine", idade: 20 },
                        { key: "38", nome: "Carine", idade: 20 },
                        { key: "39", nome: "Carine", idade: 20 },
                        { key: "40", nome: "Carine", idade: 20 }
                    ]
                }
            ]
        };
    }

    listSectionRender(section) {
        return (
            <Text style={styles.section}>Letra {section.title}</Text>
        );
    }

    listRender(item) {
        return (
            <Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
        );
    }

    render() {
        return (           

            <View style={{ paddingTop: 25, flex: 1 }}>

                <View style={{ height: 50, backgroundColor: 'white' }}>
                    <Text style={{ color: 'blue', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>GXS</Text>
                </View>

                <View style={{ flex: 1 }}>

                <SectionList
                    sections={this.state.listData}
                    renderItem={({ item }) => this.listRender(item)}
                    renderSectionHeader={({ section }) => this.listSectionRender(section)}
                    stickySectionHeadersEnabled />


                </View>

                <View style={{ margin: 0, height: 20, backgroundColor: 'blue' }}>
                    <Text style={{ paddingRight: 5, fontSize: 11, textAlign: 'right', color: 'white' }}>GUANABARA É O REI</Text>
                </View>

            </View>



        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 24
    },
    item: {
        fontSize: 18,
        height: 40,
        padding: 10
    },
    section: {
        fontSize: 14,
        backgroundColor: "#CCCCCC",
        padding: 10
    }
});