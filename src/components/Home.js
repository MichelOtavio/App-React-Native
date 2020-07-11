import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighLight } from 'react';

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={StyleSheet.container}>
        <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>
        <Text style={styles.title}>Navegação</Text>
        <TouchableHighLight
          onPress={() => navigate('Profile', { name: 'Michel' })}
          style={styles.button}
        >
          <Text style={{ fontSize: 20 }}>Entrar</Text>
        </TouchableHighLight>
      </View>
    );
  }
};



