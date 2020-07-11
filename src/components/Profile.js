import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighLight } from 'react';

class Profile extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={StyleSheet.container}>
        <Text style={styles.title}>Navegação</Text>
      </View>
    );
  }
};



