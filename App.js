import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao: {
                width:250,
                height:50,
                borderWidth:2,
                borderColor:'#FF0000',
                backgroundColor:'transparent'
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={() => {
                Alert.alert("GUANABARA É O REI");
            }}>
                <View>
                    <Text>Quebrar bixcoito</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class PrimeiroProjeto extends Component {

    render() {
        return (
            <View style={styles.body}>
                <Botao />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 50
    }
});    