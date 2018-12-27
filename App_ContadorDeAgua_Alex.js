import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props) {
        super(props);
        this.state = { consumido: 0, status: 'Ruim', pct: '0' };

        this.addCopo = this.addCopo.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }

    addCopo() {
        let s = this.state;
        s.consumido += 200;
        this.setState(s);

        this.atualizar();
    }

    atualizar() {
        let s = this.state;
        s.pct = ((s.consumido / 200) * 100);

        if (s.pct >= 100 && s.pct < 700) {
            s.status = 'Bom';
        } else if (s.pct >= 700 && s.pct < 100) {
            s.status = 'Muito bom';
        } else if (s.pct >= 1000) {
            s.status = 'Excelente';
        } else if (s.pct >= 10000) {
            s.status = 'Zerou a vida kk';
        }

        this.setState(s);
    }


    render() {
        return (
            <View style={styles.body}>
                <ImageBackground style={styles.bgImage} source={require('./img/waterbg.png')}>

                    <View>

                        <View style={styles.infoArea}>

                            <View style={styles.area}>
                                <Text style={styles.areaTitulo}>Meta</Text>
                                <Text style={styles.areaDado}>2000ml</Text>
                            </View>

                            <View style={styles.area}>
                                <Text style={styles.areaTitulo}>Consumido</Text>
                                <Text style={styles.areaDado}>{this.state.consumido}</Text>
                            </View>

                            <View style={styles.area}>
                                <Text style={styles.areaTitulo}>Status</Text>
                                <Text style={styles.areaDado}>{this.state.status}</Text>
                            </View>

                        </View>

                        <View style={styles.pctArea}>
                            <Text style={styles.pctText}>{this.state.pct}%</Text>
                        </View>

                        <View style={styles.btnArea}>
                            <Button title="Beber 200ml" onPress={this.addCopo} />
                        </View>

                    </View>

                </ImageBackground>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 20
    },
    bgImage: {
        flex: 1,
        width: null
    },
    infoArea: {
        flex: 1,
        flexDirection: 'row'
    },
    area: {
        flex: 1,
        alignItems: 'center',
        marginTop: 70
    },
    areaTitulo: {
        color: '#45B2FC',
    },
    areaDado: {
        color: '#2b4274',
        fontSize: 15,
        fontWeight: 'bold'
    },
    pctArea: {
        marginTop: 230,
        alignItems: 'center'
    },
    pctText: {
        fontSize: 70,
        color: '#FFFFFF'
    },
    btnButton: {
        marginTop: 30,
        textAlign: 'center'
    }
});