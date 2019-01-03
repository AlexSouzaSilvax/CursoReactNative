import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

class Botao extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        let c = 1;
        if (props.c) {
            c = parseInt(props.c);
        }

        let bg = '#696969';
        if (props.bg) {
            bg = props.bg;
        }

        let cor = '#FFFFFF';
        if (props.cor) {
            cor = props.cor;
        }

        let tamanho = 25;
        if (props.tamanho) {
            tamanho = parseInt(props.tamanho);
        }

        let negrito;
        if (props.negrito == "s") {
            negrito = 'bold';
        }

        this.styles = StyleSheet.create({
            area: {
                flex: c,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#999999',
                backgroundColor: bg,
                borderRadius: 30,
            },
            text: {
                fontSize: tamanho,
                color: cor,
                fontWeight: negrito
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
                <Text style={this.styles.text}>{this.props.n}</Text>
            </TouchableOpacity>
        );
    }

}

export default class CalculadoraIphone extends Component {

    constructor(props) {
        super(props);
        this.state = { r: '0' };

        this.btn = this.btn.bind(this);
    }

    btn(b) {
        let s = this.state;

        if (b == 'C') {
            s.r = '0';
        }
        else if (b == '=') {
            s.r = eval(s.r);
            let resString = s.r = eval(s.r);
            Alert.alert(title = "Resultado:", message = resString.toString());
        }
        else {
            if (s.r == '0') {
                s.r = b;
            } else {
                s.r += b;
            }
        }

        this.setState(s);
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.linhaRes}>
                    <Text style={styles.res}>{this.state.r}</Text>
                </View>
                <View style={styles.linha}>
                    <Botao c="3" n="C" bg="#C0C0C0" cor='#000000' onPress={() => { this.btn("C") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="/" bg="#FD9536" tamanho='30' negrito="s" onPress={() => { this.btn("/") }} />
                </View>
                <View style={styles.linha}>
                    <Botao n="7" onPress={() => { this.btn("7") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="8" onPress={() => { this.btn("8") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="9" onPress={() => { this.btn("9") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="*" bg="#FD9536" tamanho='30' negrito="s" onPress={() => { this.btn("*") }} />
                </View>
                <View style={styles.linha}>
                    <Botao n="4" onPress={() => { this.btn("4") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="5" onPress={() => { this.btn("5") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="6" onPress={() => { this.btn("6") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="-" bg="#FD9536" tamanho='30' negrito="s" onPress={() => { this.btn("-") }} />
                </View>
                <View style={styles.linha}>
                    <Botao n="1" onPress={() => { this.btn("1") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="2" onPress={() => { this.btn("2") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="3" onPress={() => { this.btn("3") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="+" bg="#FD9536" tamanho='30' negrito="s" onPress={() => { this.btn("+") }} />
                </View>
                <View style={styles.linha}>
                    <Botao c="2" n="0" onPress={() => { this.btn("0") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="." onPress={() => { this.btn(".") }} />
                    <View style={{ margin: 5 }}></View>
                    <Botao n="=" bg="#FD9536" tamanho='30' negrito="s" onPress={() => { this.btn("=") }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#000000', //#696969
        paddingTop: 24,
        flex: 1
    },
    linha: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#000000"
    },
    linhaRes: {
        flex: 1,
        flexDirection: 'row'
    },
    res: {
        margin: 5,
        color: '#FFFFFF',
        fontSize: 55,
        flex: 1,
        textAlign: 'right',
        fontWeight: 'bold'
    }
});