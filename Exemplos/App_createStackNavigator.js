import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class TelaInicial extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Chat'
    });

    constructor(props) {
        super(props);
        this.state = { nome: '', idade: '' }

        this.conversar = this.conversar.bind(this);
    }

    conversar() {
        this.props.navigation.navigate('Conversa', {
            nome: this.state.nome, idade: this.state.idade
        })
    }

    render() {
        return (
            <View>
                <Text>Olá Mundo!</Text>
                <TextInput style={{ height: 40, borderWidth: 1, borderColor: '#000000', width: 200 }} placeholder="Qual seu nome?" onChangeText={(nome) => this.setState({ nome })} />
                <TextInput style={{ height: 40, borderWidth: 1, borderColor: '#000000', width: 200 }} placeholder="Qual sua idade?" onChangeText={(idade) => this.setState({ idade })} />
                <Button title="Conversar" onPress={this.conversar} />
            </View>
        );
    }

}

class Conversa extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.nome + " (" + navigation.state.params.idade + " anos)"
    });

    render() {
        return (
            <View>
                <Text>Tela de conversa</Text>
                <Text>Nome: {this.props.navigation.state.params.nome}</Text>
                <Text>Idade: {this.props.navigation.state.params.idade}</Text>
            </View>
        );
    }
}

const Navegador = createStackNavigator({
    Home: {
        screen: TelaInicial
    },
    Conversa: {
        screen: Conversa
    }
});

export default createAppContainer(Navegador);