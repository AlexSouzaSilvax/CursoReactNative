import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ConversationScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Conversa"
    });

    render() {
        return (
            <View>
                <Text>Tela de conversa</Text>
            </View>
        );
    }
}