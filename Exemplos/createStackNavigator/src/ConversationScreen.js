import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ConversationScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.nome + " " + navigation.state.params.idade + " anos"
    });

    render() {
        return (
            <View>
                <Text>Tela de conversa</Text>
            </View>
        );
    }
}