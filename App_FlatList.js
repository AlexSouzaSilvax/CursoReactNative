import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flatData: [
                { key: "1", nome: 'Alex', idade: 17 },
                { key: "2", nome: 'Allan', idade: 37 },
                { key: "3", nome: 'Cíntia', idade: 35 },
                { key: "4", nome: 'Rafael', idade: 8 },
                { key: "5", nome: 'Rafael', idade: 8 },
                { key: "6", nome: 'Rafael', idade: 8 },
                { key: "7", nome: 'Rafael', idade: 8 },
                { key: "8", nome: 'Rafael', idade: 8 },
                { key: "9", nome: 'Rafael', idade: 8 },
                { key: "10", nome: 'Rafael', idade: 8 },
                { key: "11", nome: 'Rafael', idade: 8 },
                { key: "12", nome: 'Rafael', idade: 8 },
                { key: "13", nome: 'Rafael', idade: 8 },
                { key: "14", nome: 'Rafael', idade: 8 },
                { key: "15", nome: 'Rafael', idade: 8 },
                { key: "16", nome: 'Rafael', idade: 8 },
                { key: "17", nome: 'Rafael', idade: 8 },
                { key: "18", nome: 'Rafael', idade: 8 },
                { key: "19", nome: 'Rafael', idade: 8 },
                { key: "20", nome: 'Rafael', idade: 8 },
                { key: "21", nome: 'Rafael', idade: 8 },
                { key: "22", nome: 'Rafael', idade: 8 },
                { key: "23", nome: 'Rafael', idade: 8 },                
            ]
        };
    }

    flatRender(item) {
        return (

            <View style={styles.flatItem}>
                <Text style={styles.flatNome}>{item.nome}</Text>
                <Text style={styles.flatIdade}>{item.idade} anos</Text>
            </View>
            
        );
    }

    render() {
        return (
            <View style={styles.body}>

                <FlatList data={this.state.flatData} renderItem={({ item }) => this.flatRender(item)} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 24,
        margin:5,
        flex:1
    },
    flatItem: {
        padding:10,
        borderWidth:1,
        borderColor:'#000000'
    },
    flatNome: {
        fontSize: 26
    },
    flatIdade: {
        fontSize:14
    }
});