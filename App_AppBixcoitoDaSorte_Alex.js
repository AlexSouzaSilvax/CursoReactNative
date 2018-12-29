import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao: {
                width: 250,
                height: 50,
                borderWidth: 2,
                borderColor: props.color,
                backgroundColor: 'transparent',
                borderRadius: 25
            },
            botaoArea: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            botaoText: {
                color: props.color,
                fontSize: 14,
                fontWeight: 'bold'
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={this.props.acao}>
                <View style={this.styles.botaoArea}>
                    <Text style={this.styles.botaoText}>{this.props.texto}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class PrimeiroProjeto extends Component {

    quebrarBixcoito() {
        Alert.alert("Frase qualquer");
    }

    render() {
        return (
            <View style={styles.body}>
                <Botao color="#B59619" texto="NOTHING" acao={this.quebrarBixcoito}/>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 50,
        margin: 10
    }
});    