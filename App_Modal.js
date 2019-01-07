import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, Button } from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };

        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
    }

    abrirModal() {
        let s = this.state;
        s.modalVisible = true;
        this.setState(s);
    }

    fecharModal() {
        let s = this.state;
        s.modalVisible = false;
        this.setState(s);
    }

    render() {
        return (
            <View style={styles.body}>

                <Modal animationType="slide" visible={this.state.modalVisible} onRequestClose={()=>{}} >
                   
                    <View style={styles.modal}>                        
                        <Button style={styles.botaoModal} title="X" onPress={this.fecharModal} />
                        <Text>Teste</Text>
                    </View>

                </Modal>

                <Button title="Abrir Modal" onPress={this.abrirModal} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        margin:15,        
        backgroundColor: "#00FF00",
        paddingTop: 24,
        alignItems: "flex-start"
    },
    botaoModal: {
        
    }
});