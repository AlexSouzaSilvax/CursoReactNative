import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (

            <View style={{ paddingTop: 25, flex: 1, backgroundColor: 'black' }}>

                <View style={{ height: 50, backgroundColor: 'white' }}>
                    <Text style={{ color: 'blue', fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>GXS</Text>
                </View>

                <View style={{ margin: 10, flex: 1, backgroundColor: 'green' }}>

                    <Button title="Acessar" onPress={() => {
                        alert("Acessou kkk");
                    }} style={{ width: 20 }} />


                </View>

                <View style={{ margin: 0, height: 20, backgroundColor: 'blue' }}>
                    <Text style={{ paddingRight: 5, fontSize: 11, textAlign: 'right', color: 'white' }}>GUANABARA É O REI</Text>
                </View>

            </View>
        );
    }
}
