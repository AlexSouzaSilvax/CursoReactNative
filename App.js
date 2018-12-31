import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PrimeiroProjeto extends Component {

    render() {
        return (
            <View style={styles.body}>
                <Text>aaa</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        margin: 10
    }
});