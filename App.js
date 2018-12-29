import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native';

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
                fontSize: 18,
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


    constructor(props) {
        super(props);
        this.state = { texto: 'Frase do dia...' };

        this.frases = ['A vida trará coisas boas se tiveres paciência.', 'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Gente todo dia arruma os cabelos, por que não o coração?'];

        this.quebrarBixcoito = this.quebrarBixcoito.bind(this);
    }

    quebrarBixcoito() {
        let s = this.state;
        let r = Math.floor(Math.random() * this.frases.length);
        Alert.alert(this.frases[r]);
        s.texto = this.frases[r];
        this.setState(s);
    }

    render() {
        return (
            <View style={styles.body}>
                <ImageBackground style={{ width: null, flex: 1 }} source={require('./img/back.jpg')}>
                    <View style={styles.area}>
                        <Image source={require('./img/cookie.png')} />
                        <Text style={styles.textoBotao}>"{this.state.texto}"</Text>
                        <Botao color="white" texto="Quebrar Bixcoito" acao={this.quebrarBixcoito} />
                    </View>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 24,
        flex: 1
    },
    area: {
        margin: 10,
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    }
});    