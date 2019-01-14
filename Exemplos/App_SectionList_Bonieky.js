import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			listData:[
				{title:'Bonieky', data:[
					{key:'1',  idade:90}
				]},
				{title:'Cláudio', data:[
					{key:'2', idade:23}
				]},
				{title:'Dantas', data:[
					{key:'3', idade:78}
				]}
			]
		};
	}

	listSectionRender(section) {
		return (
			<Text style={styles.section}>Letra {section.title}</Text>
		);
	}

	listRender(item) {
		return (
			<Text style={styles.item}>{item.idade} anos</Text>
		);
	}

	render() {
		return (
			<View style={styles.body}>
				<SectionList sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	},
	item:{
		fontSize:18,
		height:40,
		padding:10
	},
	section:{
		fontSize:14,
		backgroundColor:'#CCCCCC',
		padding:10
	}
});















