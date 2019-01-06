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
                    ]
                },
                {
                    title: "B", data: [
                        { key: "3", nome: "Bruno", idade: 40 },
                        { key: "4", nome: "Sr Burns", idade: 60 },
                        { key: "5", nome: "Barnei", idade: 91 }
                    ]
                },
                {
                    title: "C", data: [
                        { key: "6", nome: "Cíntia", idade: 35 },
                        { key: "7", nome: "Cabe", idade: 66 },
                        { key: "8", nome: "Carine", idade: 20 },
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
            <View style={styles.body}>
                <SectionList
                    sections={this.state.listData}
                    renderItem={({ item }) => this.listRender(item)}
                    renderSectionHeader={({ section }) => this.listSectionRender(section)}
                    stickySectionHeadersEnabled />
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