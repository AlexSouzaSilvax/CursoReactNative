import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';

class Img extends Component {

  render() {

    let imagem = {
      uri: 'https://pbs.twimg.com/profile_images/1069438546971377664/' + this.props.nome + '.jpg'
    };

    return (
      <Image source={imagem} style={{ width: parseInt(this.props.largura), height: parseInt(this.props.altura) }} />
    );
  }
}

export default class PrimeiroProjeto extends Component {

  somar(n1, n2) {
    return n1 + n2;
  }


  render() {
    {/**/ }
    let nome = 'Alex Silva';
    let n1 = 2;
    let n2 = 2;
    let result = n1 + n2;



    {/*
    let imagem = {
      uri: 'https://pbs.twimg.com/profile_images/1069438546971377664/bNbb26aq_400x400.jpg'
    };
  */}

    return (
      <View style={{ margin: 20, paddingTop: 20 }}>
        
        <Text>Ola Mundo!</Text>
        <Text>GUANABARA É O REI!</Text>
        <Text style={styles.texto}>My name is {nome}</Text>
        <Text style={styles.texto}>A soma de 2+2 é {this.somar(2, 2)}</Text>
        {/*
        <TextInput style={{ height: 25, borderColor: 'blue', borderWidth: 1 }} value=( />
        <TextInput style={{ height: 25, borderColor: 'blue', borderWidth: 1 }} value={parseInt(this.n2)} />
        */}

        <Button title="Somar" onPress={(n1, n2) => {
          alert("Seu nome é " + nome + "\n" + "Resultado: " + result);
          console.log(result);
        }} style={{ fontSize: 25 }} />


        {/*<Text style={{ fontSize: 25, color: 'red' }}>Ola mundo</Text>

        <Image source={{ uri: 'https://alunos.phpdozeroaoprofissional.com.br/albert.jpg' }} style={{ width: 300, height: 300 }} />
        <Image source={imagem} style={{ width: 250, height: 250 }} />*/}

        {/**/}<Img nome="bNbb26aq_400x400" largura="280" altura="300" />

        <Button title="Abrir" onPress={() => {
          alert("teste");
        }} />

        <Text>Texto de exemplo</Text>

      </View>
    );
  }
}

{/**/ }
const styles = StyleSheet.create({
  texto: {
    fontSize: 30
  }
});
