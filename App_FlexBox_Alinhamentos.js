import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

    render() {
        return (

            <View >

                {/* DEIXA OS COMPONENTES ALINHADOS DE FORMA HORIZONTAL
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 50, backgroundColor: 'blue' }}></View>
                    <View style={{ flex: 2, height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1, height: 50, backgroundColor: 'green' }}></View>
                </View>
                */}

                {/* FIXA OS COMPONENTES A CANTO SUPERIOR A ESQUERDA DO APP
                <View style={{ flex: 1, flexDirection: 'row', justifyContent:'flex-end' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
                </View>
                */}

                {/* DEIXA OS COMPONENTES ALINHADOS NO CENTRO DO APP
                <View style={{ flex: 1, flexDirection: 'row', justifyContent:'center' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
                </View>
                */}

                {/* DEIXA COM ESPAÇAMENTO ENTRE CADA COMPONENT
                <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-between' }}> 
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
                </View>
                */}

                {/* DEIXA COM ESPAÇAMENTO ANTES E DEPOIS DE CADA COMPONENT
                <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-around' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
                </View>
                */}

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
                    <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
                </View>

            </View>
        );
    }
}
