import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<View style={styles.body}>
                <Modal>
                    
                </Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:24,
        flex:1,
        margin:5
	}
});