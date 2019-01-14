import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

    render() {
        return (
            <View style={styles.body}>

                <View style={styles.header}>
                    <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#ffffff' }}>Software de Gestão</Text>
                </View>

                {/* <ScrollView pagingEnable={true}>  faz o carregamento do scroll por etapas */}
                <ScrollView >
                    <View style={styles.a}></View>
                    <View style={styles.b}></View>
                    <View style={styles.a}></View>
                    <View style={styles.b}></View>
                    <View style={styles.a}></View>
                    <View style={styles.b}></View>
                    <View style={styles.a}></View>
                    <View style={styles.b}></View>
                    <View style={styles.a}></View>
                    <View style={styles.b}></View>
                    <View style={styles.a}></View>
                    <View style={styles.b}></View>
                </ScrollView>

                <View style={styles.rodape}>
                    <Text style={{textAlign:'center', fontSize:12, fontWeight:'bold', color:'#ffffff', textAlign:'right', padding:5 }}>Rodapé</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 24,
        flex: 1
    },
    header: {
        backgroundColor: '#0000FF',
        height: 40
    },
    rodape: {
        backgroundColor: '#0000FF',
        height: 20
    },
    a: {
        backgroundColor: 'red',
        height: 200
    },
    b: {
        backgroundColor: 'green',
        height: 200
    }
});