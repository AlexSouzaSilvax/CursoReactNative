import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = { inputTexto: '', texto: '' };
        this.apertouBotao = this.apertouBotao.bind(this);
    }


    apertouBotao() {
        let s = this.state;

        if (s.inputTexto == "Alex" || s.inputTexto == "alex") {
            s.texto = "Você acertou meu nome, é " + s.inputTexto;
            Alert.alert("Você acertou meu nome :)");
        } else {
            s.texto = "Meu nome não é esse :(\ntente novamente...";
        }
        this.setState(s);
    }

    render() {
        return (
            <View style={{ paddingTop: 30 }}>

                <TextInput style={styles.input} placeholder='Descubra qual é o meu nome...' onChangeText={(inputTexto) => this.setState({ inputTexto })} />

                <Button title='Aperte em mim' onPress={this.apertouBotao}></Button>

                <Text style={styles.texto} >{this.state.texto}</Text>

            </View >

        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        margin: 10,
        padding: 10
    },
    texto: {
        fontSize: 20,
        textAlign: 'center'
    }
});