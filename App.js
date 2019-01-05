import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class PrimeiroProjeto extends Component {


    render() {
        return (
            <View style={styles.body}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 24,        
        flex:1
    }
});