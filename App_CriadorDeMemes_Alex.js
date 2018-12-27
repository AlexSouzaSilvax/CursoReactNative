import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';

export default class PrimeiroProjeto extends Component {

    render() {
        return (

            <View style={styles.body}>

                <View>
                    <Text style={styles.titulo}>Criador de MIMIMI</Text>
                </View>

                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder="Digite seu mimimi" />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#999999',
        paddingTop: 30,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    input: {
        borderWidth:1,
        borderColor:'#999999',
        backgroundColor:'#EEEEEE',
        color:'#000000',
        height:40,
        margin:0,
        padding:10
    },
    inputArea: {
        alignSelf:'stretch'
    }
});